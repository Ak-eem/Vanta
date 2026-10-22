"""Windows system-tray indicator: a dot that shows whether VANTA is watching.
Lives outside the browser so it is visible even when the VANTA tab is closed.
Needs `pip install pystray pillow`; silently does nothing if unavailable."""
from __future__ import annotations

import logging
import webbrowser
from typing import Optional

logger = logging.getLogger(__name__)


def _icon(color: str):
    from PIL import Image, ImageDraw
    img = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    ImageDraw.Draw(img).ellipse((10, 10, 54, 54), fill=color)
    return img


class Tray:
    WATCHING, PAUSED = "#2596FF", "#8A9AB8"

    def __init__(self, privacy, url: str) -> None:
        self.privacy, self.url, self.icon = privacy, url, None
        privacy.on_change(self._refresh)

    def _refresh(self, snap: dict) -> None:
        if self.icon:
            self.icon.icon = _icon(self.WATCHING if snap["watching"] else self.PAUSED)
            self.icon.title = "VANTA — watching" if snap["watching"] else "VANTA — paused"

    def start(self) -> bool:
        try:
            import pystray
            menu = pystray.Menu(
                pystray.MenuItem(lambda _: "Resume watching" if self.privacy.paused else "Pause watching",
                                 lambda *_: self.privacy.toggle_pause()),
                pystray.MenuItem("Open VANTA", lambda *_: webbrowser.open(self.url)))
            snap = self.privacy.snapshot()
            self.icon = pystray.Icon("vanta", _icon(self.WATCHING if snap["watching"] else self.PAUSED),
                                     "VANTA — watching" if snap["watching"] else "VANTA — paused", menu)
            self.icon.run_detached()
            return True
        except Exception as exc:
            logger.info("tray unavailable: %s", exc)
            return False
