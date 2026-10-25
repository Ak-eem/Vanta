import os
import subprocess
import sys
import time
import pytest
from guardian.actions import Guardian, Refused
from guardian.audit import AuditLog


def mk(tmp, **kw):
    return Guardian(AuditLog(tmp / "a.db"), qdir=tmp / "q", **kw)


def test_quarantine_needs_approval_moves_file_and_can_be_restored(tmp_path):
    g = mk(tmp_path)
    f = tmp_path / "setup_update.exe"; f.write_bytes(b"MZ evil")
    p = g.propose("quarantine", {"path": str(f)}, "unsigned, look-alike site")
    assert f.exists()                                    # proposing changes nothing
    r = g.approve(p["id"])
    assert not f.exists() and len(r["sha256"]) == 64
    assert g.quarantined()[0]["original"] == str(f.resolve())
    p2 = g.propose("restore", {"id": r["quarantine_id"]}, "false alarm")
    g.approve(p2["id"])
    assert f.read_bytes() == b"MZ evil"


def test_denied_changes_nothing_and_cannot_be_approved_later(tmp_path):
    g = mk(tmp_path)
    f = tmp_path / "x.exe"; f.write_bytes(b"x")
    p = g.propose("quarantine", {"path": str(f)}, "r")
    assert g.deny(p["id"]) and f.exists()
    with pytest.raises(Refused):
        g.approve(p["id"])


def test_refuses_system_files_and_symlinks(tmp_path):
    g = mk(tmp_path)
    with pytest.raises(Refused):
        g.propose("quarantine", {"path": "/etc/hostname"}, "r")
    f = tmp_path / "real"; f.write_text("x"); l = tmp_path / "link"; l.symlink_to(f)
    with pytest.raises(Refused):
        g.propose("quarantine", {"path": str(l)}, "r")


def test_stale_proposal_expires(tmp_path):
    t = [1000.0]
    g = mk(tmp_path, clock=lambda: t[0], ttl=60)
    f = tmp_path / "x.exe"; f.write_bytes(b"x")
    p = g.propose("quarantine", {"path": str(f)}, "r")
    t[0] += 61
    with pytest.raises(Refused):
        g.approve(p["id"])
    assert f.exists()


def test_end_process_checks_identity_and_protects_core_programs(tmp_path):
    procs = {5000: {"pid": 5000, "name": "miner.exe", "created": 100.0}, 4: {"pid": 4, "name": "System", "created": 1.0}}
    killed = []
    g = mk(tmp_path, pid_info=procs.get, terminate=killed.append)
    with pytest.raises(Refused):
        g.propose("end_process", {"pid": 4, "name": "System"}, "r")
    with pytest.raises(Refused):
        g.propose("end_process", {"pid": 5000, "name": "chrome.exe"}, "r")        # id now belongs to something else
    with pytest.raises(Refused):
        g.propose("end_process", {"pid": 5000, "name": "miner.exe", "created": 999.0}, "r")  # id reused
    with pytest.raises(Refused):
        g.propose("end_process", {"pid": os.getpid(), "name": "python"}, "r")     # never VANTA itself
    p = g.propose("end_process", {"pid": 5000, "name": "miner.exe", "created": 100.0}, "pinning CPU")
    assert killed == []
    g.approve(p["id"]); assert killed == [5000]


def test_really_ends_a_child_process(tmp_path):
    child = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(60)"])
    time.sleep(0.3)
    g = mk(tmp_path)
    import psutil
    p = g.propose("end_process", {"pid": child.pid, "name": psutil.Process(child.pid).name(), "created": psutil.Process(child.pid).create_time()}, "test")
    g.approve(p["id"]); child.wait(10)
    assert child.poll() is not None


def test_audit_chain_detects_tampering(tmp_path):
    g = mk(tmp_path)
    f = tmp_path / "x.exe"; f.write_bytes(b"x")
    g.approve(g.propose("quarantine", {"path": str(f)}, "r")["id"])
    assert g.audit.verify() is None
    assert [e["event"] for e in reversed(g.audit.recent())] == ["proposed", "approved", "done"]
    import sqlite3
    with sqlite3.connect(g.audit.path) as c:
        c.execute("UPDATE audit SET detail='{}' WHERE n=2")
    assert g.audit.verify() == 2
