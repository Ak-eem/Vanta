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
