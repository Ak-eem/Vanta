"""Connects awareness + people to the rest of VANTA's memory and to the chat prompt.

context_for(msg): extra background for the model, built only from what is relevant
  * people/claims for names in the message
  * the recent activity timeline, only if the message asks about what you were doing
  * long-term profile memories (existing vanta_memory) matched by the message
nightly(): compact old activity into daily summaries and store each as an `event`
  memory so it is searchable alongside everything else.
"""
from __future__ import annotations

import re
from typing import Optional

from .events import ActivityLog

_ASKS_ACTIVITY = re.compile(
    r"\b(what (was|am|have) i (doing|working|looking)|what did i (do|work|open)|"
    r"just now|a (minute|moment|while) ago|earlier today|my (screen|activity)|"
    r"what('s| is) (on )?my screen|how long (was|have) i|what apps?)\b", re.I)


class MemoryBridge:
    def __init__(self, log: ActivityLog, people, memory_module=None) -> None:
        self.log, self.people, self.mem = log, people, memory_module

    def wants_activity(self, msg: str) -> bool:
        return bool(_ASKS_ACTIVITY.search(msg or ""))

    def context_for(self, msg: str) -> str:
        parts: list[str] = []
        try:
            p = self.people.context_for(msg)
            if p:
                parts.append(p)
        except Exception:
            pass
        if self.wants_activity(msg) and self.log.privacy.source_on("window"):
            tl = self.log.describe_recent(minutes=60)
            if tl:
                parts.append("Recent activity on the user's computer (most recent last):\n" + tl)
        if self.mem is not None:
            try:
                hits = self.mem.search_memories(msg, top_k=3)
                if hits:
                    parts.append("Remembered:\n" + "\n".join(f"- {h['content']}" for h in hits))
            except Exception:
                pass
        return "\n\n".join(parts)

    def note_claims(self, msg: str) -> int:
        """Capture 'X said …' statements from the user's own message."""
        try:
            return len(self.people.capture(msg))
        except Exception:
            return 0

    def nightly(self) -> int:
        n = self.log.compact()
        if self.mem is not None:
            for day, text in self.log.summaries(days=3):
                try:
                    self.mem.add_memory("event", f"{day}: {text}", source="awareness", confidence=0.6)
                except Exception:
                    pass
        return n
