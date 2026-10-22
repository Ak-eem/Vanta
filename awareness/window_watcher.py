"""Active-window watcher (Windows) + optional UI Automation snapshot.

Logs which app and window title you're using, and idle/active changes.
It never records keystrokes or window contents continuously. `snapshot_focused()`
reads on-screen text only when explicitly asked.
"""
from __future__ import annotations

import logging
import sys
import threading
import time
from typing import Callable, Optional

import psutil

from .events import ActivityLog

logger = logging.getLogger(__name__)
IDLE_AFTER = 300  # seconds


def _windows_active_window() -> Optional[tuple[str, str]]:
    import ctypes
    from ctypes import wintypes
    u = ctypes.windll.user32
    hwnd = u.GetForegroundWindow()
    if not hwnd:
        return None
    n = u.GetWindowTextLengthW(hwnd)
    buf = ctypes.create_unicode_buffer(n + 1)
    u.GetWindowTextW(hwnd, buf, n + 1)
    pid = wintypes.DWORD()
    u.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
    try:
        app = psutil.Process(pid.value).name().lower()
    except psutil.Error:
        app = "?"
    return app, buf.value


def _windows_idle_seconds() -> float:
    import ctypes
    from ctypes import wintypes

    class LASTINPUTINFO(ctypes.Structure):
        _fields_ = [("cbSize", wintypes.UINT), ("dwTime", wintypes.DWORD)]
    li = LASTINPUTINFO(); li.cbSize = ctypes.sizeof(li)
    ctypes.windll.user32.GetLastInputInfo(ctypes.byref(li))
    return (ctypes.windll.kernel32.GetTickCount() - li.dwTime) / 1000.0


def default_provider() -> Optional[Callable[[], Optional[tuple[str, str]]]]:
    return _windows_active_window if sys.platform == "win32" else None


def default_idle() -> Optional[Callable[[], float]]:
    return _windows_idle_seconds if sys.platform == "win32" else None


class WindowWatcher:
    def __init__(self, log: ActivityLog, provider=None, idle_provider=None, interval: float = 1.0) -> None:
        self.log, self.interval = log, interval
        self.provider = provider or default_provider()
        self.idle_provider = idle_provider or default_idle()
        self._cur: Optional[tuple[str, str]] = None
        self._idle = False
        self._stop = threading.Event()
        self._thread: Optional[threading.Thread] = None

    @property
    def supported(self) -> bool:
        return self.provider is not None

    def tick(self) -> None:
        if not self.provider:
            return
        win = self.provider()
        if win and win != self._cur:
            self._cur = win
            self.log.add("window", "focus", app=win[0], title=win[1])
        if self.idle_provider:
            idle = self.idle_provider() >= IDLE_AFTER
            if idle != self._idle:
                self._idle = idle
                self.log.add("window", "idle" if idle else "active", app="", title="")

    def current(self) -> Optional[tuple[str, str]]:
        return self._cur

    def start(self) -> None:
        if not self.supported or (self._thread and self._thread.is_alive()):
            return
        self._stop.clear()
        def loop():
            while not self._stop.is_set():
                try:
                    if self.log.privacy.source_on("window"):
                        self.tick()
                except Exception as exc:
                    logger.warning("window watcher tick failed: %s", exc)
                self._stop.wait(self.interval)
        self._thread = threading.Thread(target=loop, name="vanta-window-watch", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop.set()


def snapshot_focused(privacy, max_chars: int = 4000) -> str:
    """On-demand read of the focused window's visible text via UI Automation.

    Windows only, needs `pip install uiautomation`. Returns "" if unavailable,
    paused, or the window is blocklisted. Output is redacted.
    """
    try:
        import uiautomation as auto  # type: ignore
    except Exception:
        return ""
    if not privacy.source_on("window"):
        return ""
    try:
        win = auto.GetForegroundControl().GetTopLevelControl()
        app_title = win.Name or ""
        if not privacy.allows("window", "", app_title):
            return ""
        parts: list[str] = []
        total = 0
        for ctrl, _depth in auto.WalkControl(win, maxDepth=8):
            if ctrl.ControlTypeName == "EditControl" and getattr(ctrl, "IsPassword", False):
                continue
            name = (ctrl.Name or "").strip()
            if name:
                parts.append(name); total += len(name)
                if total > max_chars:
                    break
        return privacy.redact("\n".join(parts))[:max_chars]
    except Exception as exc:
        logger.warning("UIA snapshot failed: %s", exc)
        return ""
