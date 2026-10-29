import json
import subprocess
import sys
import time
from datetime import datetime

import pytest

from agent import skills as skillmod
from agent.loop import Agent
from agent.permissions import Denied, decide
from agent.schedules import Schedules, parse_when


def mk(tmp_path, mode="auto", approve=lambda a, d: True, **kw):
    (tmp_path / "proj").mkdir(exist_ok=True)
    return Agent(lambda m: '{"final":"ok"}', tmp_path / "proj", mode, approve=approve, home=tmp_path / "home", checkpoint_base=tmp_path / "cp", **kw)


def t(ag, _n, **a):
    return ag._tool(_n, a)


def test_tasks_and_plan_mode(tmp_path):
    ag = mk(tmp_path, "accept_edits")
    assert "added" in t(ag, "task_create", subject="write tests")
    assert "doing" in t(ag, "task_update", id=1, status="doing")
    assert "[doing] write tests" in t(ag, "task_list")
    t(ag, "enter_plan_mode")
    with pytest.raises(Denied):
        t(ag, "write_file", path="a.txt", content="x")     # plan mode blocks edits
    assert "approved" in t(ag, "exit_plan_mode", plan="1. do it")
    assert ag.mode == "accept_edits"
    t(ag, "write_file", path="a.txt", content="x")
    ag2 = mk(tmp_path, "ask", approve=lambda a, d: False)
    t(ag2, "enter_plan_mode")
    with pytest.raises(Denied):
        t(ag2, "exit_plan_mode", plan="p")
    assert ag2.mode == "plan"                               # not approved: still read-only


def test_notebook_edit_and_undo(tmp_path):
    ag = mk(tmp_path)
    nb = {"cells": [{"cell_type": "code", "metadata": {}, "source": ["print(1)"], "outputs": [{"x": 1}], "execution_count": 3}], "metadata": {}, "nbformat": 4, "nbformat_minor": 5}
    p = tmp_path / "proj" / "a.ipynb"
    p.write_text(json.dumps(nb))
    t(ag, "notebook_edit", path="a.ipynb", cell=0, mode="replace", source="print(2)")
    t(ag, "notebook_edit", path="a.ipynb", cell=1, mode="insert", source="# hi", type="markdown")
    d = json.loads(p.read_text())
    assert d["cells"][0]["source"] == ["print(2)"] and d["cells"][0]["outputs"] == [] and d["cells"][1]["cell_type"] == "markdown"
    assert "must be" in t(ag, "notebook_edit", path="a.ipynb", cell=9, mode="delete")
    ag.rewind()
    assert json.loads(p.read_text())["cells"][0]["source"] == ["print(1)"]
    with pytest.raises(Denied):
        t(mk(tmp_path, "plan"), "notebook_edit", path="a.ipynb", cell=0, source="x")


def test_code_intel(tmp_path):
    ag = mk(tmp_path)
    (tmp_path / "proj" / "m.py").write_text("class A:\n    def go(self):\n        pass\n\ndef main():\n    A().go()\n")
    (tmp_path / "proj" / "x.ts").write_text("export function hello() {}\nconst v = hello()\n")
    assert "class A" in t(ag, "code_intel", action="outline", path="m.py") and "def go" in t(ag, "code_intel", action="outline", path="m.py")
    assert t(ag, "code_intel", action="definition", symbol="hello").startswith("x.ts:1")
    assert "m.py:6" in t(ag, "code_intel", action="references", symbol="go")
    (tmp_path / "proj" / "bad.py").write_text("def x(:\n")
    assert "Syntax error line 1" in t(ag, "code_intel", action="diagnostics", path="bad.py")
    assert "No syntax problems" in t(ag, "code_intel", action="diagnostics", path="m.py")
    assert "plain symbol" in t(ag, "code_intel", action="definition", symbol="a b")


def test_background_command(tmp_path):
    ag = mk(tmp_path, approve=lambda a, d: True)
    out = t(ag, "bg_start", command="python3 -c print(123)")
    bid = out.split()[1]
    for _ in range(40):
        if "finished" in t(ag, "bg_output", id=bid):
            break
        time.sleep(0.1)
    assert "123" in t(ag, "bg_output", id=bid) and "exit code 0" in t(ag, "bg_output", id=bid)
    with pytest.raises(Denied):
        t(mk(tmp_path, approve=lambda a, d: False), "bg_start", command="python3 -c print(1)")
    with pytest.raises(Denied):
        t(mk(tmp_path), "bg_start", command="rm -rf x")        # same blocklist as run_command
    ag3 = mk(tmp_path)
    (tmp_path / "proj" / "slow.py").write_text("import time\ntime.sleep(30)\n")
    b = t(ag3, "bg_start", command="python3 slow.py").split()[1]
    ag3.extra.cleanup()
    assert ag3.extra.bg[b]["proc"].poll() is not None           # nothing left running


def test_worktree(tmp_path):
    ag = mk(tmp_path)
    proj = tmp_path / "proj"
    assert "isn't a git project" in t(ag, "enter_worktree", name="x")
    run = lambda *a: subprocess.run(["git", *a], cwd=proj, check=True, capture_output=True)
    run("init", "-q"); run("config", "user.email", "a@b.c"); run("config", "user.name", "t")
    (proj / "f.txt").write_text("orig"); run("add", "."); run("commit", "-qm", "i")
    assert "separate copy" in t(ag, "enter_worktree", name="try")
    t(ag, "write_file", path="f.txt", content="changed")
    assert (proj / "f.txt").read_text() == "orig"                  # original untouched
    assert "Back in the original" in t(ag, "exit_worktree", keep=False)
    assert ag.root == proj.resolve() and (proj / "f.txt").read_text() == "orig"


def test_schedules(tmp_path):
    now = datetime(2026, 10, 29, 10, 0).timestamp()
    clock = [now]
    s = Schedules(tmp_path / "s.json", clock=lambda: clock[0])
    j = s.add("daily 08:00", "check disk space")
    assert datetime.fromtimestamp(j["next"]).day == 30 and datetime.fromtimestamp(j["next"]).hour == 8
    s.add("in 2h", "one off")
    assert s.due() == []
    clock[0] = now + 7300
    d = s.due()
    assert [x["goal"] for x in d] == ["one off"] and len(s.list()) == 1       # one-off removed, daily stays
    for bad in ("every 1m", "whenever", "daily 25:00"):
        with pytest.raises(ValueError):
            parse_when(bad)
    ag = mk(tmp_path, schedules=Schedules(tmp_path / "s2.json"))
    assert "Scheduled" in t(ag, "schedule_create", when="every 30m", goal="look at logs")
    assert "look at logs" in t(ag, "schedule_list")
    with pytest.raises(Denied):
        t(mk(tmp_path, "plan", schedules=Schedules(tmp_path / "s3.json")), "schedule_create", when="in 1h", goal="x")   # plan mode can't schedule


def test_skills_and_notify(tmp_path):
    home = tmp_path / "home"
    (home / "skills").mkdir(parents=True)
    (home / "skills" / "mine.md").write_text("---\nname: mine\ndescription: my skill\n---\nDo it well.")
    got = []
    ag = mk(tmp_path, notify=lambda a, b: got.append((a, b)))
    assert "Do it well." == t(ag, "skill", name="mine")
    assert "website-build" in t(ag, "skill", name="nope")
    assert "website-build" in skillmod.index(ag.extra.skills)
    t(ag, "notify", title="Hi", message="done")
    assert got == [("Hi", "done")]
    assert decide("plan", "skill", {}) == "allow" and decide("auto", "bg_start", {"command": "x"}) == "ask"
