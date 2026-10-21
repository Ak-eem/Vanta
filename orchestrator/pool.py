"""Provider pool: rotate free providers, respect limits, never ask twice.

Pieces
  Cooldowns      per-key (provider or model) back-off with exponential growth,
                 plus a rolling per-minute and per-day request budget.
  ResponseCache  sqlite cache keyed on (task_type, prompt); identical work is
                 answered for free.
  GeminiClient   minimal Google Gemini REST client (free tier, GEMINI_API_KEY).
  ProviderPool   tries cache -> OpenRouter -> Gemini -> Groq, skipping any
                 provider that is cooling down or out of budget.
"""
from __future__ import annotations

import hashlib
import json
import logging
import os
import sqlite3
import threading
import time
import urllib.error
import urllib.request
from collections import deque
from pathlib import Path
from typing import Any, Callable, Optional

logger = logging.getLogger(__name__)

HOME = Path.home() / ".vanta"


class Cooldowns:
    """Thread-safe back-off + rate budget tracker."""

    def __init__(self, clock: Callable[[], float] = time.time) -> None:
        self._clock = clock
        self._lock = threading.Lock()
        self._until: dict[str, float] = {}
        self._strikes: dict[str, int] = {}
        self._calls: dict[str, deque] = {}
        self._day: dict[str, tuple[int, int]] = {}  # key -> (yyyyddd, count)

    def available(self, key: str, rpm: Optional[int] = None, daily: Optional[int] = None) -> bool:
        with self._lock:
            now = self._clock()
            if self._until.get(key, 0) > now:
                return False
            if rpm:
                q = self._calls.get(key, deque())
                while q and q[0] < now - 60:
                    q.popleft()
                if len(q) >= rpm:
                    return False
            if daily:
                day, n = self._day.get(key, (0, 0))
                if day == int(now // 86400) and n >= daily:
                    return False
            return True

    def record_call(self, key: str) -> None:
        with self._lock:
            now = self._clock()
            self._calls.setdefault(key, deque()).append(now)
            day = int(now // 86400)
            d, n = self._day.get(key, (day, 0))
            self._day[key] = (day, n + 1 if d == day else 1)

    def fail(self, key: str, base: float = 60.0, cap: float = 3600.0) -> float:
        """Put `key` on cooldown; repeated failures double the wait."""
        with self._lock:
            s = self._strikes.get(key, 0) + 1
            self._strikes[key] = s
            wait = min(base * 2 ** (s - 1), cap)
            self._until[key] = self._clock() + wait
            return wait

    def ok(self, key: str) -> None:
        with self._lock:
            self._strikes.pop(key, None)
            self._until.pop(key, None)

    def snapshot(self) -> dict[str, Any]:
        now = self._clock()
        with self._lock:
            return {k: round(v - now) for k, v in self._until.items() if v > now}


COOLDOWNS = Cooldowns()  # shared by the pool and the OpenRouter model loop


class ResponseCache:
    def __init__(self, path: Optional[Path] = None, ttl: int = 7 * 86400) -> None:
        self.path = path or (HOME / "response_cache.db")
        self.ttl = ttl
        self._lock = threading.Lock()
        try:
            self.path.parent.mkdir(parents=True, exist_ok=True)
            with self._conn() as c:
                c.execute("CREATE TABLE IF NOT EXISTS cache(k TEXT PRIMARY KEY, v TEXT, model TEXT, at REAL)")
            self.enabled = True
        except Exception as exc:
            logger.warning("response cache disabled: %s", exc)
            self.enabled = False

    def _conn(self) -> sqlite3.Connection:
        return sqlite3.connect(self.path, timeout=5)

    @staticmethod
    def key(task_type: str, prompt: str) -> str:
        return hashlib.sha256(f"{task_type}\x00{prompt.strip()}".encode()).hexdigest()

    def get(self, task_type: str, prompt: str) -> Optional[tuple[str, str]]:
        if not self.enabled:
            return None
        with self._lock, self._conn() as c:
            row = c.execute("SELECT v, model, at FROM cache WHERE k=?", (self.key(task_type, prompt),)).fetchone()
        if row and time.time() - row[2] < self.ttl:
            return row[0], row[1]
        return None

    def put(self, task_type: str, prompt: str, value: str, model: str) -> None:
        if not self.enabled or not value or not value.strip():
            return
        with self._lock, self._conn() as c:
            c.execute("INSERT OR REPLACE INTO cache VALUES(?,?,?,?)",
                      (self.key(task_type, prompt), value, model, time.time()))


class GeminiClient:
    """Free-tier Gemini via REST. Raises RuntimeError with .status on failure."""

    def __init__(self, api_key: str, model: str = "gemini-2.5-flash", timeout: float = 90.0) -> None:
        self.api_key, self.model, self.timeout = api_key.strip(), model, timeout

    @classmethod
    def from_env(cls) -> Optional["GeminiClient"]:
        key = os.getenv("GEMINI_API_KEY", "").strip()
        return cls(key, os.getenv("GEMINI_MODEL", "gemini-2.5-flash")) if key else None

    def generate(self, prompt: str) -> str:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{self.model}:generateContent"
        req = urllib.request.Request(
            url,
            data=json.dumps({"contents": [{"parts": [{"text": prompt}]}]}).encode(),
            headers={"Content-Type": "application/json", "x-goog-api-key": self.api_key},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=self.timeout) as r:
                data = json.loads(r.read().decode())
            return "".join(p.get("text", "") for p in data["candidates"][0]["content"]["parts"])
        except urllib.error.HTTPError as exc:
            e = RuntimeError(f"Gemini HTTP {exc.code}")
            e.status = exc.code  # type: ignore[attr-defined]
            raise e from exc
        except (KeyError, IndexError, ValueError, urllib.error.URLError, TimeoutError) as exc:
            e = RuntimeError(f"Gemini failed: {exc}")
            e.status = 0  # type: ignore[attr-defined]
            raise e from exc


class ProviderPool:
    """Ordered free providers with cache, cooldowns and budgets."""

    def __init__(self, openrouter=None, gemini=None, groq=None, groq_model: str = "",
                 cache: Optional[ResponseCache] = None, cooldowns: Cooldowns = COOLDOWNS) -> None:
        self.openrouter, self.gemini, self.groq, self.groq_model = openrouter, gemini, groq, groq_model
        self.cache = cache if cache is not None else ResponseCache()
        self.cd = cooldowns
        self.or_rpm = int(os.getenv("OPENROUTER_RPM_LIMIT", "20"))
        self.or_daily = int(os.getenv("OPENROUTER_DAILY_LIMIT", "50"))
        self.gem_rpm = int(os.getenv("GEMINI_RPM_LIMIT", "10"))
        self.gem_daily = int(os.getenv("GEMINI_DAILY_LIMIT", "200"))

    def run(self, prompt: str, task_type: str, on_progress: Optional[Callable] = None) -> tuple[str, str]:
        """Return (text, label). Raises RuntimeError only if every provider is exhausted."""
        hit = self.cache.get(task_type, prompt)
        if hit:
            if on_progress:
                on_progress("cache", "done", hit[0])
            return hit[0], f"cache ({hit[1]})"

        errors: list[str] = []
        attempts: list[tuple[str, Callable[[], tuple[str, str]], Optional[int], Optional[int]]] = []
        if self.openrouter is not None:
            attempts.append(("openrouter",
                             lambda: self.openrouter.execute(prompt, task_type, on_progress=on_progress),
                             self.or_rpm, self.or_daily))
        if self.gemini is not None:
            attempts.append(("gemini", lambda: (self.gemini.generate(prompt), self.gemini.model),
                             self.gem_rpm, self.gem_daily))
        if self.groq is not None:
            attempts.append(("groq", self._groq_call(prompt), None, None))

        for name, fn, rpm, daily in attempts:
            if not self.cd.available(name, rpm, daily):
                errors.append(f"{name}: cooling down/over budget")
                continue
            try:
                self.cd.record_call(name)
                text, model = fn()
                self.cd.ok(name)
                self.cache.put(task_type, prompt, text, model)
                return text, f"{name}:{model}"
            except Exception as exc:
                wait = self.cd.fail(name, base=30 if "429" not in str(exc) else 90)
                logger.warning("provider %s failed (%s); cooling %ss", name, exc, int(wait))
                errors.append(f"{name}: {exc}")
        raise RuntimeError("all providers unavailable — " + "; ".join(errors))

    def _groq_call(self, prompt: str) -> Callable[[], tuple[str, str]]:
        def call() -> tuple[str, str]:
            r = self.groq.chat.completions.create(
                model=self.groq_model,
                messages=[{"role": "system", "content": "You are Vanta, a premium AI coding assistant."},
                          {"role": "user", "content": prompt}],
                max_tokens=4096, temperature=0.2)
            return r.choices[0].message.content, self.groq_model
        return call
