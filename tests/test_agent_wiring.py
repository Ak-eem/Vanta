from agent.loop import Run, Step
from vanta_ui.stage import agent_stage
from guardian.auto import Settings


def test_stage_shows_steps_and_undo():
    r = Run(id="r1", goal="fix the bug")
    r.steps.append(Step(1, "read_file", {"path": "a.py"}, "ok"))
    r.status, r.final, r.changed = "done", "Fixed.", ["a.py"]
    s = agent_stage(r, False)
    assert s["id"] == "agent-r1"
    assert any(a["id"] == "agent:undo:r1" for a in s["actions"])
    w = agent_stage(Run(id="r2", goal="x"), True)
    assert any(a["id"] == "agent:stop:r2" for a in w["actions"])


def test_agent_mode_setting(tmp_path):
    s = Settings(tmp_path / "s.json")
    s.set_agent_mode("auto"); assert s.data["agent_mode"] == "auto"
    s.set_agent_mode("bogus"); assert s.data["agent_mode"] == "ask"
