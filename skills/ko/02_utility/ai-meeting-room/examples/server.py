import json
import math
import re
import secrets
import urllib.error
import urllib.request
import urllib.parse
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TOKEN = secrets.token_urlsafe(32)
ENDPOINTS = {
    'openai': 'https://api.openai.com/v1/chat/completions',
    'deepseek': 'https://api.deepseek.com/chat/completions',
    'nebius': 'https://api.tokenfactory.nebius.com/v1/chat/completions',
}


def answer(data):
    provider, model, key = data.get('provider'), data.get('model', '').strip(), data.get('key', '').strip()
    prompt = data.get('prompt', '')
    if provider == 'demo':
        return {'text': '이 발언은 연결 시험용 예시입니다. 실제 AI 응답이 아닙니다.\n앞선 의견을 확인하고 근거와 빠진 질문을 점검하겠습니다.', 'usage': {'input_tokens': 0, 'output_tokens': 0}}
    if provider not in (*ENDPOINTS, 'azure', 'vertex') or not model or not key or not isinstance(prompt, str) or not 1 <= len(prompt) <= 120000:
        raise ValueError('제공사, 모델명, API 키와 회의 내용을 확인해 주세요.')
    payload = {'model': model, 'messages': [
        {'role': 'system', 'content': '당신은 회의 참가자입니다. 주제와 앞선 발언을 바탕으로 구체적으로 대답하세요. 다른 의견에 직접 반응하고 사실과 추측을 구분하세요. 간결하게 한국어로 답하세요.'},
        {'role': 'user', 'content': prompt},
    ]}
    headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key}
    url = ENDPOINTS.get(provider)
    if provider == 'azure':
        endpoint = urllib.parse.urlsplit(data.get('endpoint', '').strip())
        host = endpoint.hostname or ''
        if endpoint.scheme != 'https' or not re.fullmatch(r'[a-z0-9-]+\.(openai\.azure\.com|cognitiveservices\.azure\.com|services\.ai\.azure\.com)', host) or endpoint.port or endpoint.username or endpoint.password or endpoint.path not in ('', '/') or endpoint.query or endpoint.fragment:
            raise ValueError('Azure 리소스 주소를 https://이름.openai.azure.com 형식으로 입력해 주세요.')
        url = f'https://{host}/openai/v1/chat/completions'
        headers = {'Content-Type': 'application/json', 'api-key': key}
    elif provider == 'vertex':
        if not re.fullmatch(r'[A-Za-z0-9._-]{1,150}', model):
            raise ValueError('Vertex 모델명을 확인해 주세요.')
        url = f'https://aiplatform.googleapis.com/v1/publishers/google/models/{model}:generateContent'
        headers = {'Content-Type': 'application/json', 'x-goog-api-key': key}
        payload = {'contents': [{'role': 'user', 'parts': [{'text': prompt}]}]}
    body = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=body, headers=headers)
    # Credentials must never be forwarded to a redirected URL.
    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *args, **kwargs):
            return None
    try:
        with urllib.request.build_opener(NoRedirect).open(req, timeout=120) as response:
            result = json.load(response)
        if provider == 'vertex':
            text = ''.join(part.get('text', '') for part in result['candidates'][0]['content']['parts'] if not part.get('thought'))
        else:
            text = result['choices'][0]['message']['content']
        if not isinstance(text, str) or not text.strip():
            raise ValueError('AI가 빈 응답을 보냈습니다.')
        return {'text': text.strip(), 'usage': read_usage(provider, result)}
    except urllib.error.HTTPError as exc:
        raise ValueError(f'제공사가 요청을 거절했습니다 (HTTP {exc.code}). 모델명과 키, 사용 가능 여부를 확인해 주세요.') from exc
    except (urllib.error.URLError, TimeoutError, KeyError, IndexError, json.JSONDecodeError) as exc:
        raise ValueError('AI 연결 또는 응답 처리에 실패했습니다. 연결 상태와 모델 설정을 확인해 주세요.') from exc


def read_usage(provider, result):
    if provider == 'vertex':
        usage = result.get('usageMetadata') or {}
        prompt = usage.get('promptTokenCount')
        candidate = usage.get('candidatesTokenCount')
        thoughts = usage.get('thoughtsTokenCount', 0)
        if not all(type(n) is int and n >= 0 for n in (prompt, candidate, thoughts)):
            return None
        completion = candidate + thoughts
    else:
        usage = result.get('usage') or {}
        prompt, completion = usage.get('prompt_tokens'), usage.get('completion_tokens')
        if not all(type(n) is int and n >= 0 for n in (prompt, completion)):
            return None
    return {'input_tokens': prompt, 'output_tokens': completion}


def nebius_price(model):
    request = urllib.request.Request('https://tokenfactory.nebius.com/api/public/models_info')
    try:
        with urllib.request.urlopen(request, timeout=10) as response:
            data = json.loads(response.read(2000000))
        prices = {(item.get('input_price_per_million_tokens'), item.get('output_price_per_million_tokens'))
                  for group in data for item in group.get('flavors', []) if item.get('model_id') == model}
        if len(prices) != 1:
            raise ValueError('해당 모델의 단가를 하나로 확인하지 못했습니다. 직접 입력해 주세요.')
        inp, out = prices.pop()
        if any(type(v) not in (int, float) or not math.isfinite(v) or v < 0 for v in (inp, out)):
            raise ValueError('제공사 단가를 확인하지 못했습니다. 직접 입력해 주세요.')
        return {'input_price': inp, 'output_price': out}
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, TypeError, AttributeError) as exc:
        raise ValueError('Nebius 단가를 불러오지 못했습니다. 직접 입력해 주세요.') from exc


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def send(self, status, payload, content_type):
        self.send_response(status)
        self.send_header('Content-Type', content_type)
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'")
        self.send_header('Content-Length', str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def allowed(self):
        return self.headers.get('Host') == f'127.0.0.1:{self.server.server_port}'

    def do_GET(self):
        if not self.allowed():
            return self.send(403, b'Forbidden', 'text/plain')
        files = {'/': ('index.html', 'text/html; charset=utf-8'), '/app.js': ('app.js', 'text/javascript; charset=utf-8'), '/style.css': ('style.css', 'text/css; charset=utf-8')}
        if self.path == '/token':
            return self.send(200, json.dumps({'token': TOKEN}).encode(), 'application/json')
        if self.path not in files:
            return self.send(404, b'Not found', 'text/plain')
        path, mime = files[self.path]
        self.send(200, (ROOT / path).read_bytes(), mime)

    def do_POST(self):
        origin = f'http://127.0.0.1:{self.server.server_port}'
        if not self.allowed() or self.path not in ('/ask', '/price') or self.headers.get('Origin') != origin or self.headers.get('X-Meeting-Token') != TOKEN:
            return self.send(403, b'Forbidden', 'text/plain')
        try:
            length = int(self.headers.get('Content-Length', '0'))
            if not 1 <= length <= 300000:
                raise ValueError('요청 크기가 올바르지 않습니다.')
            data = json.loads(self.rfile.read(length))
            result = nebius_price(data.get('model', '')) if self.path == '/price' else answer(data)
            status = 200
        except (ValueError, TypeError, AttributeError, json.JSONDecodeError) as exc:
            result, status = {'error': str(exc)}, 400
        self.send(status, json.dumps(result, ensure_ascii=False).encode('utf-8'), 'application/json; charset=utf-8')


if __name__ == '__main__':
    server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    url = f'http://127.0.0.1:{server.server_port}/'
    print('AI 회의실:', url, flush=True)
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
