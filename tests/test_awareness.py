import sys, time, pathlib, tempfile
import numpy as np
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from awareness.privacy import PrivacyState
from awareness.events import ActivityLog
from awareness.process_watcher import ProcessWatcher
from awareness.window_watcher import WindowWatcher
from awareness.frame_diff import FrameDiffer

def mk():
    d = pathlib.Path(tempfile.mkdtemp())
    pr = PrivacyState(d / "p.json")
    return d, pr, ActivityLog(pr, d / "a.db")

def test_pause_and_blocklist():
    d, pr, log = mk()
    assert log.add("window", "focus", app="code.exe", title="main.py") is not None
    assert log.add("window", "focus", app="keepassxc.exe", title="vault") is None
    assert log.add("window", "focus", app="chrome.exe", title="Bank login", url="https://mybank.com") is None
    assert log.add("window", "focus", app="chrome.exe", title="Incognito tab") is None
    pr.set_paused(True)
    assert log.add("window", "focus", app="code.exe", title="other") is None
    pr.set_paused(False)
    assert log.add("window", "focus", app="code.exe", title="other") is not None
    assert log.add("screen", "screen_change") is None   # screen source off by default

def test_redaction_and_persistence():
    d, pr, log = mk()
    log.add("window", "focus", app="x", title="mail a.b@c.com token=abc123 4111 1111 1111 1111")
    t = log.recent(5)[0]["title"]
    assert "a.b@c.com" not in t and "abc123" not in t and "4111" not in t
    assert PrivacyState(d / "p.json").cfg["paused"] is False
    pr.set_paused(True); assert PrivacyState(d / "p.json").paused

def test_compaction():
    d, pr, log = mk()
    old = time.time() - 10 * 86400
    log.add("window", "focus", app="code.exe", title="a", ts=old)
    log.add("window", "focus", app="chrome.exe", title="b", ts=old + 600)
    log.add("window", "focus", app="code.exe", title="c", ts=time.time())
    assert log.compact() == 2
    assert len(log.recent(60 * 24 * 365)) == 1
    s = log.summaries()
    assert s and "code.exe" in s[0][1]

def test_process_watcher():
    d, pr, log = mk()
    alerts = []
    t = [1000.0]
    procs = [{"pid": 1, "name": "chrome.exe", "exe": "c:\\p\\chrome.exe", "cpu_percent": 3}]
    pw = ProcessWatcher(log, lambda *a: alerts.append(a), learn_seconds=100, baseline_path=d / "b.json",
                        lister=lambda: procs, port_lister=lambda: {80}, clock=lambda: t[0], cpu_polls=3)
    pw.tick()                          # learning: chrome is baseline
    t[0] += 200                        # learning over
    procs.append({"pid": 9, "name": "evil.exe", "exe": "c:\\users\\a\\appdata\\local\\temp\\evil.exe", "cpu_percent": 95})
    for _ in range(4): pw.tick()
    kinds = [a[1] for a in alerts]
    assert any("Unfamiliar program" in k for k in kinds)
    assert any("CPU" in k for k in kinds)
    assert len([a for a in alerts if "Unfamiliar" in a[1]]) == 1   # deduped
    pw2 = ProcessWatcher(log, None, baseline_path=d / "b.json", lister=lambda: [], port_lister=lambda: set())
    assert "chrome.exe" in pw2._names                              # baseline persisted

def test_new_port():
    d, pr, log = mk(); alerts = []; t = [0.0]; ports = [{80}]
    pw = ProcessWatcher(log, lambda *a: alerts.append(a), learn_seconds=1, baseline_path=d / "b.json",
                        lister=lambda: [], port_lister=lambda: ports[0], clock=lambda: t[0])
    pw.tick(); t[0] = 10; pw.tick(); ports[0] = {80, 4444}; pw.tick()
    assert any("4444" in a[1] for a in alerts)

def test_window_watcher():
    d, pr, log = mk(); cur = [("code.exe", "a.py")]; idle = [0.0]
    ww = WindowWatcher(log, provider=lambda: cur[0], idle_provider=lambda: idle[0])
    ww.tick(); cur[0] = ("chrome.exe", "GitHub"); time.sleep(0); ww.tick()
    idle[0] = 400; ww.tick()
    kinds = [e["kind"] for e in log.recent(5)]
    assert kinds.count("focus") == 2 and "idle" in kinds
    assert "using code.exe" in log.describe_recent(5)

def test_frame_diff():
    fd = FrameDiffer()
    a = np.zeros((900, 1600, 3), np.uint8)
    assert fd.feed(a)["first"]
    assert fd.feed(a.copy()) is None
    b = a.copy(); b[10:12, 10:12] = 255                 # tiny change (cursor)
    assert fd.feed(b) is None
    c = b.copy(); c[300:600, 800:1400] = 255            # a window appears
    r = fd.feed(c)
    assert r and not r["first"]
    x, y, w, h = r["bbox"]
    assert 780 <= x <= 820 and 280 <= y <= 320 and 580 <= w <= 640 and 280 <= h <= 340
