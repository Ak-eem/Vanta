"""Stage payloads: what VANTA puts on the visual stage next to the chat.

The browser re-validates everything (ui/src/stage/sanitize.ts); this side keeps payloads
small and well-formed. Simple things stay simple: one fact is one block, and a
connected investigation only appears when there is something to connect.
"""
from __future__ import annotations

from pathlib import Path

import json
import re
import time
import uuid
from typing import Optional

from thinking.loop import extract_files

MAX_STAGE_BYTES = 60_000
_STAGE_FENCE = re.compile(r"```stage\s*\n([\s\S]*?)```", re.I)
_WANTS = re.compile(r"\b(show me|visuali[sz]e|chart|graph|diagram|plot|timeline|compare|comparison|map of|table of|put (it )?on (the )?stage)\b", re.I)

STAGE_PROMPT = """
If (and only if) the user asked you to SHOW, CHART, COMPARE or VISUALISE something, you may add ONE
extra fenced block labelled `stage` after your normal answer, containing JSON:
{"title": "short title", "blocks": [{"id": "a", "type": "chart|table|text|node|news|steps|code|svg",
 "title": "...", "data": {...}}], "links": [{"from": "a", "to": "b", "label": "..."}]}
Use the fewest blocks that make the point: one fact is one block. Only add links when blocks are truly related.
Data shapes: chart {values:[numbers], from:"label", to:"label"}; table {columns:[...], rows:[[...]]};
text {body:"..."}; node {value:"..."} (title is the label); steps {items:[{label, state:"done|active|todo"}]};
code {filename, code}; svg {markup:"<svg ...>"} (no scripts). Never invent numbers; if you don't have data, skip the block.
"""


def wants_stage(msg: str) -> bool:
    return bool(_WANTS.search(msg or ""))


def make_stage(title: str, blocks: list, links: Optional[list] = None, actions: Optional[list] = None,
               summary: str = "", layout: Optional[str] = None, stage_id: Optional[str] = None) -> dict:
    stage = {"id": stage_id or uuid.uuid4().hex[:10], "title": title, "ts": time.time(), "blocks": blocks}
    if links: stage["links"] = links
    if actions: stage["actions"] = actions
    if summary: stage["summary"] = summary
    if layout: stage["layout"] = layout
    return stage


def parse_model_stage(text: str) -> tuple[str, Optional[dict]]:
    """Pull a ```stage {json}``` block out of a model reply. Returns (reply without it, stage or None)."""
    m = _STAGE_FENCE.search(text or "")
    if not m:
        return text, None
    clean = (text[:m.start()] + text[m.end():]).strip()
    raw = m.group(1).strip()
    if len(raw) > MAX_STAGE_BYTES:
        return clean, None
    try:
        data = json.loads(raw)
    except ValueError:
        return clean, None
    if not isinstance(data, dict) or not isinstance(data.get("blocks"), list) or not data["blocks"]:
        return clean, None
    data.setdefault("id", uuid.uuid4().hex[:10])
    data.setdefault("title", "Stage")
    data["ts"] = time.time()
    return clean, data


def code_result_stage(task: str, output: str, verified: bool, method: str, attempts: int) -> Optional[dict]:
    """A finished, checked piece of code: request -> code -> checks. None if there is no code to show."""
    files = extract_files(output)
    if not files:
        return None
    name, code = next(iter(files.items()))
    steps = [{"label": "Understood the request", "state": "done"},
             {"label": f"Wrote {name}", "state": "done"},
             {"label": ("Ran it in the sandbox and it passed" if verified else "Ran it, but couldn't confirm it works"),
              "state": "done" if verified else "active"}]
    if attempts > 1:
        steps.insert(2, {"label": f"Fixed problems it found ({attempts - 1} retr{'y' if attempts == 2 else 'ies'})", "state": "done"})
    blocks = [
        {"id": "req", "type": "node", "title": "Request", "data": {"value": task[:60]}},
        {"id": "code", "type": "code", "title": name, "data": {"filename": name, "code": code[:6000]}},
        {"id": "chk", "type": "steps", "title": "Checks", "tone": "good" if verified else "warn", "data": {"items": steps}},
    ]
    links = [{"from": "req", "to": "code", "label": "built"}, {"from": "code", "to": "chk", "label": "checked"}]
    return make_stage("Checked code" if verified else "Code (unverified)", blocks, links, layout="investigation")


