"""Scan pipeline + results cache + download watcher."""
from __future__ import annotations

import json
import sqlite3
import threading
import time
from pathlib import Path
from queue import Empty, Queue
from typing import Callable, Optional

from . import static
from .reputation import VirusTotal
from .verdict import decide

DB_PATH = Path.home() / ".vanta" / "scans.db"
PARTIAL = (".crdownload", ".part", ".tmp", ".download", ".partial", ".opdownload")


class Scanner:
    def __init__(self, db: Path = DB_PATH, vt: Optional[VirusTotal] = None, explain: Optional[Callable[[dict], str]] = None,
                 is_trusted: Callable[[dict], bool] = lambda r: False, signature=static.default_signature) -> None:
        self.db, self.vt, self.explain, self.is_trusted, self.signature = db, vt or VirusTotal(), explain, is_trusted, signature
        db.parent.mkdir(parents=True, exist_ok=True)
        with self._c() as c:
            c.execute("CREATE TABLE IF NOT EXISTS scans(sha256 TEXT PRIMARY KEY, path TEXT, name TEXT, ts REAL, label TEXT, score INTEGER, data TEXT)")

    def _c(self) -> sqlite3.Connection:
        c = sqlite3.connect(self.db, timeout=5)
        c.row_factory = sqlite3.Row
        return c

    def scan(self, path: Path, force: bool = False, explain: bool = True) -> dict:
        report = static.analyze(path, self.signature)
        if not force:
            cached = self.cached(report["sha256"])
            if cached:
                return {**cached, "path": str(path), "name": Path(path).name}
        rep = self.vt.lookup(report["sha256"]) if self.vt.enabled else None
        v = decide(report, rep, self.is_trusted(report))
        about = ""
        if explain and self.explain and (report["kind"] != "other" or v["label"] != "safe"):
            try:
                about = self.explain({**report, **v, "reputation": rep})
            except Exception:
                about = ""
        out = {"sha256": report["sha256"], "path": str(path), "name": Path(path).name, "ts": time.time(), "size": report["size"], "kind": report["kind"],
               "publisher": (report["signature"] or {}).get("publisher", ""), "reputation": rep, "about": about, **v}
        with self._c() as c:
            c.execute("INSERT OR REPLACE INTO scans VALUES(?,?,?,?,?,?,?)", (out["sha256"], out["path"], out["name"], out["ts"], out["label"], out["score"], json.dumps(out)))
        return out

    def cached(self, sha256: str) -> Optional[dict]:
        with self._c() as c:
            r = c.execute("SELECT data FROM scans WHERE sha256=?", (sha256,)).fetchone()
        return json.loads(r["data"]) if r else None

    def recent(self, limit: int = 30) -> list[dict]:
        with self._c() as c:
            return [json.loads(r["data"]) for r in c.execute("SELECT data FROM scans ORDER BY ts DESC LIMIT ?", (limit,))]


class DownloadWatcher:
    """Watches folders for new files, waits until the download has finished, then scans in the background."""
    def __init__(self, scanner: Scanner, folders: list[Path], on_result: Callable[[dict], None], settle: float = 3.0,
                 sleep: Callable[[float], None] = time.sleep) -> None:
        self.scanner, self.folders, self.on_result, self.settle, self._sleep = scanner, [Path(f) for f in folders], on_result, settle, sleep
        self.q: Queue = Queue()
        self._seen: set[str] = set()
        self._stop = threading.Event()

    def _ready(self, p: Path) -> bool:
        """A file is finished when its size stops changing."""
        try:
            a = p.stat().st_size
            self._sleep(self.settle)
            return p.exists() and p.stat().st_size == a and a > 0
        except OSError:
            return False

    def submit(self, p: Path) -> None:
        if p.name.lower().endswith(PARTIAL) or p.name.startswith(".") or str(p) in self._seen or not p.is_file():
            return
        self._seen.add(str(p))
        self.q.put(p)

    def work_once(self, timeout: float = 1.0) -> bool:
        try:
            p = self.q.get(timeout=timeout)
        except Empty:
            return False
        for _ in range(60):                                  # wait up to ~3 minutes for a slow download to finish
            if self._ready(p):
                try:
                    self.on_result(self.scanner.scan(p))
                except Exception as exc:
                    print(f"[scanner] {p.name}: {exc}")
                return True
            if not p.exists():
                return True
        return True

    def start(self) -> None:
        for f in self.folders:
            f.mkdir(parents=True, exist_ok=True)
        try:
            from watchdog.events import FileSystemEventHandler
            from watchdog.observers import Observer
            outer = self

            class H(FileSystemEventHandler):
                def on_created(self, e):
                    if not e.is_directory: outer.submit(Path(e.src_path))
                def on_moved(self, e):                       # browsers rename .crdownload -> final name
                    if not e.is_directory: outer.submit(Path(e.dest_path))
            self.obs = Observer()
            for f in self.folders:
                self.obs.schedule(H(), str(f), recursive=False)
            self.obs.daemon = True
            self.obs.start()
        except Exception as exc:
            print(f"[scanner] folder watching unavailable: {exc}")
        threading.Thread(target=lambda: [self.work_once() for _ in iter(lambda: not self._stop.is_set(), False)], name="vanta-scanner", daemon=True).start()

    def stop(self) -> None:
        self._stop.set()


SKIP_DIRS = ("c:\\windows", "c:\\program files\\windowsapps", "/usr", "/bin", "/sbin", "/lib", "/opt/pw-browsers", "/system", "/library", "/proc")


class Sweeper:
    """Quietly checks the program file behind every running process (once per file version), so even apps that did not
    come through the browser get looked at. Low priority: one file at a time with a pause between."""
    def __init__(self, scanner: Scanner, on_result: Callable[[dict], None], lister=None, interval: float = 300.0, pause: float = 0.5) -> None:
        import psutil
        self.scanner, self.on_result, self.interval, self.pause = scanner, on_result, interval, pause
        self.lister = lister or (lambda: [p.info.get("exe") for p in psutil.process_iter(["exe"])])
        self.done: set[tuple] = set()

    def sweep_once(self, sleep: Callable[[float], None] = time.sleep) -> int:
        n = 0
        for exe in {e for e in self.lister() if e}:
            if exe.lower().startswith(SKIP_DIRS):
                continue
            try:
                st = Path(exe).stat()
            except OSError:
                continue
            key = (exe, st.st_mtime, st.st_size)
            if key in self.done or st.st_size > 500 * 1024 * 1024:
                continue
            self.done.add(key)
            try:
                self.on_result(self.scanner.scan(Path(exe), explain=False))
                n += 1
            except Exception as exc:
                print(f"[sweep] {exe}: {exc}")
            sleep(self.pause)
        return n

    def start(self) -> None:
        def loop():
            time.sleep(20)                                   # let VANTA finish starting first
            while True:
                self.sweep_once()
                time.sleep(self.interval)
        threading.Thread(target=loop, name="vanta-sweep", daemon=True).start()
