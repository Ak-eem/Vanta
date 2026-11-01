import json

from agent.loop import Agent
from utils import sandbox


def action(tool, **args):
    return json.dumps({"tool": tool, "args": args})


def make_agent(tmp_path, mode, approve=lambda *_: False, llm=lambda _messages: ""):
    root = tmp_path / "project"
    root.mkdir()
    (root / "sample.txt").write_text("before")
    (root / "sample.ipynb").write_text(json.dumps({
        "cells": [{"cell_type": "markdown", "metadata": {}, "source": ["before"]}],
        "metadata": {},
        "nbformat": 4,
        "nbformat_minor": 5,
    }))
    return Agent(llm, root, mode, approve=approve,
                 home=tmp_path / "home", checkpoint_base=tmp_path / "checkpoints")


def test_alias_edit_obeys_accept_edits_without_extra_approval(tmp_path):
    approvals = []
    agent = make_agent(tmp_path, "accept_edits", lambda *args: approvals.append(args) or False)

    result = agent._tool("Edit", {"path": "sample.txt", "old_string": "before", "new_string": "after"})

    assert result == "Saved sample.txt."
    assert (agent.root / "sample.txt").read_text() == "after"
    assert approvals == []


def test_plan_mode_alias_edit_is_recorded_as_denied(tmp_path):
    replies = iter([
        action("Edit", path="sample.txt", old_string="before", new_string="after"),
        json.dumps({"final": "Stopped safely."}),
    ])
    agent = make_agent(tmp_path, "plan", llm=lambda _messages: next(replies))

    result = agent.execute("change the sample")

    assert result.status == "done"
    assert result.steps[0].ok is False
    assert "plan mode" in result.steps[0].result
    assert (agent.root / "sample.txt").read_text() == "before"


def test_denied_alias_edit_is_not_reported_as_success(tmp_path):
    replies = iter([
        action("Edit", path="sample.txt", old_string="before", new_string="after"),
        json.dumps({"final": "Stopped safely."}),
    ])
    agent = make_agent(tmp_path, "ask", llm=lambda _messages: next(replies))

    result = agent.execute("change the sample")

    assert result.steps[0].ok is False
    assert "said no" in result.steps[0].result
    assert (agent.root / "sample.txt").read_text() == "before"


def test_notebook_edit_obeys_accept_edits_without_extra_approval(tmp_path):
    approvals = []
    agent = make_agent(tmp_path, "accept_edits", lambda *args: approvals.append(args) or False)

    result = agent._tool("NotebookEdit", {
        "path": "sample.ipynb", "action": "update", "cell_index": 0, "source": "after",
    })

    assert "Updated notebook" in result
    notebook = json.loads((agent.root / "sample.ipynb").read_text())
    assert notebook["cells"][0]["source"] == ["after"]
    assert approvals == []


def test_notebook_edit_in_ask_mode_prompts_once(tmp_path):
    approvals = []
    agent = make_agent(tmp_path, "ask", lambda *args: approvals.append(args) or True)

    agent._tool("NotebookEdit", {
        "path": "sample.ipynb", "action": "update", "cell_index": 0, "source": "approved",
    })

    assert len(approvals) == 1
    notebook = json.loads((agent.root / "sample.ipynb").read_text())
    assert notebook["cells"][0]["source"] == ["approved"]


def test_auto_mode_runs_safe_test_without_approval(tmp_path, monkeypatch):
    approvals = []
    calls = []

    def fake_run(argv, cwd, timeout, allow_network):
        calls.append((argv, cwd, timeout, allow_network))
        return sandbox.SandboxResult(0, stdout="tests passed")

    monkeypatch.setattr(sandbox, "run", fake_run)
    agent = make_agent(tmp_path, "auto", lambda *args: approvals.append(args) or False)

    result = agent._tool("Bash", {"command": "python -m pytest -q"})

    assert result == "exit code 0\ntests passed"
    assert calls and calls[0][0] == ["python", "-m", "pytest", "-q"]
    assert approvals == []


def test_artifact_in_ask_mode_uses_existing_approval_once(tmp_path):
    approvals = []
    agent = make_agent(tmp_path, "ask", lambda *args: approvals.append(args) or True)

    result = agent._tool("Artifact", {"name": "report.txt", "content": "findings"})

    assert result == "Saved .vanta/artifacts/report.txt."
    assert (agent.root / ".vanta" / "artifacts" / "report.txt").read_text() == "findings"
    assert len(approvals) == 1


def test_web_fetch_denial_happens_before_dns_or_network(monkeypatch, tmp_path):
    import agent.tool_suite as tool_suite

    approvals = []
    agent = make_agent(tmp_path, "plan", lambda *args: approvals.append(args) or False)
    monkeypatch.setattr(tool_suite, "_secure_fetch",
                        lambda *_args: (_ for _ in ()).throw(AssertionError("Fetch must not run before approval")))

    try:
        agent._tool("WebFetch", {"url": "https://example.com/"})
    except Exception as exc:
        assert "said no" in str(exc)
    else:
        raise AssertionError("Denied web fetch should fail the tool step.")

    assert approvals == [("Fetch a web page", "https://example.com/")]


def test_plan_mode_task_change_is_a_denied_step(tmp_path):
    replies = iter([
        action("TaskCreate", subject="temporary"),
        json.dumps({"final": "Stopped safely."}),
    ])
    agent = make_agent(tmp_path, "plan", llm=lambda _messages: next(replies))

    result = agent.execute("create a task")

    assert result.steps[0].ok is False
    assert "plan mode" in result.steps[0].result
    assert agent._suite_tasks == {}
