from guardian.actions import Guardian
from guardian.audit import AuditLog
from guardian.auto import Autopilot, Settings


class FakeTimer:
    made = []
    def __init__(self, secs, fn, args=()):
        self.secs, self.fn, self.args, self.daemon, self.cancelled = secs, fn, args, False, False
        FakeTimer.made.append(self)
    def start(self): pass
    def cancel(self): self.cancelled = True
    def fire(self):
        if not self.cancelled: self.fn(*self.args)


def setup(tmp, mode="auto"):
    FakeTimer.made = []
    g = Guardian(AuditLog(tmp / "a.db"), qdir=tmp / "q")
    s = Settings(tmp / "s.json"); s.set_mode(mode)
    events = []
    return g, s, Autopilot(g, s, lambda k, d: events.append((k, d)), timer=FakeTimer), events


def bad_file(tmp, name="x.exe"):
    f = tmp / name; f.write_bytes(b"x"); return f


def test_off_by_default_never_schedules(tmp_path):
    g, s, a, ev = setup(tmp_path, "ask")
    p = g.propose("quarantine", {"path": str(bad_file(tmp_path))}, "r")
    assert a.schedule([p]) == 0 and FakeTimer.made == []


def test_acts_after_veto_window_and_logs_as_auto(tmp_path):
    g, s, a, ev = setup(tmp_path)
    f = bad_file(tmp_path)
    p = g.propose("quarantine", {"path": str(f)}, "r")
    assert a.schedule([p]) == 30 and f.exists()          # waiting, nothing done yet
    FakeTimer.made[0].fire()
    assert not f.exists() and ev[0][0] == "done"
    assert any(e["detail"].get("by") == "VANTA (auto)" for e in g.audit.recent())


def test_stop_cancels(tmp_path):
    g, s, a, ev = setup(tmp_path)
    f = bad_file(tmp_path)
    p = g.propose("quarantine", {"path": str(f)}, "r"); a.schedule([p]); a.stop([p["id"]])
    FakeTimer.made[0].fire()
    assert f.exists() and ev == []


def test_rate_limit_holds_extra_actions(tmp_path):
    g, s, a, ev = setup(tmp_path)
    s.data["max_per_hour"] = 1
    ps = [g.propose("quarantine", {"path": str(bad_file(tmp_path, f"{i}.exe"))}, "r") for i in range(2)]
    a.schedule(ps)
    for t in FakeTimer.made: t.fire()
    assert [e[0] for e in ev] == ["done", "held"]
    assert (tmp_path / "1.exe").exists()


def test_switching_off_before_the_timer_holds(tmp_path):
    g, s, a, ev = setup(tmp_path)
    f = bad_file(tmp_path)
    p = g.propose("quarantine", {"path": str(f)}, "r"); a.schedule([p]); s.set_mode("ask")
    FakeTimer.made[0].fire()
    assert f.exists() and ev[0][0] == "held"


def test_trust_list_persists(tmp_path):
    s = Settings(tmp_path / "s.json"); s.trust("Setup.exe")
    assert Settings(tmp_path / "s.json").is_trusted("setup.exe")
