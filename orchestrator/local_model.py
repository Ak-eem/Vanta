"""Local model via Ollama: the unlimited, offline last resort.

Install Ollama (ollama.com), then e.g. `ollama pull qwen2.5:3b`. VANTA detects it
automatically. Small local models are weaker, so the pool only uses this when every
free cloud provider is cooling down or out of budget.
Env: VANTA_LOCAL_MODEL (default qwen2.5:3b), OLLAMA_HOST (default http://127.0.0.1:11434).
"""
from __future__ import annotations

import json
import os
import time
import urllib.error
import urllib.request
from typing import Optional


class LocalClient:
    def __init__(self, model: Optional[str] = None, host: Optional[str] = None, timeout: float = 240.0) -> None:
        self.model = model or os.getenv("VANTA_LOCAL_MODEL", "qwen2.5:3b")
        self.host = (host or os.getenv("OLLAMA_HOST", "http://127.0.0.1:11434")).rstrip("/")
        if not self.host.startswith("http://127.0.0.1") and not self.host.startswith("http://localhost"):
            raise ValueError("Local model host must be on this computer (127.0.0.1 / localhost)")
        self.timeout = timeout
        self._avail: Optional[tuple[float, bool]] = None

    def available(self) -> bool:
        """True if Ollama is running and has our model. Cached for 30s."""
        now = time.time()
        if self._avail and now - self._avail[0] < 30:
            return self._avail[1]
        ok = False
        try:
            with urllib.request.urlopen(self.host + "/api/tags", timeout=2) as r:
                names = [m.get("name", "") for m in json.loads(r.read().decode()).get("models", [])]
            base = self.model.split(":")[0]
            ok = any(n == self.model or n.split(":")[0] == base and ":" not in self.model for n in names)
        except Exception:
            ok = False
        self._avail = (now, ok)
        return ok

    @classmethod
    def from_env(cls) -> Optional["LocalClient"]:
        if os.getenv("VANTA_LOCAL_ENABLED", "true").lower() in {"0", "false", "no", "off"}:
            return None
        try:
            return cls()
        except ValueError:
            return None

    def generate(self, prompt: str) -> str:
        body = json.dumps({"model": self.model, "prompt": prompt, "stream": False,
                           "options": {"temperature": 0.2, "num_ctx": 4096}}).encode()
        req = urllib.request.Request(self.host + "/api/generate", data=body,
                                     headers={"Content-Type": "application/json"}, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=self.timeout) as r:
                return json.loads(r.read().decode()).get("response", "")
        except (urllib.error.URLError, TimeoutError, ValueError) as exc:
            raise RuntimeError(f"Local model failed: {exc}") from exc
