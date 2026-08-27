"""
Vanta Watcher Daemon — the proactive layer. Runs in the background,
watches code projects and news, and pushes alerts through two channels:
on-screen (Socket.IO -> new 'alert' event + existing dashboard log) and
Telegram (for when you're away from the screen).
"""

import json
from pathlib import Path

from .file_watcher import FileWatcher
from .news_watcher import NewsWatcher
from .telegram_alert import send_telegram_alert

CONFIG_FILE = Path(__file__).parent.parent / "watcher_config.json"

DEFAULT_CONFIG = {
    "projects": [],
    "news_feeds": [],
    "news_poll_minutes": 45,
    "telegram_bot_token": "",
    "telegram_chat_id": "",
    "telegram_min_severity": "medium",
}

_SEVERITY_RANK = {"low": 0, "medium": 1, "high": 2}


class WatcherDaemon:
    def __init__(self, groq_client, model: str, socketio, agent_name: str = "Vanta"):
        self.client = groq_client
        self.model = model
        self.socketio = socketio
        self.agent_name = agent_name
        self.config = self._load_config()

        self.file_watcher = FileWatcher(
            projects=self.config.get("projects", []),
            on_alert=self._handle_alert,
        )
        self.news_watcher = NewsWatcher(
            feeds=self.config.get("news_feeds", []),
            groq_client=self.client,
            model=self.model,
            on_alert=self._handle_alert,
            poll_minutes=self.config.get("news_poll_minutes", 45),
        )

    def _load_config(self) -> dict:
        if CONFIG_FILE.exists():
            try:
                return {**DEFAULT_CONFIG, **json.loads(CONFIG_FILE.read_text())}
            except Exception:
                pass
        else:
            CONFIG_FILE.write_text(json.dumps(DEFAULT_CONFIG, indent=2))
        return dict(DEFAULT_CONFIG)

    def start(self):
        self.file_watcher.start()
        self.news_watcher.start()
        print(f"👁  Watcher daemon started — "
              f"{len(self.config.get('projects', []))} project(s), "
              f"{len(self.config.get('news_feeds', []))} news feed(s)")

    def stop(self):
        self.file_watcher.stop()
        self.news_watcher.stop()

    def _handle_alert(self, severity: str, title: str, message: str, source: str = ""):
        # On-screen: new event for edge-glow (frontend adds the handler),
        # broadcast to every connected client — not tied to one chat turn.
        self.socketio.emit("alert", {
            "severity": severity, "title": title,
            "message": message, "source": source,
        })
        # Also drops into the existing dashboard log via 'status' so it's
        # visible immediately, even before edge-glow UI is wired in.
        self.socketio.emit("status", {
            "state": "idle",
            "message": f"[{severity.upper()}] {title}: {message}",
        })

        floor = _SEVERITY_RANK.get(self.config.get("telegram_min_severity", "medium"), 1)
        if _SEVERITY_RANK.get(severity, 0) >= floor:
            send_telegram_alert(
                self.config.get("telegram_bot_token", ""),
                self.config.get("telegram_chat_id", ""),
                f"{self.agent_name}: {title}", message, severity, source,
            )
