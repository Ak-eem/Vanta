"""Runs sync in the background once unlocked. The passphrase is never written to disk; the derived key lives in memory."""
from __future__ import annotations

import threading
import time
from pathlib import Path
from typing import Callable, Optional

from . import crypto
from .engine import Sync
from .store import Store, from_env

STATE = Path.home() / ".vanta" / "sync_state.json"


class SyncService:
    def __init__(self, people_path: Path, notes_path: Path, notes, on_ask: Callable[[str], None], on_state: Callable[[dict], None],
                 store: Optional[Store] = None, interval: int = 8, reply: Optional[Callable[[str], str]] = None) -> None:
        self.store = store if store is not None else from_env()
        self.dbs, self.notes, self.on_ask, self.on_state, self.interval = {"people": people_path, "notes": notes_path}, notes, on_ask, on_state, interval
        self.reply_fn, self._busy = reply, False
        self.sync: Optional[Sync] = None
        self.last, self.error = 0.0, ""
        self._seen_asks: set[str] = {n["id"] for n in notes.all() if n["kind"] == "ask"}
        self._thread: Optional[threading.Thread] = None

    def status(self) -> dict:
        return {"configured": self.store is not None, "unlocked": self.sync is not None, "last": self.last, "error": self.error}

    def unlock(self, passphrase: str) -> dict:
        if self.store is None:
            self.error = "No sync service is set up yet (see README: Phone sync)."
        else:
            try:
                key = Sync.unlock(self.store, passphrase)
                self.sync, self.error = Sync(self.store, key, self.dbs, STATE), ""
                self._start()
                self.run_once()
            except crypto.WrongPassphrase:
                self.error = "That passphrase doesn't match the one your phone vault uses."
            except Exception as exc:  # network etc.
                self.error = f"Couldn't reach the sync service: {exc}"
        self.on_state(self.status())
        return self.status()

    def run_once(self) -> None:
        if not self.sync:
            return
        try:
            self.sync.run()
            self.last, self.error = time.time(), ""
            for n in self.notes.all():
                if n["kind"] == "ask" and n["id"] not in self._seen_asks:
                    self._seen_asks.add(n["id"])
                    self.on_ask(n["text"])
            self._answer_chats()
        except Exception as exc:
            self.error = f"Sync paused: {exc}"
        self.on_state(self.status())

    def _answer_chats(self) -> None:
        """Messages typed on the phone get a text-only answer from this laptop; the reply syncs back."""
        if not self.reply_fn or self._busy:
            return
        todo = [c for c in self.notes.unanswered() if time.time() - c["created"] < 3600]   # old pile-ups are ignored
        if not todo:
            return
        self._busy = True
        def work():
            try:
                for c in todo:
                    try:
                        text = self.reply_fn(c["text"]) or "I couldn't come up with an answer. Try again?"
                    except Exception:
                        text = "I hit a problem answering that. Try again in a moment."
                    self.notes.add_chat("assistant", text, reply_to=c["id"])
                if self.sync:
                    self.sync.push()
            finally:
                self._busy = False
        threading.Thread(target=work, name="vanta-phone-chat", daemon=True).start()

    def _start(self) -> None:
        if self._thread and self._thread.is_alive():
            return
        def loop():
            while True:
                time.sleep(self.interval)
                self.run_once()
        self._thread = threading.Thread(target=loop, name="vanta-sync", daemon=True)
        self._thread.start()
