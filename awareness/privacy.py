"""Privacy controls: pause, blocklist, per-source switches, redaction.

Everything the awareness layer wants to record passes through
PrivacyState.allows() and PrivacyState.redact() first. Pause means pause:
nothing is recorded while paused, from any source.
"""
from __future__ import annotations

import json
import re
import threading
from pathlib import Path
from typing import Callable, Optional

CONFIG_PATH = Path.home() / ".vanta" / "privacy.json"

DEFAULTS = {
    "paused": False,
    # sources: process, window, browser, screen (frame diff is opt-in)
    "sources": {"process": True, "window": True, "browser": True, "screen": False},
    "blocked_apps": ["keepass", "keepassxc", "bitwarden", "1password", "lastpass",
                     "dashlane", "authenticator"],
    "blocked_title_words": ["incognito", "inprivate", "private browsing", "password",
                            "passcode", "one-time code", "otp"],
    "blocked_hosts": ["paypal.com", "bank", "accounts.google.com", "login.microsoftonline.com"],
    "retention_days": 7,
}

_REDACTIONS = [
    (re.compile(r"[\w.+-]+@[\w-]+\.[\w.-]+"), "[email]"),
    (re.compile(r"\b(?:\d[ -]?){13,19}\b"), "[number]"),
    (re.compile(r"\b(?:sk|gsk|ghp|github_pat|xox[bap]|AIza)[-_A-Za-z0-9]{16,}"), "[secret]"),
    (re.compile(r"(?i)\b(bearer|token|api[_-]?key|secret|password|passwd|pwd)\b\s*[:=]\s*\S+"), r"\1=[redacted]"),
    (re.compile(r"\b[A-Za-z0-9_\-]{40,}\b"), "[secret]"),
]


class PrivacyState:
    def __init__(self, path: Path = CONFIG_PATH) -> None:
        self.path = path
        self._lock = threading.RLock()
        self._listeners: list[Callable[[dict], None]] = []
        self.cfg = json.loads(json.dumps(DEFAULTS))
        self._load()

    # ── persistence ───────────────────────────────────────────────────────
    def _load(self) -> None:
        try:
            saved = json.loads(self.path.read_text())
            for k, v in saved.items():
                if k == "sources" and isinstance(v, dict):
                    self.cfg["sources"].update(v)
                elif k in self.cfg:
                    self.cfg[k] = v
        except (OSError, ValueError):
            pass

    def _save(self) -> None:
        try:
            self.path.parent.mkdir(parents=True, exist_ok=True)
            self.path.write_text(json.dumps(self.cfg, indent=2))
        except OSError:
            pass

    def on_change(self, fn: Callable[[dict], None]) -> None:
        self._listeners.append(fn)

    def _notify(self) -> None:
        snap = self.snapshot()
        for fn in list(self._listeners):
            try:
                fn(snap)
            except Exception:
                pass

    # ── controls ──────────────────────────────────────────────────────────
    @property
    def paused(self) -> bool:
        return bool(self.cfg["paused"])

    def set_paused(self, value: bool) -> None:
        with self._lock:
            self.cfg["paused"] = bool(value)
            self._save()
        self._notify()

    def toggle_pause(self) -> bool:
        self.set_paused(not self.paused)
        return self.paused

    def set_source(self, name: str, enabled: bool) -> None:
        with self._lock:
            if name in self.cfg["sources"]:
                self.cfg["sources"][name] = bool(enabled)
                self._save()
        self._notify()

    def add_block(self, kind: str, value: str) -> None:
        key = {"app": "blocked_apps", "title": "blocked_title_words", "host": "blocked_hosts"}[kind]
        value = value.strip().lower()
        with self._lock:
            if value and value not in self.cfg[key]:
                self.cfg[key].append(value)
                self._save()

    def snapshot(self) -> dict:
        with self._lock:
            return {"paused": self.paused, "sources": dict(self.cfg["sources"]),
                    "watching": (not self.paused) and any(self.cfg["sources"].values())}

    # ── decisions ─────────────────────────────────────────────────────────
    def source_on(self, source: str) -> bool:
        return (not self.paused) and bool(self.cfg["sources"].get(source, False))

    def allows(self, source: str, app: str = "", title: str = "", url: str = "") -> bool:
        if not self.source_on(source):
            return False
        a, t, u = (app or "").lower(), (title or "").lower(), (url or "").lower()
        if any(b in a for b in self.cfg["blocked_apps"]):
            return False
        if any(w in t for w in self.cfg["blocked_title_words"]):
            return False
        if u and any(h in u for h in self.cfg["blocked_hosts"]):
            return False
        return True

    @staticmethod
    def redact(text: Optional[str]) -> str:
        out = text or ""
        for pat, repl in _REDACTIONS:
            out = pat.sub(repl, out)
        return out