def alert_stage(severity: str, title: str, message: str) -> dict:
    tone = "danger" if severity == "high" else "warn"
    return make_stage(title[:60], [
        {"id": "what", "type": "text", "title": "What I noticed", "tone": tone, "data": {"body": message}},
        {"id": "rec", "type": "recommendation", "data": {"title": "Worth a look", "reason": "I haven't changed anything. Tell me if you want me to dig deeper."}},
    ], actions=[{"id": f"ask:Explain what you noticed about: {title}. Is it safe, and what should I do?", "label": "Show me why", "kind": "primary"},
                {"id": "dismiss", "label": "Ignore once", "kind": "ghost"}], layout="single")


def guardian_stage(severity: str, title: str, message: str, proposals: list, countdown: int = 0) -> dict:
    """An alert that comes with things VANTA could do. Each button is a request you approve by pressing it."""
    tone = "danger" if severity == "high" else "warn"
    blocks = [{"id": "what", "type": "text", "title": "What I noticed", "tone": tone, "data": {"body": message}}]
    actions, ids = [], []
    for i, p in enumerate(proposals):
        t = p["target"]
        if p["kind"] == "end_process":
            label, line = f"End {str(t.get('name', 'program'))[:24]}", f"Ask {t.get('name')} to stop. Anything unsaved in it is lost."
        else:
            label, line = "Quarantine the file", f"Move {Path(str(t.get('path', ''))).name} to a locked folder. Nothing is deleted and you can put it back."
        blocks.append({"id": f"p{i}", "type": "text", "title": "I can do this", "data": {"body": line + f"  Why: {p['reason']}"}})
        actions.append({"id": f"guard:approve:{p['id']}", "label": label, "kind": "primary" if i == 0 else "secondary"})
        ids.append(p["id"])
    if countdown:
        actions = [{"id": "guard:stop:" + ",".join(ids), "label": "Stop, don't do it", "kind": "primary"}] + \
                  [{**a, "label": "Do it now: " + a["label"], "kind": "secondary"} for a in actions] + \
                  [{"id": "guard:trust:" + ",".join(ids), "label": "Always trust this program", "kind": "ghost"}]
        rec = {"title": f"I'll do this on my own in {countdown} seconds", "reason": "Autopilot is on. Press Stop to cancel. Everything I do is written to the safety log and can be undone for files."}
    else:
        actions.append({"id": "guard:ignore:" + ",".join(ids), "label": "Leave it alone", "kind": "ghost"})
        actions.append({"id": "guard:trust:" + ",".join(ids), "label": "Always trust this program", "kind": "ghost"})
        rec = {"title": "Your call", "reason": "I won't do anything unless you press a button. Everything I do is written to the safety log."}
    blocks.append({"id": "rec", "type": "recommendation", "data": rec})
    return make_stage(title[:60], blocks, actions=actions, summary=f"{title}. I put what I found and what I can do on the stage.", layout="single")


