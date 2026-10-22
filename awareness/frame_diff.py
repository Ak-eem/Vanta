"""Frame differencing: the fallback "eyes" for things UI Automation / the DOM can't read.

Compares each frame to the previous one (not to all past frames) on a small
grayscale copy. Tiny changes (cursor, clock) are ignored. A big change returns
the box around what changed, so only that crop needs OCR or a vision model.
Frames are never written to disk.
"""
from __future__ import annotations

import logging
import threading
import time
from typing import Callable, Optional

import cv2
import numpy as np

from .events import ActivityLog

logger = logging.getLogger(__name__)
SMALL = (160, 90)


class FrameDiffer:
    def __init__(self, min_ratio: float = 0.01, pixel_delta: int = 25) -> None:
        self.min_ratio, self.pixel_delta = min_ratio, pixel_delta
        self._prev: Optional[np.ndarray] = None

    def feed(self, frame: np.ndarray) -> Optional[dict]:
        """frame: HxW or HxWx3/4 uint8. Returns None, or {ratio, bbox, first} for a notable change.
        bbox is (x, y, w, h) in the ORIGINAL frame's pixel coordinates."""
        h, w = frame.shape[:2]
        gray = frame if frame.ndim == 2 else cv2.cvtColor(frame, cv2.COLOR_BGRA2GRAY if frame.shape[2] == 4 else cv2.COLOR_BGR2GRAY)
        small = cv2.resize(gray, SMALL, interpolation=cv2.INTER_AREA)
        prev, self._prev = self._prev, small
        if prev is None:
            return {"ratio": 1.0, "bbox": (0, 0, w, h), "first": True}
        mask = cv2.absdiff(prev, small) > self.pixel_delta
        ratio = float(mask.mean())
        if ratio < self.min_ratio:
            return None
        ys, xs = np.where(mask)
        x0, x1, y0, y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
        sx, sy = w / SMALL[0], h / SMALL[1]
        return {"ratio": ratio, "first": False,
                "bbox": (int(x0 * sx), int(y0 * sy), int((x1 - x0) * sx), int((y1 - y0) * sy))}


class ScreenWatcher:
    """Opt-in (privacy source 'screen'). Needs `pip install mss`. Logs *that* something changed
    and where, never the pixels. Pass `on_change(info, frame)` to analyse the frame in memory."""

    def __init__(self, log: ActivityLog, fps: float = 2.0, on_change: Optional[Callable] = None,
                 grab: Optional[Callable[[], np.ndarray]] = None) -> None:
        self.log, self.fps, self.on_change = log, fps, on_change
        self.diff = FrameDiffer()
        self._grab = grab
        self._stop = threading.Event()
        self._thread: Optional[threading.Thread] = None
        self.last_keyframe: Optional[np.ndarray] = None   # RAM only, overwritten each change

    def _default_grab(self):
        import mss
        sct = mss.mss()
        mon = sct.monitors[1]
        return lambda: np.array(sct.grab(mon))

    def tick(self, frame: Optional[np.ndarray] = None) -> Optional[dict]:
        if frame is None:
            frame = self._grab()
        info = self.diff.feed(frame)
        if info and not info["first"]:
            self.last_keyframe = frame
            self.log.add("screen", "screen_change", detail={"ratio": round(info["ratio"], 3), "bbox": info["bbox"]})
            if self.on_change:
                self.on_change(info, frame)
        return info

    def start(self) -> None:
        if self._thread and self._thread.is_alive():
            return
        try:
            self._grab = self._grab or self._default_grab()
        except Exception as exc:
            logger.warning("screen watcher unavailable (pip install mss): %s", exc)
            return
        self._stop.clear()
        def loop():
            while not self._stop.is_set():
                try:
                    if self.log.privacy.source_on("screen"):
                        self.tick()
                except Exception as exc:
                    logger.warning("screen tick failed: %s", exc)
                self._stop.wait(1.0 / self.fps)
        self._thread = threading.Thread(target=loop, name="vanta-screen-watch", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop.set()
