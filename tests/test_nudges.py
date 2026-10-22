import sys, pathlib, tempfile
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from awareness.nudges import NudgeEngine

def mk(hour=14):
    ev, desk, voice = [], [], []
    t = [1000.0]
    n = NudgeEngine(lambda e, d: ev.append((e, d)), lambda a, b: desk.append(a), lambda s: voice.append(s),
                    clock=lambda: t[0], hour=lambda: hour, path=pathlib.Path(tempfile.mkdtemp()) / "n.json", async_delivery=False)
    return n, ev, desk, voice, t

def test_ladder():
    n, ev, desk, voice, t = mk()
    n.nudge("a", "low", "Hi", "m");           assert ev and not desk and not voice
    n.nudge("b", "medium", "Hm", "m");        assert desk == ["Hm"] and not voice
    n.nudge("c", "high", "Uh", "m");          assert desk == ["Hm", "Uh"] and len(voice) == 1

def test_cooldown_and_ack_escalation():
    n, ev, desk, voice, t = mk()
    nid = n.nudge("x", "medium", "T", "m")
    assert n.nudge("x", "medium", "T", "m") is None            # cooldown
    t[0] += 130; assert n.escalate_due() == [nid] and len(voice) == 1
    nid2 = n.nudge("y", "medium", "T2", "m"); n.ack(nid2)
    t[0] += 500; assert n.escalate_due() == []                  # acked -> no escalation

def test_quiet_hours():
    n, ev, desk, voice, t = mk(hour=2)
    assert n.nudge("a", "low", "q", "m") is None
    assert n.nudge("b", "medium", "q", "m") is None
    assert n.nudge("c", "high", "q", "m") and not voice          # shows, but silent
