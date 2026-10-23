import sys, pathlib
from types import SimpleNamespace
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from vanta_ui.telemetry import Telemetry

def test_rates_and_shape():
    t = [100.0]; recv = [0]; sent = [0]
    tel = Telemetry(net=lambda: SimpleNamespace(bytes_recv=recv[0], bytes_sent=sent[0]), clock=lambda: t[0])
    first = tel.sample()
    assert first["down"] == 0 and {"cpu", "mem", "procs", "up", "down", "battery", "idle"} <= set(first)
    t[0] += 2; recv[0] += 250_000; sent[0] += 50_000          # 1000 kbit/s down, 200 up
    s = tel.sample(window=("code.exe", "main.py - VANTA"))
    assert abs(s["down"] - 1000) < 1 and abs(s["up"] - 200) < 1
    assert s["app"] == "code.exe" and 0 <= s["cpu"] <= 100 and 0 <= s["mem"] <= 100

def test_no_window_when_not_given():
    tel = Telemetry(net=lambda: SimpleNamespace(bytes_recv=0, bytes_sent=0))
    assert "app" not in tel.sample()
