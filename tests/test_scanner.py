import base64
import zipfile
from pathlib import Path
from scanner import static
from scanner.engine import DownloadWatcher, Scanner
from scanner.reputation import VirusTotal
from scanner.verdict import decide

NOSIG = lambda p: None
VALID = lambda p: {"status": "Valid", "publisher": "Contoso Ltd"}


def mk(tmp, **kw):
    return Scanner(tmp / "s.db", vt=VirusTotal(key=""), signature=kw.pop("signature", NOSIG), **kw)


def test_eicar_is_dangerous(tmp_path):
    f = tmp_path / "test.txt"; f.write_bytes(static.EICAR)
    r = mk(tmp_path).scan(f)
    assert r["label"] == "dangerous" and r["act"] and r["score"] == 100


def test_double_extension_and_disguised_program(tmp_path):
    f = tmp_path / "invoice.pdf.exe"; f.write_bytes(b"MZ" + b"\x90" * 300)
    r = mk(tmp_path).scan(f)
    assert any("pretends" in x.lower() for x in r["reasons"]) and r["label"] in ("suspicious", "unknown")
    g = tmp_path / "photo.jpg"; g.write_bytes(b"MZ" + b"\x00" * 100)
    assert any("actually a program" in x for x in mk(tmp_path).scan(g)["reasons"])


def test_malicious_script_patterns(tmp_path):
    f = tmp_path / "update.ps1"
    f.write_text("powershell -nop -w hidden -enc AAAA\nSet-MpPreference -DisableRealtimeMonitoring $true\nschtasks /create /tn x\nvssadmin delete shadows /all")
    r = mk(tmp_path).scan(f)
    assert r["label"] == "dangerous" and len(r["reasons"]) >= 4


def test_harmless_text_is_safe_and_signed_program_is_safe(tmp_path):
    t = tmp_path / "notes.txt"; t.write_text("shopping list: rice, beans")
    assert mk(tmp_path).scan(t)["label"] == "safe"
    e = tmp_path / "setup.exe"; e.write_bytes(b"MZ" + b"\x00" * 500)
    r = mk(tmp_path, signature=VALID).scan(e)
    assert r["label"] == "safe" and r["publisher"] == "Contoso Ltd"
    assert mk(tmp_path).scan(e, force=True)["label"] == "unknown"        # unsigned, nothing known: not 'safe'


def test_signature_that_fails_is_bad(tmp_path):
    e = tmp_path / "setup.exe"; e.write_bytes(b"MZ" + b"\x00" * 500)
    r = mk(tmp_path, signature=lambda p: {"status": "HashMismatch", "publisher": ""}).scan(e)
    assert any("does NOT check out" in x for x in r["reasons"])


def test_reputation_matters_and_low_counts_are_not_panic(tmp_path):
    rep = lambda m, t: {"malicious": m, "total": t}
    rpt = {"findings": [], "kind": "windows program"}
    assert decide(rpt, rep(40, 70))["label"] == "dangerous"
    assert decide(rpt, rep(2, 70))["label"] == "unknown"
    assert decide(rpt, rep(0, 70))["label"] == "safe"
    assert decide({"findings": [{"id": "x", "points": 60, "text": "t"}], "kind": "windows program"}, None, trusted=True)["label"] == "safe"


def test_virustotal_only_sends_hash_and_rate_limits():
    calls = []
    class R:
        status_code = 200
        def raise_for_status(self): pass
        def json(self): return {"data": {"attributes": {"last_analysis_stats": {"malicious": 3, "harmless": 60, "type-unsupported": 9}}}}
    def get(url, **kw): calls.append((url, kw)); return R()
    vt = VirusTotal("k", get=get, clock=lambda: 0.0)
    assert vt.lookup("ab" * 32) == {"malicious": 3, "total": 63}
    assert calls[0][0].endswith("ab" * 32) and "files" in calls[0][0]
    for _ in range(5): vt.lookup("cd" * 32)
    assert len(calls) == 4


def test_zip_with_exe_and_cache(tmp_path):
    z = tmp_path / "crack.zip"
    with zipfile.ZipFile(z, "w") as zf: zf.writestr("setup.exe", b"MZ")
    s = mk(tmp_path)
    r = s.scan(z); assert any("program/script" in x for x in r["reasons"])
    assert s.cached(r["sha256"]) and s.recent()[0]["name"] == "crack.zip"


def test_watcher_waits_for_finished_downloads(tmp_path):
    d = tmp_path / "Downloads"; d.mkdir()
    got = []
    w = DownloadWatcher(mk(tmp_path), [d], got.append, settle=0, sleep=lambda s: None)
    (d / "x.crdownload").write_text("partial"); w.submit(d / "x.crdownload")
    f = d / "ok.txt"; f.write_text("hello"); w.submit(f); w.submit(f)
    while w.work_once(0.01): pass
    assert [g["name"] for g in got] == ["ok.txt"]


def test_sweeper_scans_each_running_program_once_and_skips_system(tmp_path):
    from scanner.engine import Sweeper
    a = tmp_path / "app.exe"; a.write_bytes(b"MZ" + b"\x00" * 400)
    got = []
    sw = Sweeper(mk(tmp_path), got.append, lister=lambda: [str(a), str(a), "/usr/bin/ls", None], pause=0)
    assert sw.sweep_once(sleep=lambda s: None) == 1 and sw.sweep_once(sleep=lambda s: None) == 0
    assert got[0]["name"] == "app.exe"


def test_names_the_malware_family(tmp_path):
    cases = {
        "r.ps1": ("vssadmin delete shadows /all\nyour files are encrypted, bitcoin address bc1q", "ransomware"),
        "m.ps1": ("stratum+tcp://pool xmrig --donate\nschtasks /create /tn m\npowershell -enc AAAA\nSet-MpPreference -DisableRealtimeMonitoring 1", "cryptominer"),
        "k.ps1": ("GetAsyncKeyState SetWindowsHookEx\nSet-MpPreference -DisableRealtimeMonitoring 1\npowershell -enc AAAA", "keylogger"),
        "s.ps1": ("Login Data cookies.sqlite wallet.dat\npowershell -enc AAAA\nschtasks /create /tn x\nInvoke-WebRequest", "infostealer"),
    }
    s = mk(tmp_path)
    for name, (txt, fam) in cases.items():
        f = tmp_path / name; f.write_text(txt)
        r = s.scan(f)
        assert r["family"]["family"] == fam, (name, r["family"])
    t = tmp_path / "t.txt"; t.write_bytes(static.EICAR)
    assert s.scan(t)["family"]["family"] == "test-file"
    ok = tmp_path / "ok.txt"; ok.write_text("hello")
    assert s.scan(ok)["family"] is None
