import sys, json, pathlib, threading, tempfile
from http.server import BaseHTTPRequestHandler, HTTPServer
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from orchestrator.local_model import LocalClient
from orchestrator.pool import ProviderPool, ResponseCache, Cooldowns

class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        self.send_response(200); self.end_headers()
        self.wfile.write(json.dumps({"models": [{"name": "qwen2.5:3b"}]}).encode())
    def do_POST(self):
        n = int(self.headers["Content-Length"]); body = json.loads(self.rfile.read(n))
        self.send_response(200); self.end_headers()
        self.wfile.write(json.dumps({"response": "local:" + body["prompt"]}).encode())

def server():
    s = HTTPServer(("127.0.0.1", 0), H); threading.Thread(target=s.serve_forever, daemon=True).start()
    return s, f"http://127.0.0.1:{s.server_port}"

def test_detect_and_generate():
    s, url = server()
    c = LocalClient(host=url)
    assert c.available() and c.generate("hi") == "local:hi"
    assert not LocalClient(model="llama3:8b", host=url).available()
    s.shutdown()

def test_not_running_is_unavailable():
    assert not LocalClient(host="http://127.0.0.1:1").available()

def test_remote_host_refused():
    try: LocalClient(host="http://evil.example.com")
    except ValueError: pass
    else: assert False

class Boom:
    def execute(self, *a, **k): raise RuntimeError("HTTP 429")

def test_pool_falls_to_local_last():
    s, url = server()
    pool = ProviderPool(openrouter=Boom(), local=LocalClient(host=url),
                        cache=ResponseCache(pathlib.Path(tempfile.mkdtemp()) / "c.db"), cooldowns=Cooldowns())
    text, label = pool.run("yo", "code")
    assert text == "local:yo" and label.startswith("local")
    s.shutdown()
