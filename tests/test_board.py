import json
from types import SimpleNamespace as NS

from awareness import hardware, netinfo, programs
from awareness.hardware import Hardware, findings, read_lhm
from guardian.actions import Guardian, Refused
from guardian.audit import AuditLog
from vanta_ui import board as B


class FakePs:
    def __init__(self, procs=None, mem=50.0, temps=None):
        self._procs, self._mem, self._temps = procs or [], mem, temps
        self.t = 0
    def cpu_percent(self, interval=None, percpu=False): return [10.0, 30.0] if percpu else 20.0
    def cpu_count(self): return 2
    def cpu_freq(self): return NS(current=2400, max=3200)
    def virtual_memory(self): return NS(percent=self._mem, used=8 * 1024**3, total=16 * 1024**3)
    def swap_memory(self): return NS(percent=5, used=1024**3, total=4 * 1024**3)
    def disk_io_counters(self):
        self.t += 1
        return NS(read_bytes=self.t * 2_000_000, write_bytes=self.t * 1_000_000)
    def net_io_counters(self): return NS(bytes_recv=self.t * 500_000, bytes_sent=self.t * 100_000)
    def sensors_battery(self): return NS(percent=40, power_plugged=False, secsleft=3600)
    def boot_time(self): return 0
    def disk_partitions(self, all=False): return [NS(mountpoint="C:\\", fstype="NTFS", opts="")]
    def disk_usage(self, m): return NS(percent=96.0, used=480 * 1024**3, total=500 * 1024**3, free=20 * 1024**3)
    def process_iter(self, attrs=None):
        for pid, ppid, name, cpu, rss, created in self._procs:
            yield NS(info={"pid": pid, "ppid": ppid, "name": name, "cpu_percent": cpu, "memory_info": NS(rss=rss * 1024 * 1024), "create_time": created})
    def __getattr__(self, n):
        if n == "sensors_temperatures" and self._temps is not None:
            return lambda: self._temps
        raise AttributeError(n)


PROCS = [(1, 0, "chrome.exe", 20, 400, 100), (2, 1, "chrome.exe", 60, 600, 101), (3, 1, "chrome.exe", 10, 500, 102),
         (4, 0, "code.exe", 5, 300, 90), (5, 0, "svchost.exe", 1, 50, 10), (6, 0, "python.exe", 0, 100, 5)]


def make(**kw):
    t = [0.0]
    def clock():
        t[0] += 2
        return t[0]
    return Hardware(FakePs(PROCS, **kw), lhm=lambda: {}, clock=clock, own_pids={6})


def test_rates_and_groups():
    hw = make()
    hw.fast()
    s = hw.snapshot()
    assert s["cpu"]["pct"] == 20.0 and s["cpu"]["count"] == 2
    assert s["disk_io"]["read"] > 0 and s["net"]["down"] > 0
    chrome = next(p for p in s["programs"] if p["name"] == "chrome.exe")
    assert chrome["count"] == 3 and chrome["mem"] == 1500 and chrome["pid"] == 1     # root of the group, not the heaviest child
    assert next(p for p in s["programs"] if p["name"] == "svchost.exe")["protected"]
    assert next(p for p in s["programs"] if p["name"] == "python.exe")["protected"]   # VANTA itself
    assert s["disks"][0]["pct"] == 96.0


def test_findings_plain_and_thermal_none():
    s = make(mem=93).snapshot()
    texts = " ".join(f["text"] for f in s["findings"])
    assert "Memory is nearly full" in texts and "almost full" in texts
    assert s["thermal"]["source"] == "none" and s["cpu"]["temp"] is None
    assert findings({"mem": {"pct": 10}, "cpu": {"pct": 5}}) == []


def test_temperature_from_psutil_and_lhm():
    temps = {"coretemp": [NS(label="Core 0", current=93.0, high=100.0)]}
    s = make(temps=temps).snapshot()
    assert s["cpu"]["temp"] == 93.0 and s["thermal"]["source"] == "system"
    assert any("very hot" in f["text"] for f in s["findings"])
    tree = {"Text": "PC", "Children": [{"Text": "Intel CPU", "Children": [{"Text": "Core #1", "Type": "Temperature", "Value": "71.0 °C", "Children": []},
                                                                  {"Text": "Fan", "Type": "Fan", "Value": "2400 RPM", "Children": []}]}]}
    r = read_lhm(fetch=lambda u: json.dumps(tree))
    assert r["temps"][0]["c"] == 71.0 and r["fans"][0]["rpm"] == 2400
    assert read_lhm(fetch=lambda u: "not json") == {}


