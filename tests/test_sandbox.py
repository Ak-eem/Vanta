import os, sys, pathlib, tempfile, time
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from utils import sandbox

PY = sys.executable
def d(): return tempfile.mkdtemp()

def test_env_scrubbed():
    os.environ["GROQ_API_KEY"] = "secret123"
    r = sandbox.run([PY, "-c", "import os;print(os.environ.get('GROQ_API_KEY'))"], d())
    assert r.returncode == 0 and "secret123" not in r.stdout and "None" in r.stdout

def test_timeout_kills():
    t = time.time()
    r = sandbox.run([PY, "-c", "import time;time.sleep(30)"], d(), timeout=1)
    assert r.timed_out and time.time() - t < 6

def test_output_capped():
    r = sandbox.run([PY, "-c", "print('x'*100000)"], d())
    assert len(r.stdout) <= sandbox.MAX_OUTPUT

def test_network_blocked_when_possible():
    rep = sandbox.isolation_report()
    code = "import socket;s=socket.socket();s.settimeout(2);s.connect(('1.1.1.1',80));print('CONNECTED')"
    r = sandbox.run([PY, "-c", code], d(), timeout=10)
    if rep["network_blocked_by_default"]:
        assert "CONNECTED" not in r.stdout
    else:
        assert r.notes