def doctor_stage(rep) -> dict:
    """Result of a project check: request -> what changed -> test rounds. Buttons only appear when there is something to apply."""
    steps = []
    for r in rep.rounds:
        steps.append({"label": ("Tests passed" if r["passed"] else f"Tests failed" + (f", I changed {r['edits']} spot(s)" if r.get("edits") else "")), "state": "done" if r["passed"] else "active"})
    ok = rep.status in ("passed", "fixed")
    blocks = [{"id": "proj", "type": "node", "title": "Project", "data": {"value": rep.project[:40]}},
              {"id": "chk", "type": "steps", "title": "Test runs", "tone": "good" if ok else "warn", "data": {"items": steps or [{"label": rep.message, "state": "active"}]}}]
    links = [{"from": "proj", "to": "chk", "label": "tested"}]
    actions = [{"id": "dismiss", "label": "Close", "kind": "ghost"}]
    if rep.diff:
        blocks.insert(1, {"id": "diff", "type": "code", "title": "What I changed", "data": {"filename": "changes.diff", "code": rep.diff[:6000]}})
        links = [{"from": "proj", "to": "diff", "label": "fixed"}, {"from": "diff", "to": "chk", "label": "re-tested"}]
        actions = [{"id": f"doctor:apply:{rep.id}", "label": "Apply to my project", "kind": "primary"}, {"id": f"doctor:discard:{rep.id}", "label": "Discard", "kind": "ghost"}]
    else:
        blocks.append({"id": "msg", "type": "text", "title": "Result", "tone": "good" if ok else "warn", "data": {"body": rep.message}})
    summary = {"passed": "All tests pass. Nothing to fix.", "fixed": "I found and fixed the problem in a copy. Nothing in your project has changed yet."}.get(rep.status, rep.message)
    return make_stage(f"Checked {rep.project}", blocks, links, actions=actions, summary=summary, layout="investigation")


_VERB = {"read_file": "Read", "list_files": "Looked at files", "grep": "Searched", "edit_file": "Changed", "write_file": "Wrote", "run_command": "Ran",
         "web_search": "Searched the web", "web_fetch": "Read a web page", "note": "Made a note", "subagent": "Asked a helper", "ask_user": "Asked you"}


def agent_stage(run, working: bool) -> dict:
    """Live view of an agent run: goal -> what it did -> result. Updated on every step (same id)."""
    items = []
    for st in run.steps[-14:]:
        what = st.args.get("path") or st.args.get("command") or st.args.get("pattern") or st.args.get("query") or st.args.get("url") or st.args.get("task") or ""
        items.append({"label": f"{_VERB.get(st.tool, st.tool)} {str(what)[:46]}".strip() + ("" if st.ok else " (not allowed or failed)"), "state": "done" if st.ok else "active"})
    if working:
        items.append({"label": "Working…", "state": "active"})
    blocks = [{"id": "goal", "type": "node", "title": "Goal", "data": {"value": run.goal[:60]}},
              {"id": "did", "type": "steps", "title": "What I did", "tone": "good" if run.status == "done" else "warn" if run.status in ("failed", "stopped") else None,
               "data": {"items": items or [{"label": "Starting", "state": "active"}]}}]
    links = [{"from": "goal", "to": "did", "label": "working on"}]
    actions = [{"id": "dismiss", "label": "Close", "kind": "ghost"}]
    if working:
        actions = [{"id": f"agent:stop:{run.id}", "label": "Stop", "kind": "secondary"}]
    else:
        blocks.append({"id": "res", "type": "text", "title": "Result", "tone": "good" if run.status == "done" else "warn", "data": {"body": run.final or "Finished."}})
        links.append({"from": "did", "to": "res", "label": "result"})
        if run.changed:
            actions = [{"id": f"agent:undo:{run.id}", "label": f"Undo my changes ({len(run.changed)} file{'s' if len(run.changed) > 1 else ''})", "kind": "secondary"}, {"id": "dismiss", "label": "Keep them", "kind": "ghost"}]
    stg = make_stage(("Agent: " + run.goal)[:60], blocks, links, actions=actions, layout="investigation")
    stg["id"] = f"agent-{run.id}"
    return stg


