"""
Vanta Watcher Daemon — the proactive layer. Runs in the background,
watches code projects and news, and pushes alerts through two channels:
on-screen (Socket.IO -> new 'alert' event + existing dashboard log) and
Telegram (for when you're away from the screen).
"""

import json
import logging
import shlex
import threading
import time
from pathlib import Path

from .file_watcher import FileWatcher
from .news_watcher import NewsWatcher
from .telegram_alert import send_telegram_alert


LOGGER = logging.getLogger(__name__)
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
_ALLOWED_TEST_COMMANDS = {"python", "python3", "pytest", "node", "npm"}
_COMMAND_FORBIDDEN_CHARS = set(";&|><`\n\r\x00")
_JOIN_TIMEOUT_SECONDS = 5.0


class WatcherDaemon:
    def __init__(self, groq_client, model: str, socketio, agent_name: str = "Vanta"):
        self.client = groq_client
        self.model = model
        self.socketio = socketio
        self.agent_name = agent_name

        self._lifecycle_lock = threading.RLock()
        self._state = "stopped"
        self._component_threads = {}

        # Validate all watcher inputs before either watcher is constructed.
        self.config = self._load_config()

        self.file_watcher = FileWatcher(
            projects=self.config["projects"],
            on_alert=self._handle_alert,
        )
        self.news_watcher = NewsWatcher(
            feeds=self.config["news_feeds"],
            groq_client=self.client,
            model=self.model,
            on_alert=self._handle_alert,
            poll_minutes=self.config["news_poll_minutes"],
        )

    @staticmethod
    def _validate_test_command(command: str, project_index: int) -> None:
        """Validate a command before it reaches the legacy shell-based runner."""
        if not isinstance(command, str):
            raise ValueError(
                f"projects[{project_index}].test_command must be a string or null"
            )
        command = command.strip()
        if not command:
            return
        if any(char in command for char in _COMMAND_FORBIDDEN_CHARS):
            raise ValueError(
                f"projects[{project_index}].test_command contains forbidden shell syntax"
            )
        try:
            parts = shlex.split(command)
        except ValueError as exc:
            raise ValueError(
                f"projects[{project_index}].test_command is not valid shell syntax"
            ) from exc
        if not parts or parts[0] not in _ALLOWED_TEST_COMMANDS:
            executable = parts[0] if parts else "<empty>"
            raise ValueError(
                f"projects[{project_index}].test_command must start with one of "
                f"{sorted(_ALLOWED_TEST_COMMANDS)}; got {executable!r}"
            )

    @classmethod
    def _validate_config(cls, raw_config):
        """Return a validated config, rejecting unsafe or malformed watcher input."""
        if not isinstance(raw_config, dict):
            raise ValueError("watcher_config.json must contain a JSON object")

        config = {**DEFAULT_CONFIG, **raw_config}

        projects = config["projects"]
        if not isinstance(projects, list):
            raise ValueError("watcher_config.projects must be a list")
        for index, project in enumerate(projects):
            if not isinstance(project, dict):
                raise ValueError(f"watcher_config.projects[{index}] must be an object")

            path = project.get("path")
            if not isinstance(path, str) or not path.strip():
                raise ValueError(
                    f"watcher_config.projects[{index}].path must be a non-empty string"
                )
            if not Path(path).is_dir():
                raise ValueError(
                    f"watcher_config.projects[{index}].path is not an existing directory: {path!r}"
                )

            if "test_command" in project and project["test_command"] is not None:
                cls._validate_test_command(project["test_command"], index)

            interval = project.get("test_interval_min", 15)
            if isinstance(interval, bool) or not isinstance(interval, int) or interval <= 0:
                raise ValueError(
                    f"watcher_config.projects[{index}].test_interval_min must be a positive integer"
                )

        feeds = config["news_feeds"]
        if not isinstance(feeds, list) or any(
            not isinstance(feed, str) or not feed.strip() for feed in feeds
        ):
            raise ValueError("watcher_config.news_feeds must be a list of non-empty strings")

        poll_minutes = config["news_poll_minutes"]
        if (
            isinstance(poll_minutes, bool)
            or not isinstance(poll_minutes, int)
            or poll_minutes <= 0
        ):
            raise ValueError("watcher_config.news_poll_minutes must be a positive integer")

        for key in ("telegram_bot_token", "telegram_chat_id"):
            if not isinstance(config[key], str):
                raise ValueError(f"watcher_config.{key} must be a string")

        min_severity = config["telegram_min_severity"]
        if min_severity not in _SEVERITY_RANK:
            raise ValueError(
                "watcher_config.telegram_min_severity must be one of "
                f"{sorted(_SEVERITY_RANK)}"
            )

        return config

    @classmethod
    def _load_config(cls):
        if not CONFIG_FILE.exists():
            try:
                CONFIG_FILE.write_text(json.dumps(DEFAULT_CONFIG, indent=2) + "\n")
            except OSError:
                LOGGER.exception("Unable to create default watcher configuration at %s", CONFIG_FILE)
            return cls._validate_config(dict(DEFAULT_CONFIG))

        try:
            raw_config = json.loads(CONFIG_FILE.read_text())
        except (OSError, json.JSONDecodeError) as exc:
            raise ValueError(f"Unable to read watcher configuration at {CONFIG_FILE}") from exc
        return cls._validate_config(raw_config)

    def _start_component(self, name, component):
        before = {
            thread
            for thread in threading.enumerate()
            if thread is not threading.current_thread()
        }
        try:
            component.start()
        finally:
            # Current watcher implementations do not expose their threads, so
            # retain the threads they create as a compatibility fallback.
            self._component_threads[name] = [
                thread
                for thread in threading.enumerate()
                if thread not in before and thread is not threading.current_thread()
            ]

    def _join_component(self, name, component):
        deadline = time.monotonic() + _JOIN_TIMEOUT_SECONDS
        join = getattr(component, "join", None)
        if callable(join):
            try:
                join(_JOIN_TIMEOUT_SECONDS)
            except TypeError:
                # Accommodate compatible test doubles with a no-argument join.
                try:
                    join()
                except Exception:
                    LOGGER.exception("Failed to join %s watcher", name)
            except Exception:
                LOGGER.exception("Failed to join %s watcher", name)
            return

        for thread in self._component_threads.get(name, ()):
            if thread is threading.current_thread():
                continue
            remaining = max(0.0, deadline - time.monotonic())
            try:
                thread.join(remaining)
            except Exception:
                LOGGER.exception("Failed to join %s watcher thread", name)

    def _stop_component(self, name, component):
        try:
            stop = getattr(component, "stop", None)
            if callable(stop):
                stop()
        except Exception:
            LOGGER.exception("Failed to stop %s watcher", name)
        finally:
            self._join_component(name, component)

    def _stop_components(self, components):
        # Each component is stopped in its own guarded block: one broken
        # watcher must not prevent the other watcher from being shut down.
        for name, component in reversed(components):
            self._stop_component(name, component)

    def start(self):
        with self._lifecycle_lock:
            if self._state != "stopped":
                LOGGER.debug("Ignoring duplicate watcher daemon start while %s", self._state)
                return

            self._state = "starting"
            started = []
            try:
                for name, component in (
                    ("file", self.file_watcher),
                    ("news", self.news_watcher),
                ):
                    # Record before calling start so a component that fails
                    # halfway through can still be rolled back.
                    started.append((name, component))
                    self._start_component(name, component)
            except Exception:
                LOGGER.exception("Watcher daemon startup failed; rolling back partial start")
                self._state = "stopping"
                self._stop_components(started)
                self._component_threads.clear()
                self._state = "stopped"
                raise

            self._state = "running"
            print(
                f"✅  Watcher daemon started — "
                f"{len(self.config['projects'])} project(s), "
                f"{len(self.config['news_feeds'])} news feed(s)"
            )

    def stop(self):
        with self._lifecycle_lock:
            if self._state == "stopped":
                return
            self._state = "stopping"
            try:
                self._stop_components(
                    [
                        ("file", self.file_watcher),
                        ("news", self.news_watcher),
                    ]
                )
            finally:
                self._component_threads.clear()
                self._state = "stopped"

    def _emit_socket(self, event, payload):
        try:
            self.socketio.emit(event, payload)
        except Exception:
            LOGGER.exception("Socket.IO notification failed for event %s", event)

    def _handle_alert(
        self,
        severity: str,
        title: str,
        message: str,
        source: str = "",
    ):
        # Keep each socket event independent so a failure in one does not
        # suppress the dashboard status update or Telegram delivery.
        self._emit_socket(
            "alert",
            {
                "severity": severity,
                "title": title,
                "message": message,
                "source": source,
            },
        )
        self._emit_socket(
            "status",
            {
                "state": "idle",
                "message": f"[{severity.upper()}] {title}: {message}",
            },
        )

        severity_key = severity.lower() if isinstance(severity, str) else severity
        rank = _SEVERITY_RANK.get(severity_key, -1)
        floor = _SEVERITY_RANK[self.config["telegram_min_severity"]]
        if rank < floor:
            return

        try:
            send_telegram_alert(
                self.config["telegram_bot_token"],
                self.config["telegram_chat_id"],
                f"{self.agent_name}: {title}",
                message,
                severity,
                source,
            )
        except Exception:
            LOGGER.exception("Telegram notification failed")
