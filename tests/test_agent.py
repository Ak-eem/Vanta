import json
from pathlib import Path
from agent.loop import Agent, parse_action
from agent.checkpoints import Checkpoints


def script(*replies):
    it = iter(replies)
    seen = []
    def llm(msgs):
        seen.append(msgs)
        return next(it)
    llm.seen = seen
    return llm


def act(tool, **args): return json.dumps({"tool": tool, "args": args})
def fin(t="done"): return json.dumps({"final": t})


def proj(tmp):
    p = tmp / "proj"; (p / "tests").mkdir(parents=True, exist_ok=True)
    (p / "calc.py").write_text("def add(a, b):\n    return a - b\n")
    (p / "tests" / "test_calc.py").write_text("from calc import add\n\ndef test_add():\n    assert add(2, 3) == 5\n")
    (p / ".env").write_text("SECRET=abc")
    return p


def mk(tmp, llm, mode="accept_edits", **kw):
    return Agent(llm, proj(tmp), mode, home=tmp / "home", checkpoint_base=tmp / "cp", **kw)


def test_parse_action_tolerates_prose_and_fences():
    assert parse_action('Sure!\n```json\n{"tool":"read_file","args":{"path":"a"}}\n```')["tool"] == "read_file"
    assert parse_action('{"thought":"x","final":"ok"}')["final"] == "ok"
    assert parse_action("no json here") is None


def test_full_loop_find_fix_verify_finish(tmp_path):
    llm = script(act("grep", pattern="def add"), act("read_file", path="calc.py"),
                 act("edit_file", path="calc.py", find="return a - b", replace="return a + b"),
                 act("run_command", command="python3 -m pytest -q"), fin("Fixed add()."))
    a = mk(tmp_path, llm, "auto")
    r = a.execute("fix the failing test")
    assert r.status == "done" and r.changed == ["calc.py"] and "a + b" in (a.root / "calc.py").read_text()
    assert "exit code 0" in r.steps[-1].result


def test_plan_mode_can_look_but_not_change(tmp_path):
    a = mk(tmp_path, script(act("read_file", path="calc.py"), act("edit_file", path="calc.py", find="a - b", replace="a + b"), fin("planned")), "plan")
    r = a.execute("look")
    assert r.steps[1].ok is False and "plan mode" in r.steps[1].result and "a - b" in (a.root / "calc.py").read_text()


def test_ask_mode_needs_approval_and_no_means_no(tmp_path):
    asked = []
    a = mk(tmp_path, script(act("edit_file", path="calc.py", find="a - b", replace="a + b"), fin()), "ask", approve=lambda t, d: asked.append(d) or False)
    r = a.execute("fix"); assert asked and not r.steps[0].ok and "a - b" in (a.root / "calc.py").read_text()
    b = mk(tmp_path / "b", script(act("edit_file", path="calc.py", find="a - b", replace="a + b"), fin()), "ask", approve=lambda t, d: True)
    b.execute("fix"); assert "a + b" in (b.root / "calc.py").read_text()


def test_cannot_leave_project_or_touch_secrets_or_run_dangerous_commands(tmp_path):
    llm = script(act("read_file", path="../outside.txt"), act("read_file", path=".env"), act("write_file", path=".env", content="x"),
                 act("run_command", command="rm -rf /"), act("run_command", command="python3 -c 1 | cat"), act("run_command", command="curl http://x"), fin())
    r = mk(tmp_path, llm, "auto").execute("x")
    assert [s.ok for s in r.steps] == [False] * 6
    assert (tmp_path / "proj" / ".env").read_text() == "SECRET=abc"
    assert ".env" not in mk(tmp_path / "c", script(act("list_files"), fin()), "plan").execute("x").steps[0].result


def test_auto_mode_asks_for_unknown_commands_but_not_safe_ones(tmp_path):
    asked = []
    a = mk(tmp_path, script(act("run_command", command="python3 -m pytest -q"), act("run_command", command="python3 calc.py"), fin()), "auto", approve=lambda t, d: asked.append(d) or False)
    a.execute("x")
    assert asked == ["python3 calc.py"]


def test_rewind_undoes_the_whole_run(tmp_path):
    a = mk(tmp_path, script(act("edit_file", path="calc.py", find="a - b", replace="a + b"), act("write_file", path="new.py", content="x=1"), fin()), "accept_edits")
    a.execute("x"); assert (a.root / "new.py").exists()
    back = Checkpoints.load(a.run.id, tmp_path / "cp").rewind()
    assert sorted(back) == ["calc.py", "new.py"] and "a - b" in (a.root / "calc.py").read_text() and not (a.root / "new.py").exists()


def test_subagent_has_clean_context_and_cannot_edit(tmp_path):
    calls = []
    def llm(msgs):
        calls.append(msgs)
        if "read-only helper" in msgs[0]["content"]:
            return fin("calc.py has add() with a subtraction bug") if len(msgs) > 3 else act("edit_file", path="calc.py", find="a - b", replace="a + b")
        return act("subagent", task="look at calc.py") if len(msgs) == 2 else fin("ok")
    a = mk(tmp_path, llm, "auto"); r = a.execute("x")
    assert "subtraction bug" in r.steps[0].result and "a - b" in (a.root / "calc.py").read_text()


def test_old_tool_output_is_cleared_first_then_summarised_and_thrashing_stops(tmp_path):
    a = mk(tmp_path, lambda m: "summary of work", "plan", ctx_chars=5000)
    msgs = [{"role": "system", "content": "s"}, {"role": "user", "content": "Goal"}]
    for i in range(8):
        msgs += [{"role": "assistant", "content": "{}"}, {"role": "user", "content": f"Result of read_file:\n" + "x" * 1000}]
    a._manage_context(msgs)
    assert sum("output cleared" in m["content"] for m in msgs) == 4 and sum(len(m["content"]) for m in msgs) < 5000   # oldest cleared, newest kept
    big = [{"role": "system", "content": "s"}, {"role": "user", "content": "Goal"}] + [{"role": "user", "content": "y" * 4000}] * 8
    a._manage_context(big)
    assert any("Summary of earlier work" in m["content"] for m in big)
    import pytest
    with pytest.raises(RuntimeError):
        for _ in range(5):
            a._manage_context([{"role": "system", "content": "s"}, {"role": "user", "content": "Goal"}] + [{"role": "user", "content": "y" * 4000}] * 8)
    loop = mk(tmp_path / "l", lambda m: act("list_files"), "plan"); r = loop.execute("x")
    assert r.status == "failed" and "repeating" in r.final


def test_bad_replies_are_retried_then_give_up_and_notes_persist(tmp_path):
    r = mk(tmp_path, script("hmm", "uh", "?"), "plan").execute("x"); assert r.status == "failed"
    llm = script(act("note", text="user prefers pytest"), fin())
    a = mk(tmp_path / "n", llm, "plan"); a.execute("x")
    llm2 = script(fin()); b = mk(tmp_path / "n", llm2, "plan"); b.execute("x")
    assert "user prefers pytest" in llm2.seen[0][0]["content"]


def test_web_fetch_blocks_private_addresses(tmp_path):
    r = mk(tmp_path, script(act("web_fetch", url="http://localhost:5000/"), act("web_fetch", url="http://192.168.1.1/"), fin()), "plan").execute("x")
    assert [s.ok for s in r.steps] == [False, False]