def orchestra_stage(run, working: bool) -> dict:
    """Live view of a manager and its worker agents. Updated on every change (same id)."""
    mark = {"done": "done", "doing": "active", "failed": "active", "skipped": "active", "todo": "todo"}
    items = [{"label": f"{t.goal[:58]}" + (" (retrying)" if t.status == "doing" and t.retries else "") + (" (failed)" if t.status == "failed" else " (skipped)" if t.status == "skipped" else ""),
              "state": mark.get(t.status, "todo")} for t in run.tasks]
    if run.status == "planning":
        items = [{"label": "Manager is planning the jobs", "state": "active"}]
    blocks = [{"id": "goal", "type": "node", "title": "Goal", "data": {"value": run.goal[:60]}},
              {"id": "team", "type": "steps", "title": "Manager and workers", "tone": "good" if run.status == "done" else "warn" if run.status in ("failed", "stopped") else None, "data": {"items": items}}]
    links = [{"from": "goal", "to": "team", "label": "split into jobs"}]
    actions = [{"id": f"team:stop:{run.id}", "label": "Stop", "kind": "secondary"}] if working else [{"id": "dismiss", "label": "Close", "kind": "ghost"}]
    if not working:
        blocks.append({"id": "res", "type": "text", "title": "Manager's summary", "tone": "good" if run.status == "done" else "warn", "data": {"body": run.final or "Finished."}})
        links.append({"from": "team", "to": "res", "label": "result"})
        if run.changed:
            actions = [{"id": f"team:undo:{run.id}", "label": f"Undo the team's changes ({len(run.changed)} file{'s' if len(run.changed) > 1 else ''})", "kind": "secondary"}, {"id": "dismiss", "label": "Keep them", "kind": "ghost"}]
    stg = make_stage(("Team: " + run.goal)[:60], blocks, links, actions=actions, layout="investigation")
    stg["id"] = f"team-{run.id}"
    return stg


def report_stage(run, working: bool) -> dict:
    """The research report: a progress card while it works, then a mosaic of panels. Same id every update."""
    steps = [{"label": x["label"], "state": x["state"]} for x in run.steps]
    blocks: list = []
    if working or run.status != "done":
        blocks.append({"id": "progress", "type": "steps", "title": "Research agent", "tone": "good" if run.status == "done" else "warn" if run.status in ("failed", "stopped") else None,
                       "data": {"items": steps or [{"label": "Starting", "state": "active"}]}})
        read = sum(1 for x in run.sources if x.status == "read")
        if run.sources:
            blocks.append({"id": "count", "type": "stat", "title": "Sources", "data": {"value": f"{read}/{len(run.sources)}", "label": "pages read"}})
        if run.facts:
            blocks.append({"id": "facts", "type": "stat", "title": "Verified", "data": {"value": str(len(run.facts)), "label": "facts checked against the pages"}})
        if run.note:
            blocks.append({"id": "note", "type": "text", "title": "Result", "tone": "warn", "data": {"body": run.note}})
    else:
        if run.summary:
            blocks.append({"id": "summary", "type": "text", "title": run.title, "tone": "good", "data": {"body": run.summary, "kind": "summary"}})
        for i, st in enumerate(run.stats):
            blocks.append({"id": f"stat{i}", "type": "stat", "title": f"Source {st['src']}", "data": {"value": st["value"], "label": st["label"], "src": st["src"]}})
        for i, c in enumerate(run.charts):
            blocks.append({"id": f"bars{i}", "type": "bars", "title": c["title"], "data": {"unit": c["unit"], "points": c["points"]}})
        for i, sec in enumerate(run.sections):
            blocks.append({"id": f"sec{i}", "type": "text", "title": sec["heading"], "data": {"body": sec["body"], "kind": "src " + ", ".join(str(n) for n in sec["src"])}})
        for x in run.sources:
            if x.status == "read" and len(blocks) < 12:
                blocks.append({"id": f"src{x.n}", "type": "source", "title": x.title, "data": {"n": x.n, "url": x.url, "image": x.image}})
        note = f"{len(run.facts)} facts checked against their pages"
        if run.dropped:
            note += f", {run.dropped} claim(s) thrown out because I couldn't verify them"
        blocks = blocks[:12]
        blocks.append({"id": "trust", "type": "text", "title": "How this was checked", "data": {"body": note + ". Numbers shown appear word for word in the cited source."}}) if len(blocks) < 12 else None
    actions = [{"id": f"report:stop:{run.id}", "label": "Stop", "kind": "secondary"}] if working else [{"id": "dismiss", "label": "Close", "kind": "ghost"}]
    if not working and run.status == "done":
        actions = [{"id": f"report:save:{run.id}", "label": "Save as file", "kind": "primary"}, {"id": "dismiss", "label": "Close", "kind": "ghost"}]
    stg = make_stage(("Report: " + (run.title or run.topic))[:60], blocks, actions=actions, layout="report")
    stg["id"] = f"report-{run.id}"
    stg["working"] = bool(working)
    return stg


