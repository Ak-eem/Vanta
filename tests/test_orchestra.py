import json

import pytest

from setups.orchestra import Orchestra, Task, order
from setups.guards import GuardError


def fake(plan, reviews=None, worker=None):
    reviews = list(reviews or [])
    calls = {"strong": [], "fast": []}

    def strong(msgs):
        calls["strong"].append(msgs[0]["content"][:20])
        sysm = msgs[0]["content"]
        if "manager of a small team" in sysm:
            return json.dumps(plan)
        if "checking a worker" in sysm:
            return json.dumps(reviews.pop(0) if reviews else {"verdict": "ok"})
        return "All done."

    def fast(msgs):
        calls["fast"].append(msgs[1]["content"])
        if worker:
            return worker(msgs)
        return '{"final":"worker finished"}'
    return strong, fast, calls


def run(tmp_path, plan, **kw):
    strong, fast, calls = fake(plan, kw.pop("reviews", None), kw.pop("worker", None))
    o = Orchestra(strong, fast, tmp_path, mode="auto", approve=lambda a, d: True, home=tmp_path / "h", checkpoint_base=tmp_path / "cp", **kw)
    return o, o.run("goal"), calls


def test_plan_runs_in_order_with_context(tmp_path):
    plan = {"tasks": [{"id": "t1", "goal": "find the bug"}, {"id": "t2", "goal": "fix it", "write": True, "needs": ["t1"]}]}
    o, r, calls = run(tmp_path, plan)
    assert r.status == "done" and [t.status for t in r.tasks] == ["done", "done"]
    assert "Result of t1: worker finished" in calls["fast"][1]       # second worker saw the first result
    assert "Goal" in calls["fast"][0] and "Result of" not in calls["fast"][0]
    assert r.final == "All done."


def test_bad_plan_and_cycle(tmp_path):
    _, r, _ = run(tmp_path, {"tasks": []})
    assert r.status == "failed" and "plan" in r.final
    _, r, _ = run(tmp_path, {"tasks": [{"id": "a", "goal": "x", "needs": ["b"]}, {"id": "b", "goal": "y", "needs": ["a"]}]})
    assert r.status == "failed" and "circle" in r.final
    with pytest.raises(GuardError):
        order([Task("a", "x", needs=["b"]), Task("b", "y", needs=["a"])])
    _, r, _ = run(tmp_path, {"tasks": [{"id": str(i), "goal": "x"} for i in range(9)]}, max_tasks=3)
    assert r.status == "failed"


def test_review_retry_once_with_feedback(tmp_path):
    plan = {"tasks": [{"id": "t1", "goal": "summarise"}]}
    o, r, calls = run(tmp_path, plan, reviews=[{"verdict": "retry", "feedback": "too vague"}, {"verdict": "retry", "feedback": "still vague"}])
    assert len(calls["fast"]) == 2 and "too vague" in calls["fast"][1]
    assert r.tasks[0].status == "done" and "doubts" in r.tasks[0].result      # one retry only, then honest


def test_failed_dependency_skips_and_writes_confined(tmp_path):
    plan = {"tasks": [{"id": "t1", "goal": "a"}, {"id": "t2", "goal": "b", "needs": ["t1"]}]}
    o, r, _ = run(tmp_path, plan, worker=lambda m: "not json at all")
    assert r.tasks[0].status == "failed" and r.tasks[1].status == "skipped" and r.status == "done"
    # read-only jobs run in plan mode: a write attempt is refused, so nothing changes
    w = lambda m: '{"tool":"write_file","args":{"path":"x.txt","content":"hi"}}' if len(m) < 4 else '{"final":"done"}'
    o, r, _ = run(tmp_path, {"tasks": [{"id": "t1", "goal": "look", "write": False}]}, worker=w)
    assert not (tmp_path / "x.txt").exists()


def test_write_job_changes_files_and_rewinds(tmp_path):
    steps = iter(['{"tool":"write_file","args":{"path":"out.txt","content":"hi"}}', '{"final":"wrote it"}'])
    o, r, _ = run(tmp_path, {"tasks": [{"id": "t1", "goal": "make file", "write": True}]}, worker=lambda m: next(steps))
    assert (tmp_path / "out.txt").read_text() == "hi" and r.changed == ["out.txt"]
    assert o.rewind() == ["out.txt"] and not (tmp_path / "out.txt").exists()


def test_stop(tmp_path):
    strong, fast, _ = fake({"tasks": [{"id": "t1", "goal": "a"}, {"id": "t2", "goal": "b"}]})
    o = Orchestra(strong, fast, tmp_path, home=tmp_path / "h", checkpoint_base=tmp_path / "cp")
    o.on_update = lambda r: o.stop() if r.tasks and r.tasks[0].status == "done" else None
    r = o.run("g")
    assert r.status == "stopped" and r.tasks[1].status == "todo"
