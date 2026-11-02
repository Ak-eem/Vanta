"""The System board: live readings for the right-hand side, plus the plain-English commands that act on them.
Pure parts live here so they can be tested without a server."""
from __future__ import annotations

import re
import threading
import time
from typing import Callable, Optional

from awareness import programs as prog

STATUS_RE = re.compile(r"\b(?:how(?:'s| is| are)\s+(?:my\s+)?(?:laptop|computer|pc|system|machine|hardware)|system\s+(?:status|check|health)|why\s+is\s+(?:my\s+)?(?:laptop|computer|pc)\s+(?:so\s+)?(?:slow|lagging|hot)|what(?:'s| is)\s+(?:using|eating|slowing))", re.I)
END_RE = re.compile(r"^\s*(?:please\s+)?(?:end|close|stop|kill|quit|cancel)\s+(?:the\s+|my\s+)?(?:program\s+|app\s+|process\s+)?(.+?)\s*[.!]*\s*$", re.I)
UNINSTALL_RE = re.compile(r"^\s*(?:please\s+)?(?:uninstall|remove|delete)\s+(?:the\s+|my\s+)?(?:program\s+|app\s+)?(.+?)\s*[.!]*\s*$", re.I)


FOCUS_RE = re.compile(r"^\s*(?:please\s+)?(?:show|focus on|open|pin|bring up)(?:\s+me)?(?:\s+(?:my|the))?\s+(processor|cpu|memory|ram|drives?|disks?|storage|heat|temperatures?|temp|fans?|programs?|apps|network|internet|wifi|connections?|security|firewall|antivirus|installed(?: programs)?)(?:\s+(?:card|panel|usage|info|status))?\s*[.!]*\s*$", re.I)
CARD_OF = {"processor": "cpu", "cpu": "cpu", "memory": "mem", "ram": "mem", "drive": "disks", "drives": "disks", "disk": "disks", "disks": "disks", "storage": "disks",
           "heat": "heat", "temperature": "heat", "temperatures": "heat", "temp": "heat", "fan": "heat", "fans": "heat", "program": "programs", "programs": "programs", "apps": "programs",
           "network": "network", "internet": "network", "wifi": "network", "connection": "network", "connections": "network",
           "security": "security", "firewall": "security", "antivirus": "security", "installed": "installed", "installed programs": "installed"}


WEATHER_RE = re.compile(r"^\s*(?:please\s+)?(?:show|open|pin|bring up|check)?\s*(?:me\s+)?(?:the\s+|my\s+)?(?:weather|forecast)(?:\s+(?:card|panel))?(?:\s+(?:in|for|at)\s+([A-Za-z][A-Za-z .'-]{1,40}?))?(?:\s+(?:today|now|please))?\s*[.!?]*\s*$", re.I)


def parse(msg: str) -> Optional[tuple[str, str]]:
    """('status'|'end'|'uninstall', target). Only a hint: the caller still checks that a real program matches."""
    m = WEATHER_RE.match(msg)
    if m:
        return "weather", (m.group(1) or "").strip()
    m = FOCUS_RE.match(msg)
    if m:
        return "focus", CARD_OF[m.group(1).lower()]
    m = UNINSTALL_RE.match(msg)
    if m and len(m.group(1)) <= 60:
        return "uninstall", m.group(1)
    m = END_RE.match(msg)
    if m and len(m.group(1)) <= 60:
        return "end", m.group(1)
    if STATUS_RE.search(msg):
        return "status", ""
    return None


def match_running(groups: list[dict], query: str) -> list[dict]:
    q = re.sub(r"\.exe$", "", query.strip().lower())
    if not q:
        return []
    exact = [g for g in groups if re.sub(r"\.exe$", "", g["name"].lower()) == q]
    return exact or [g for g in groups if q in g["name"].lower()]


class Board:
    """Streams snapshots to the browsers that are looking at the board. Costs nothing when nobody is."""

    def __init__(self, hw, net, emit: Callable[[str, dict, str], None], installed: Callable[[], list[dict]] = prog.installed, every: float = 2.0) -> None:
        self.hw, self.net, self._emit, self.installed, self.every = hw, net, emit, installed, every
        self.watchers: set[str] = set()
        self._lock = threading.Lock()
        self._extra: dict = {}
        self._extra_at = -1e9
        self._progs: list[dict] = []
        self._progs_at = -1e9

    def watch(self, sid: str, on: bool) -> None:
        with self._lock:
            (self.watchers.add if on else self.watchers.discard)(sid)

    def programs(self, force: bool = False) -> list[dict]:
        if force or time.time() - self._progs_at > 120:
            self._progs, self._progs_at = self.installed(), time.time()
        return self._progs

    def state(self) -> dict:
        snap = self.hw.snapshot()
        if time.time() - self._extra_at > 6:
            self._extra, self._extra_at = self.net.snapshot(), time.time()
        snap["network"] = self._extra
        snap["findings"] = snap["findings"] + self._extra.get("findings", [])
        snap["installed"] = [prog.public(p) for p in self.programs()][:60]
        snap["can_uninstall"] = bool(self._progs)
        return snap

    def tick(self) -> None:
        with self._lock:
            sids = list(self.watchers)
        if not sids:
            return
        st = self.state()
        for sid in sids:
            self._emit("hw_state", st, sid)

    def run(self, stop: Optional[threading.Event] = None) -> None:
        while not (stop and stop.is_set()):
            time.sleep(self.every)
            try:
                self.tick()
            except Exception as exc:
                print(f"[board] {exc}")
