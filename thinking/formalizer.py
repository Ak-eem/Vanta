"""Request-to-form: turn a messy request into a small structured form.

A weak model does much better when the problem is spelled out: what is the goal,
what was given, what are the limits, what should come out, and what is unknown.
If something critical is unknown, VANTA asks ONE short question instead of guessing.
"""
from __future__ import annotations

import json
import re
from dataclasses import dataclass, field, asdict
from typing import Callable, Optional

LLM = Callable[[str, str], str]   # (prompt, role) -> text; role: "plan" | "act" | "check"

KINDS = ("code", "math", "research", "ops", "writing", "chat")

FORM_PROMPT = """You turn a user's request into a precise form. Reply with ONLY JSON, no markdown:
{{
  "goal": "one sentence: what the user wants achieved",
  "kind": "code | math | research | ops | writing | chat",
  "inputs": ["things the user already gave (files, numbers, names, text)"],
  "constraints": ["limits: language, style, must/never, deadlines"],
  "scope": "what is in and what is NOT in scope",
  "output": "exactly what the finished result should look like",
  "unknowns": [{{"question": "short question for the user", "critical": true|false}}]
}}
Rules: only mark an unknown critical if you truly cannot do a good job without it.
Do not invent facts. Keep every field short.
{context}
Request: {request}"""


@dataclass
class Form:
    goal: str = ""
    kind: str = "chat"
    inputs: list = field(default_factory=list)
    constraints: list = field(default_factory=list)
    scope: str = ""
    output: str = ""
    unknowns: list = field(default_factory=list)
    source: str = "model"        # "model" or "heuristic"

    def to_prompt(self) -> str:
        lines = [f"GOAL: {self.goal}", f"OUTPUT: {self.output}" if self.output else ""]
        if self.inputs: lines.append("GIVEN: " + "; ".join(map(str, self.inputs)))
        if self.constraints: lines.append("CONSTRAINTS: " + "; ".join(map(str, self.constraints)))
        if self.scope: lines.append(f"SCOPE: {self.scope}")
        return "\n".join(l for l in lines if l)

    def as_dict(self) -> dict:
        return asdict(self)


def _heuristic(request: str) -> Form:
    low = request.lower()
    if re.search(r"\b(calculate|compute|solve|how many|how much|percent|probability|sum of|\d+\s*[\+\-\*/x×^]\s*\d+)\b", low):
        kind = "math"
    elif re.search(r"\b(code|function|script|bug|error|fix|build|implement|api|endpoint|class|python|javascript|typescript|sql|html|css)\b", low):
        kind = "code"
    elif re.search(r"\b(docker|deploy|install|server|ci/cd|process|kill|restart|config)\b", low):
        kind = "ops"
    elif re.search(r"\b(research|compare|latest|news|what is the best|find out|summari[sz]e)\b", low):
        kind = "research"
    elif re.search(r"\b(write|draft|email|essay|post|caption)\b", low):
        kind = "writing"
    else:
        kind = "chat"
    return Form(goal=request.strip()[:200], kind=kind, output="", source="heuristic")


def _parse(raw: str) -> Optional[dict]:
    raw = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw.strip(), flags=re.DOTALL).strip()
    m = re.search(r"\{.*\}", raw, re.DOTALL)
    if not m:
        return None
    try:
        d = json.loads(m.group(0))
        return d if isinstance(d, dict) else None
    except ValueError:
        return None


def _as_list(v) -> list:
    if v is None or v == "":
        return []
    return v if isinstance(v, list) else [v]


def formalize(request: str, llm: Optional[LLM], context: str = "") -> Form:
    """Ask the model for the form; fall back to keyword heuristics on any failure."""
    if llm is None:
        return _heuristic(request)
    try:
        raw = llm(FORM_PROMPT.format(request=request, context=(f"Background: {context}\n" if context else "")), "plan")
    except Exception:
        return _heuristic(request)
    d = _parse(raw)
    if not d or not d.get("goal"):
        return _heuristic(request)
    unknowns = []
    for u in _as_list(d.get("unknowns")):
        if isinstance(u, dict) and u.get("question"):
            unknowns.append({"question": str(u["question"])[:200], "critical": bool(u.get("critical"))})
        elif isinstance(u, str):
            unknowns.append({"question": u[:200], "critical": False})
    kind = str(d.get("kind", "chat")).lower()
    return Form(goal=str(d["goal"])[:300], kind=kind if kind in KINDS else "chat",
                inputs=_as_list(d.get("inputs")), constraints=_as_list(d.get("constraints")),
                scope=str(d.get("scope", ""))[:300], output=str(d.get("output", ""))[:300],
                unknowns=unknowns, source="model")


def clarifying_question(form: Form) -> Optional[str]:
    """One short question if something critical is missing, else None. Never more than two asks in one message."""
    crit = [u["question"] for u in form.unknowns if u.get("critical")]
    if not crit:
        return None
    return crit[0] if len(crit) == 1 else f"{crit[0]} Also: {crit[1]}"
