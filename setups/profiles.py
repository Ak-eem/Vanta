"""The setups you can flip between at any time, and where your choice is remembered."""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Optional

HOME = Path.home() / ".vanta"

THINK_OVERLAY = """You are the person's thinking partner for a serious idea, not a cheerleader.
- Start by restating their idea in one plain sentence, so they can correct you.
- If a key assumption is missing, ask at most two sharp questions before going deep.
- Give the strongest argument against the idea and the most likely way it fails.
- Offer two or three genuinely different options with the trade-off of each.
- Be honest when you disagree. Do not flatter. Say what you are unsure about.
- End with a recommendation and the one next step. Plain, simple words.
- If they say "save decision", the decision is kept in their notes."""

OFFLINE_OVERLAY = """You are running on a small local model with no internet.
Keep answers short and concrete. If something needs fresh facts or a big job, say so plainly instead of guessing."""

PROFILES: dict[str, dict] = {
    "everyday": {"label": "Everyday", "cloud": True, "effort": None, "overlay": "",
                 "desc": "Normal VANTA. A fast model for chat, a smarter one for hard things."},
    "think": {"label": "Think with me", "cloud": True, "effort": "high", "overlay": THINK_OVERLAY,
              "desc": "The strongest model, thinking deeply. It questions your idea instead of just agreeing."},
    "builder": {"label": "Builder", "cloud": True, "effort": None, "overlay": "",
                "desc": "Two brains: a strong model plans and reviews, a fast one builds. Use /build."},
    "offline": {"label": "Offline", "cloud": False, "effort": None, "overlay": OFFLINE_OVERLAY,
                "desc": "Only the model on this laptop. Nothing leaves it."},
}

_ALIASES = {
    "everyday": "everyday", "normal": "everyday", "default": "everyday",
    "think": "think", "thinking": "think", "brainstorm": "think", "think with me": "think",
    "builder": "builder", "build": "builder", "two brain": "builder", "two-brain": "builder",
    "offline": "offline", "private": "offline", "local": "offline",
}

_SWITCH = re.compile(r"^\s*(?:/setup|/mode|switch to|go to|turn on|go|use)\s+(?:the\s+)?([a-z][a-z \-]{1,20}?)(?:\s+(?:mode|setup))?\s*[.!]?\s*$", re.I)
_DECISION = re.compile(r"^\s*(?:save (?:this )?decision|decision:|decided:|we(?:'ll| will) go with|let'?s go with)\b[:\s-]*(.*)$", re.I | re.S)


def parse_switch(msg: str) -> Optional[str]:
    """'switch to think mode', '/setup offline', 'go offline' -> profile id; anything else -> None."""
    m = _SWITCH.match(msg or "")
    if not m:
        return None
    return _ALIASES.get(m.group(1).strip().lower())


def parse_decision(msg: str) -> Optional[str]:
    m = _DECISION.match(msg or "")
    if not m:
        return None
    return (m.group(1).strip() or msg.strip())[:1500]


class SetupStore:
    def __init__(self, path: Path = HOME / "setup.json") -> None:
        self.path = Path(path)
        self.data = {"current": "everyday", "builder_fast": "cloud"}
        try:
            d = json.loads(self.path.read_text())
            if d.get("current") in PROFILES:
                self.data["current"] = d["current"]
            if d.get("builder_fast") in ("cloud", "local"):
                self.data["builder_fast"] = d["builder_fast"]
        except Exception:
            pass

    @property
    def current(self) -> str:
        return self.data["current"]

    @property
    def profile(self) -> dict:
        return PROFILES[self.current]

    def set(self, name: str) -> dict:
        if name not in PROFILES:
            raise ValueError(f"unknown setup: {name}")
        self.data["current"] = name
        self._save()
        return PROFILES[name]

    def set_builder_fast(self, where: str) -> None:
        self.data["builder_fast"] = "local" if where == "local" else "cloud"
        self._save()

    def _save(self) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.path.write_text(json.dumps(self.data))

    def state(self) -> dict:
        return {"current": self.current, "builder_fast": self.data["builder_fast"],
                "profiles": [{"id": k, "label": v["label"], "desc": v["desc"]} for k, v in PROFILES.items()]}
