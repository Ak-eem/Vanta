"""Live catalog of OpenRouter free models.

Model IDs on OpenRouter's free tier change often. Hardcoded IDs silently rot
(a 404 per call, then a wasted failover). This module fetches the public
model list, keeps the `:free` text models, caches them on disk, and lets the
router drop dead IDs and top up with live ones.

If the list cannot be fetched (offline), callers get their preferred list back
unchanged, so nothing gets worse than before.
"""
from __future__ import annotations

import json
import logging
import time
import urllib.request
from pathlib import Path
from typing import Iterable, Optional

logger = logging.getLogger(__name__)

MODELS_URL = "https://openrouter.ai/api/v1/models"
CACHE_PATH = Path.home() / ".vanta" / "free_models.json"
TTL_SECONDS = 6 * 3600

_mem: Optional[dict] = None


def _fetch() -> list[dict]:
    req = urllib.request.Request(MODELS_URL, headers={"User-Agent": "vanta"})
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode("utf-8"))
    out = []
    for m in data.get("data", []):
        mid = m.get("id", "")
        if not mid.endswith(":free"):
            continue
        arch = m.get("architecture") or {}
        outs = arch.get("output_modalities") or ["text"]
        if "text" not in outs:
            continue
        out.append({"id": mid, "ctx": int(m.get("context_length") or 0)})
    return out


def load(force: bool = False) -> list[dict]:
    """Return [{'id','ctx'}...] of live free models; [] if unknown."""
    global _mem
    now = time.time()
    if not force and _mem and now - _mem["at"] < TTL_SECONDS:
        return _mem["models"]
    if not force:
        try:
            cached = json.loads(CACHE_PATH.read_text())
            if now - cached["at"] < TTL_SECONDS and cached["models"]:
                _mem = cached
                return cached["models"]
        except Exception:
            pass
    try:
        models = _fetch()
        if models:
            _mem = {"at": now, "models": models}
            try:
                CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
                CACHE_PATH.write_text(json.dumps(_mem))
            except OSError:
                pass
            return models
    except Exception as exc:  # network down, bad JSON, etc.
        logger.warning("free-model catalog unavailable: %s", exc)
    return _mem["models"] if _mem else []


def resolve(preferred: Iterable[str], extra: int = 2) -> list[str]:
    """Keep preferred IDs that are live, then add the largest-context live
    free models as backups. Unknown catalog -> preferred unchanged."""
    preferred = list(preferred)
    live = load()
    if not live:
        return preferred
    live_ids = {m["id"] for m in live}
    kept = [m for m in preferred if m in live_ids]
    dropped = [m for m in preferred if m not in live_ids]
    if dropped:
        logger.warning("dropping dead free-model IDs: %s", dropped)
    backups = [m["id"] for m in sorted(live, key=lambda m: -m["ctx"]) if m["id"] not in kept]
    return kept + backups[: max(extra, 0 if kept else 3)]


def best(preferred: str) -> str:
    """Single-model version: the preferred ID if live, else best live one."""
    r = resolve([preferred], extra=1)
    return r[0] if r else preferred
