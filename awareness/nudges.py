"""Nudge ladder: how VANTA gets your attention without becoming annoying.

Rungs:   sphere  ->  desktop notification  ->  voice
low      sphere only (a quiet toast in the app)
medium   sphere + desktop notification
high     sphere + notification + voice
Unacknowledged medium/high nudges escalate one rung after `escalate_after` seconds.
Cooldown per topic stops repeats; quiet hours silence voice and low/medium nudges
(high still shows, silently). Tone is calm: say what and why, never alarm.
"""
from __future__ import annotations

import json
import logging
import shutil
import subprocess
import sys
import threading
import time
import uuid
from pathlib import Path
from typing import Callable, Optional

logger = logging.getLogger(__name__)
CONFIG_PATH = Path.home() / ".vanta" / "nudge.json"
DEFAULTS = {"quiet_start": 23, "quiet_end": 7, "cooldown_minutes": {"low": 120, "medium": 30, "high": 10},
            "voice_enabled": True, "desktop_enabled": True, "escalate_after": 120}


def _ps(script: str) -> None:
    exe = shutil.which("powershell") or shutil.which("pwsh")
    if exe:
        subprocess.Popen([exe, "-NoProfile", "-WindowStyle", "Hidden", "-Command", script],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def desktop_notify(title: str, message: str) -> bool:
    try:
        from plyer import notification  # type: ignore
        notification.notify(title=title[:60], message=message[:240], app_name="VANTA", timeout=10)
        return True
    except Exception:
        pass
    if sys.platform == "win32":
        t, m = title.replace("'", "''")[:60], message.replace("'", "''")[:240]
        _ps("Add-Type -AssemblyName System.Windows.Forms;$n=New-Object System.Windows.Forms.NotifyIcon;"
            "$n.Icon=[System.Drawing.SystemIcons]::Information;$n.Visible=$true;"
            f"$n.ShowBalloonTip(8000,'{t}','{m}','Info');Start-Sleep 9;$n.Dispose()")
        return True
    return False


def speak(text: str) -> bool:
    try:
        import pyttsx3  # type: ignore
        eng = pyttsx3.init(); eng.say(text[:300]); eng.runAndWait()
        return True
    except Exception:
        pass
    if sys.platform == "win32":
        t = text.replace("'", "''")[:300]
        _ps(f"Add-Type -AssemblyName System.Speech;(New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak('{t}')")
        return True
    return False


class NudgeEngine:
    def __init__(self, emit: Callable[[str, dict], None], notify=desktop_notify, voice=speak,
                 clock: Callable[[], float] = time.time, hour: Optional[Callable[[], int]] = None,
                 path: Path = CONFIG_PATH, async_delivery: bool = True) -> None:
        self.emit, self.notify, self.voice, self.clock = emit, notify, voice, clock
        self._hour = hour or (lambda: time.localtime().tm_hour)
        self.cfg = json.loads(json.dumps(DEFAULTS))
        try:
            self.cfg.update(json.loads(path.read_text()))
        except (OSError, ValueError):
            pass
        self.async_delivery = async_delivery
        self._last: dict[str, float] = {}
        self.history: list[dict] = []
        self._pending: dict[str, dict] = {}
        self._lock = threading.Lock()

    def quiet(self) -> bool:
        h, a, b = self._hour(), self.cfg["quiet_start"], self.cfg["quiet_end"]
        return (a <= h or h < b) if a > b else (a <= h < b)

    def _run(self, fn, *args) -> None:
        if self.async_delivery:
            threading.Thread(target=fn, args=args, daemon=True).start()
        else:
            fn(*args)

    def nudge(self, topic: str, severity: str, title: str, message: str) -> Optional[str]:
        """Returns nudge id if delivered, None if suppressed (cooldown / quiet hours)."""
        severity = severity if severity in ("low", "medium", "high") else "low"
        now = self.clock()
        with self._lock:
            cool = self.cfg["cooldown_minutes"][severity] * 60
            last = self._last.get(topic)
            if last is not None and now - last < cool:
                return None
            quiet = self.quiet()
            if quiet and severity != "high":
                return None
            self._last[topic] = now
            nid = uuid.uuid4().hex[:8]
            rungs = ["sphere"]
            if severity in ("medium", "high") and self.cfg["desktop_enabled"]:
                rungs.append("desktop")
            if severity == "high" and self.cfg["voice_enabled"] and not quiet:
                rungs.append("voice")
            rec = {"id": nid, "topic": topic, "severity": severity, "title": title[:80],
                   "message": message[:300], "ts": now, "rungs": rungs, "acked": False}
            self.history = (self.history + [rec])[-50:]
            if severity in ("medium", "high") and "voice" not in rungs and not quiet:
                self._pending[nid] = rec
        self.emit("nudge", {k: rec[k] for k in ("id", "severity", "title", "message")})
        if "desktop" in rungs:
            self._run(self.notify, rec["title"], rec["message"])
        if "voice" in rungs:
            self._run(self.voice, f"{rec['title']}. {rec['message']}")
        return nid

    def ack(self, nid: str) -> None:
        with self._lock:
            self._pending.pop(nid, None)
            for r in self.history:
                if r["id"] == nid:
                    r["acked"] = True

    def escalate_due(self) -> list[str]:
        """Call periodically. Unacknowledged medium nudges get voiced once, if allowed."""
        now, done = self.clock(), []
        with self._lock:
            due = [r for r in self._pending.values() if now - r["ts"] >= self.cfg["escalate_after"]]
            for r in due:
                self._pending.pop(r["id"], None)
                r["rungs"].append("voice")
                done.append(r["id"])
        for nid in done:
            rec = next(r for r in self.history if r["id"] == nid)
            if self.cfg["voice_enabled"] and not self.quiet():
                self._run(self.voice, f"{rec['title']}. {rec['message']}")
        return done