def test_net_and_security():
    def run(argv, timeout=6):
        if argv[0] == "netsh":
            return "Domain Profile Settings:\nState   ON\nPrivate Profile Settings:\nState   OFF\n"
        return json.dumps({"AntivirusEnabled": True, "RealTimeProtectionEnabled": True, "AntivirusSignatureAge": 9})
    sec = netinfo.security_checks(run, platform="win32")
    assert sec[0]["state"] == "off" and sec[1]["state"] == "on" and "9 days" in sec[1]["note"]
    lin = netinfo.security_checks(lambda argv, timeout=6: "active\n" if argv[-1] == "ufw" else "inactive\n", platform="linux")
    assert lin[0]["state"] == "on" and "ufw" in lin[0]["note"] and lin[1]["state"] == "unknown"
    assert netinfo.security_checks(run, platform="darwin")[0]["state"] == "unknown"
    n = {"security": sec, "listening": [{"port": 3389, "program": "svchost.exe", "scope": "everyone", "risk": "Remote Desktop"}], "connected": [{"program": "x.exe", "count": 30, "outside": 30}]}
    texts = " ".join(f["text"] for f in netinfo.net_findings(n))
    assert "Firewall is off" in texts and "anywhere on port 3389" in texts and "x.exe has 30" in texts


def test_programs_and_uninstall_guard(tmp_path):
    raw = [{"id": "HKLM\\A", "name": "Cool Editor", "uninstall": "msiexec.exe /I{12345678-1234-1234-1234-123456789012}", "size_kb": 2048},
           {"id": "HKLM\\B", "name": "Microsoft Visual C++ 2015 Redistributable", "uninstall": "x.exe"},
           {"id": "HKLM\\C", "name": "Hidden", "uninstall": "x.exe", "system": 1}, {"id": "HKLM\\D", "name": "Patch", "uninstall": "x", "parent": "A"}]
    lst = programs.installed(lambda: raw)
    assert [p["name"] for p in lst] == ["Cool Editor", "Microsoft Visual C++ 2015 Redistributable"]
    assert programs.uninstall_command(lst[0]) == "msiexec.exe /X{12345678-1234-1234-1234-123456789012}"
    assert "uninstall" not in programs.public(lst[0])
    launched = []
    g = Guardian(AuditLog(tmp_path / "a.log"), qdir=tmp_path / "q", programs=lambda: lst, launcher=launched.append)
    p = g.propose("uninstall", {"id": "HKLM\\A", "name": "Cool Editor"}, "asked")
    assert launched == []                                  # nothing runs before approval
    g.approve(p["id"])
    assert launched == ["msiexec.exe /X{12345678-1234-1234-1234-123456789012}"]
    for bad in ({"id": "HKLM\\B", "name": "x"}, {"id": "HKLM\\nope"}):
        try:
            g.propose("uninstall", bad, "x")
            assert False
        except Refused:
            pass
    assert programs.installed(platform="linux") == []


def test_parse_and_match():
    assert B.parse("close chrome") == ("end", "chrome")
    assert B.parse("Uninstall Cool Editor please"[:-7]) == ("uninstall", "Cool Editor")
    assert B.parse("how is my laptop doing")[0] == "status"
    assert B.parse("show my network") == ("focus", "network")
    assert B.parse("show me memory usage") == ("focus", "mem")
    assert B.parse("show me my network diagram for the office") is None
    assert B.parse("tell me a joke") is None
    groups = make().snapshot()["programs"]
    assert B.match_running(groups, "chrome")[0]["name"] == "chrome.exe"
    assert B.match_running(groups, "the build") == []


def test_board_streams_only_to_watchers():
    sent = []
    hw = make()
    net = NS(snapshot=lambda: {"interfaces": [], "listening": [], "connected": [], "security": [], "findings": []})
    b = B.Board(hw, net, lambda ev, d, sid: sent.append((ev, sid, d)), installed=lambda: [])
    b.tick()
    assert sent == []
    b.watch("s1", True)
    b.tick()
    assert sent and sent[0][1] == "s1" and "cpu" in sent[0][2] and sent[0][2]["can_uninstall"] is False
    b.watch("s1", False)
    sent.clear()
    b.tick()
    assert sent == []
