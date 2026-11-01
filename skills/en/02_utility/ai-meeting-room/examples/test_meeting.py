import json
import io
import threading
import unittest
import urllib.error
import urllib.request
from http.server import ThreadingHTTPServer
from unittest.mock import patch

import server


class MeetingTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.http = ThreadingHTTPServer(('127.0.0.1', 0), server.Handler)
        cls.thread = threading.Thread(target=cls.http.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f'http://127.0.0.1:{cls.http.server_port}'

    @classmethod
    def tearDownClass(cls):
        cls.http.shutdown()
        cls.http.server_close()
        cls.thread.join()

    def request(self, origin, token, data):
        request = urllib.request.Request(self.base + '/ask', data=json.dumps(data).encode(), headers={
            'Content-Type': 'application/json', 'Origin': origin, 'X-Meeting-Token': token})
        return urllib.request.urlopen(request)

    def test_demo_does_not_access_network(self):
        with patch('server.urllib.request.build_opener', side_effect=AssertionError('network used')):
            with self.request(self.base, server.TOKEN, {'provider': 'demo'}) as response:
                resp_text = json.load(response)['text']
                self.assertTrue('실제 AI 응답이 아닙니다' in resp_text or 'not a real AI response' in resp_text)

    def test_cross_origin_and_missing_token_are_rejected(self):
        for origin, token in [('http://evil.example', server.TOKEN), (self.base, '')]:
            with self.assertRaises(urllib.error.HTTPError) as result:
                self.request(origin, token, {'provider': 'demo'})
            self.assertEqual(result.exception.code, 403)

    def test_unknown_provider_is_rejected(self):
        with self.assertRaises(urllib.error.HTTPError) as result:
            self.request(self.base, server.TOKEN, {'provider': 'unknown', 'key': 'test', 'model': 'test', 'prompt': 'test'})
        self.assertEqual(result.exception.code, 400)

    def test_azure_and_vertex_request_formats(self):
        class Opener:
            def open(self, request, timeout):
                if 'azure.com' in request.full_url:
                    self.assert_azure(request)
                    return io.BytesIO(b'{"choices":[{"message":{"content":"azure ok"}}]}')
                self.assert_vertex(request)
                return io.BytesIO(b'{"candidates":[{"content":{"parts":[{"text":"vertex ok"}]}}]}')
            def assert_azure(self, req):
                assert req.full_url == 'https://example.openai.azure.com/openai/v1/chat/completions'
                assert req.get_header('Api-key') == 'test-key'
            def assert_vertex(self, req):
                assert req.full_url == 'https://aiplatform.googleapis.com/v1/publishers/google/models/test-model:generateContent'
                assert req.get_header('X-goog-api-key') == 'test-key'
        with patch('server.urllib.request.build_opener', return_value=Opener()):
            common = {'key':'test-key', 'model':'test-model', 'prompt':'test'}
            self.assertEqual(server.answer({**common, 'provider':'azure', 'endpoint':'https://example.openai.azure.com'})['text'], 'azure ok')
            self.assertEqual(server.answer({**common, 'provider':'vertex'})['text'], 'vertex ok')
            with self.assertRaises(ValueError):
                server.answer({**common, 'provider':'azure', 'endpoint':'https://example.openai.azure.com.evil.example'})

    def test_usage_counts_and_unknown(self):
        self.assertEqual(server.read_usage('nebius', {'usage': {'prompt_tokens': 500, 'completion_tokens': 30}}), {'input_tokens': 500, 'output_tokens': 30})
        self.assertEqual(server.read_usage('vertex', {'usageMetadata': {'promptTokenCount': 500, 'candidatesTokenCount': 30, 'thoughtsTokenCount': 20}}), {'input_tokens': 500, 'output_tokens': 50})
        self.assertIsNone(server.read_usage('nebius', {'usage': {'prompt_tokens': 5}}))
        self.assertIsNone(server.read_usage('vertex', {'usageMetadata': {}}))

    def test_nebius_price_lookup_and_ambiguous_price(self):
        catalog = [{'flavors': [{'model_id':'test', 'input_price_per_million_tokens':0.3, 'output_price_per_million_tokens':1.2}]}]
        with patch('server.urllib.request.urlopen', return_value=io.BytesIO(json.dumps(catalog).encode())):
            self.assertEqual(server.nebius_price('test'), {'input_price':0.3, 'output_price':1.2})
        catalog[0]['flavors'].append({'model_id':'test', 'input_price_per_million_tokens':0.4, 'output_price_per_million_tokens':1.2})
        with patch('server.urllib.request.urlopen', return_value=io.BytesIO(json.dumps(catalog).encode())):
            with self.assertRaises(ValueError): server.nebius_price('test')


if __name__ == '__main__':
    unittest.main()
