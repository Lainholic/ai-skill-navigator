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
        return {'text': 'This is a connection test message, not a real AI response.\nI will review the previous ideas and check for missing questions.', 'usage': {'input_tokens': 0, 'output_tokens': 0}}
    if provider not in (*ENDPOINTS, 'azure', 'vertex') or not model or not key or not isinstance(prompt, str) or not 1 <= len(prompt) <= 120000:
        raise ValueError('Check the provider, model name, API key, and meeting content.')
    payload = {'model': model, 'messages': [
        {'role': 'system', 'content': 'You are a meeting participant. Respond to the topic and prior remarks, address other views directly, and distinguish facts from assumptions. Reply concisely in English.'},
        {'role': 'user', 'content': prompt},
    ]}
    headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key}
    url = ENDPOINTS.get(provider)
    if provider == 'azure':
        endpoint = urllib.parse.urlsplit(data.get('endpoint', '').strip())
        host = endpoint.hostname or ''
        if endpoint.scheme != 'https' or not re.fullmatch(r'[a-z0-9-]+\.(openai\.azure\.com|cognitiveservices\.azure\.com|services\.ai\.azure\.com)', host) or endpoint.port or endpoint.username or endpoint.password or endpoint.path not in ('', '/') or endpoint.query or endpoint.fragment:
            raise ValueError('Enter the Azure resource endpoint as https://your-resource.openai.azure.com.')
        url = f'https://{host}/openai/v1/chat/completions'
        headers = {'Content-Type': 'application/json', 'api-key': key}
    elif provider == 'vertex':
        if not re.fullmatch(r'[A-Za-z0-9._-]{1,150}', model):
            raise ValueError('Check the Vertex model name.')
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
            raise ValueError('The AI returned an empty response.')
        return {'text': text.strip(), 'usage': read_usage(provider, result)}
    except urllib.error.HTTPError as exc:
        raise ValueError(f'The provider rejected the request (HTTP {exc.code}). Check the model, key, and access.') from exc
    except (urllib.error.URLError, TimeoutError, KeyError, IndexError, json.JSONDecodeError) as exc:
        raise ValueError('Could not connect to the AI or process its response. Check the connection and model settings.') from exc


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
            raise ValueError('A single rate for this model could not be determined. Enter rates manually.')
        inp, out = prices.pop()
        if any(type(v) not in (int, float) or not math.isfinite(v) or v < 0 for v in (inp, out)):
            raise ValueError('Provider rates could not be verified. Enter rates manually.')
        return {'input_price': inp, 'output_price': out}
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, TypeError, AttributeError) as exc:
        raise ValueError('Could not load Nebius rates. Enter them manually.') from exc


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
                raise ValueError('Invalid request size.')
            data = json.loads(self.rfile.read(length))
            result = nebius_price(data.get('model', '')) if self.path == '/price' else answer(data)
            status = 200
        except (ValueError, TypeError, AttributeError, json.JSONDecodeError) as exc:
            result, status = {'error': str(exc)}, 400
        self.send(status, json.dumps(result, ensure_ascii=False).encode('utf-8'), 'application/json; charset=utf-8')


if __name__ == '__main__':
    server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
    url = f'http://127.0.0.1:{server.server_port}/'
    print('AI Meeting Room:', url, flush=True)
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