def report_markdown(run) -> str:
    """The same report as a plain markdown file, with numbered sources."""
    out = [f"# {run.title}", "", run.summary, ""]
    for st in run.stats:
        out.append(f"- **{st['value']}** {st['label']} [{st['src']}]")
    for sec in run.sections:
        out += ["", f"## {sec['heading']}", sec["body"] + " " + "".join(f"[{n}]" for n in sec["src"])]
    for c in run.charts:
        out += ["", f"### {c['title']} ({c['unit']})"] + [f"- {p['label']}: {p['value']} [{p['src']}]" for p in c["points"]]
    out += ["", "## Sources"] + [f"{x.n}. {x.title} <{x.url}>" for x in run.sources if x.status == "read"]
    out += ["", f"_{len(run.facts)} facts checked against their pages; {run.dropped} unverified claim(s) discarded._"]
    return "\n".join(out)


_BUILD_STEPS = [("blueprint", "Plan the build (strong brain)"), ("writing files", "Write the files (fast brain)"),
                ("senior review", "Senior review (strong brain)"), ("checking", "Checks and fixes")]


def build_stage(run, working: bool) -> dict:
    """Live view of a two-brain build. Updated on every stage change (same id)."""
    cur = 0
    for i, (key, _) in enumerate(_BUILD_STEPS):
        if run.stage.startswith(key) or (key == "checking" and run.stage.startswith("fixing")):
            cur = i
    items = [{"label": label + (f" ({run.stage})" if working and i == cur and run.stage.startswith("fixing") else ""),
              "state": "done" if (not working or i < cur) else "active" if i == cur else "todo"}
             for i, (_, label) in enumerate(_BUILD_STEPS)]
    blocks = [{"id": "goal", "type": "node", "title": "Goal", "data": {"value": run.goal[:60]}},
              {"id": "steps", "type": "steps", "title": "Two brains at work", "tone": "good" if run.status == "done" else "warn" if run.status in ("failed", "stopped") else None, "data": {"items": items}}]
    links = [{"from": "goal", "to": "steps", "label": "building"}]
    if run.files:
        blocks.append({"id": "files", "type": "text", "title": "Files", "data": {"body": ", ".join(run.files)}})
        links.append({"from": "steps", "to": "files", "label": "plan"})
    actions = [{"id": f"build:stop:{run.id}", "label": "Stop", "kind": "secondary"}] if working else [{"id": "dismiss", "label": "Close", "kind": "ghost"}]
    if not working:
        blocks.append({"id": "res", "type": "text", "title": "Result", "tone": "good" if run.status == "done" else "warn", "data": {"body": run.final or "Finished."}})
        links.append({"from": "steps", "to": "res", "label": "result"})
        if run.changed:
            actions = [{"id": f"build:undo:{run.id}", "label": f"Undo the build ({len(run.changed)} file{'s' if len(run.changed) > 1 else ''})", "kind": "secondary"}, {"id": "dismiss", "label": "Keep it", "kind": "ghost"}]
    stg = make_stage(("Build: " + run.goal)[:60], blocks, links, actions=actions, layout="investigation")
    stg["id"] = f"build-{run.id}"
    return stg
