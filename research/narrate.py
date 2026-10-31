"""Live narration while research runs. VANTA says, in its own words, what it is doing and finding, so you do not have to watch.
Every line is written by the fast model from facts that are already verified (counts, site names, checked claims). It is never given anything else,
so it has nothing to invent from. Lines are rate-limited, so VANTA talks like a person, not a ticker."""
from __future__ import annotations

import re
import threading
from concurrent.futures import ThreadPoolExecutor
from typing import Callable, Optional
from urllib.parse import urlparse

SYSTEM = """You are VANTA, a personal assistant, talking out loud to your owner while you work on a research task.
Say ONE short natural sentence (under 20 words) about what is happening right now, using only the notes given. Sound like a person: relaxed, direct, a little personality is fine.
No lists, no markdown, no emojis, no quotes around it. Never claim anything the notes do not say. Do not repeat what you already said."""


def _host(url: str) -> str:
    return urlparse(url).netloc.lower().removeprefix("www.")


def clean(text: str) -> str:
    t = re.sub(r"\s+", " ", str(text or "")).strip().strip('"“”')
    t = re.sub(r"[*_`#>]+", "", t)
    return t[:200] if len(t) >= 3 else ""


class Narrator:
    def __init__(self, fast: Callable, emit: Callable[[str], None], clock: Callable[[], float], min_gap: float = 5.0, max_lines: int = 7) -> None:
        self.fast, self.emit, self.clock, self.min_gap, self.max_lines = fast, emit, clock, min_gap, max_lines
        self.said: list[str] = []
        self._last = -1e9
        self._count = 0
        self._seen: set[str] = set()
        self._facts_told = 0
        self._pool = ThreadPoolExecutor(max_workers=1)     # one at a time, so lines arrive in order
        self._lock = threading.Lock()

    def _line(self, notes: str) -> str:
        recent = " | ".join(self.said[-3:]) or "nothing yet"
        out = self.fast([{"role": "system", "content": SYSTEM}, {"role": "user", "content": f"Notes: {notes}\nAlready said: {recent}"}])
        return clean(out)

    def _speak(self, notes: str) -> None:
        try:
            line = self._line(notes)
        except Exception:
            return
        if line and line not in self.said:
            self.said.append(line)
            self.emit(line)

    def say(self, key: str, notes: str, force: bool = False) -> bool:
        """Queues one line unless it is too soon, too many, or already said. `force` is for the ending."""
        with self._lock:
            now = self.clock()
            if key in self._seen or (not force and (now - self._last < self.min_gap or self._count >= self.max_lines)):
                return False
            self._seen.add(key); self._last = now; self._count += 1
        self._pool.submit(self._speak, notes)
        return True

    def observe(self, run) -> None:
        """Called on every progress update of a report run; decides whether something is worth saying."""
        if run.stage == "searching" and run.title:
            self.say("start", f"Starting research on: {run.title}. Planning a few searches.")
        elif run.stage == "reading" and run.sources:
            hosts = []
            for s in run.sources:
                h = _host(s.url)
                if h and h not in hosts:
                    hosts.append(h)
            self.say("sources", f"Found {len(run.sources)} pages to read, from sites like {', '.join(hosts[:3])}. Now reading them.")
        elif run.stage == "checking" and len(run.facts) >= self._facts_told + 3:
            f = run.facts[-1]
            self._facts_told = len(run.facts)
            self.say(f"fact{self._facts_told}", f"Checked {len(run.facts)} facts against the pages so far. One of them: {f.claim or f.quote[:120]}.")
        elif run.stage == "writing":
            self.say("writing", f"Everything is checked ({len(run.facts)} facts, {run.dropped} thrown out as unverifiable). Writing the report now.")

    def finish(self, run) -> Optional[str]:
        """The closing line, written from the report's own summary. Returns it so the caller can use it as the reply."""
        self._pool.shutdown(wait=True)
        if run.status != "done":
            return None
        try:
            line = self._line(f"The report on '{run.title}' is done and on screen. Its summary: {run.summary[:300]}. {len(run.sources)} sources, {len(run.facts)} checked facts. Tell them it is ready and give the gist.")
        except Exception:
            return None
        return line or None
