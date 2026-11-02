"""A short-lived signed note saying who the server heard. The browser carries it back with the message, so it cannot be faked or reused:
it is tied to the exact words, expires in 90 seconds, and is signed with this computer's own secret."""
from __future__ import annotations

import base64
import hashlib
import hmac
import time
from typing import Optional

TTL = 90


def _sig(secret: bytes, body: str) -> str:
    return hmac.new(secret, body.encode(), hashlib.sha256).hexdigest()[:32]


def make(secret: bytes, role: str, name: str, text: str, now: Optional[float] = None) -> str:
    exp = int((now if now is not None else time.time()) + TTL)
    who = base64.urlsafe_b64encode(name.encode()).decode().rstrip("=")
    body = f"v1.{exp}.{role}.{who}.{hashlib.sha256(text.strip().encode()).hexdigest()[:16]}"
    return f"{body}.{_sig(secret, body)}"


def verify(secret: bytes, ticket: str, text: str, now: Optional[float] = None) -> Optional[dict]:
    """Returns {"role","name"} for a good ticket, otherwise None."""
    try:
        v, exp, role, who, th, sig = str(ticket).split(".")
        body = ".".join((v, exp, role, who, th))
        if v != "v1" or not hmac.compare_digest(sig, _sig(secret, body)):
            return None
        if int(exp) < (now if now is not None else time.time()):
            return None
        if th != hashlib.sha256(text.strip().encode()).hexdigest()[:16]:
            return None
        if role not in ("owner", "guest", "unknown", "unclear"):
            return None
        return {"role": role, "name": base64.urlsafe_b64decode(who + "=" * (-len(who) % 4)).decode()}
    except Exception:
        return None
