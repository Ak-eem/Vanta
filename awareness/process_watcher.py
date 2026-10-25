"""Process watcher: read-only threat watching for running processes.

Learns what is normal on this machine (baseline), then flags oddities:
  * a program running from a temp/download folder
  * a non-baseline program pinning the CPU for a long time (runaway / miner)
  * a new port listening for connections
It only observes and alerts. Containment (suspend/kill) belongs to a later,
approval-gated phase.
"""
from __future__ import annotations

import json
import logging
import threading
import time
from pathlib import Path
from typing import Callable, Optional

import psutil

from .events import ActivityLog

logger = logging.getLogger(__name__)
BASELINE_PATH = Path.home() / ".vanta" / "proc_baseline.json"
SUSPECT_DIRS = ("\\temp\\", "/tmp/", "\\appdata\\local\\temp", "\\downloads\\", "/downloads/", "\\$recycle.bin")
SYSTEM_QUIET = {"system", "system idle process", "registry", "idle"}

Alert = Callable[..., None]  # severity, title, message, source, evidence(dict, optional)


def _list_procs() -> list[dict]:
    out = []
    for p in psutil.process_iter(["pid", "name", "exe", "ppid", "cpu_percent", "create_time"]):
        try:
            out.append(dict(p.info))
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue
    return out


def _list_ports() -> set[int]:
    try:
        return {c.laddr.port for c in psutil.net_connections(kind="inet") if c.status == psutil.CONN_LISTEN}
    except (psutil.AccessDenied, OSError):
        return set()


class ProcessWatcher:
    def __init__(self, log: ActivityLog, alert: Optional[Alert] = None, interval: float = 5.0,
                 learn_seconds: float = 3 * 86400, baseline_path: Path = BASELINE_PATH,
                 cpu_limit: float = 85.0, cpu_polls: int = 6,
                 lister: Callable[[], list] = _list_procs, port_lister: Callable[[], set] = _list_ports,
                 clock: Callable[[], float] = time.time) -> None:
        self.log, self.alert, self.interval = log, alert, interval
        self.learn_seconds, self.cpu_limit, self.cpu_polls = learn_seconds, cpu_limit, cpu_polls
        self.lister, self.port_lister, self.clock = lister, port_lister, clock
        self.baseline_path = baseline_path
        self.baseline: dict = {"started": clock(), "names": []}
        try:
            self.baseline = json.loads(baseline_path.read_text())
        except (OSError, ValueError):
            pass
        self._names = set(self.baseline["names"])
        self._seen_pids: set[int] = set()
        self._hot: dict[int, int] = {}
        self._ports: Optional[set[int]] = None
        self._alerted: dict[tuple, float] = {}
        self._stop = threading.Event()
        self._thread: Optional[threading.Thread] = None
        self._first = True

    @property
    def learning(self) -> bool:
        return self.clock() - self.baseline["started"] < self.learn_seconds

    def _raise(self, severity: str, title: str, msg: str, key: tuple, evidence: Optional[dict] = None) -> None:
        now = self.clock()
        last = self._alerted.get(key)
        if last is not None and now - last < 3600:   # once per hour per finding
            return
        self._alerted[key] = now
        self.log.add("process", "alert", app=key[1], title=title, detail={"severity": severity, "message": msg})
        if self.alert:
            self.alert(severity, title, msg, "process", evidence)

    def tick(self) -> None:
        procs = self.lister()
        learning = self.learning
        live = set()
        for p in procs:
            pid, name = p["pid"], (p.get("name") or "").lower()
            live.add(pid)
            exe = (p.get("exe") or "").lower()
            if pid not in self._seen_pids:
                self._seen_pids.add(pid)
                if not self._first and name not in SYSTEM_QUIET:
                    self.log.add("process", "process_start", app=name, title=exe[-80:])
                if learning:
                    self._names.add(name)
                if exe and any(d in exe for d in SUSPECT_DIRS) and name not in self._names:
                    self._raise("medium", f"Unfamiliar program running from {Path(exe).parent.name or 'temp'}",
                                f"{name} is running from {exe}. Programs launched from temp or download folders are a common malware pattern.",
                                ("path", name), {"pid": pid, "name": name, "exe": p.get("exe") or "", "created": p.get("create_time")})
            cpu = p.get("cpu_percent") or 0.0
            if cpu >= self.cpu_limit and name not in self._names and name not in SYSTEM_QUIET:
                self._hot[pid] = self._hot.get(pid, 0) + 1
                if self._hot[pid] >= self.cpu_polls:
                    self._raise("medium", f"{name} is using {int(cpu)}% CPU",
                                f"{name} (pid {pid}) has been pinning the CPU and isn't part of your normal programs. Could be a runaway process or a miner.",
                                ("cpu", name), {"pid": pid, "name": name, "exe": p.get("exe") or "", "created": p.get("create_time")})
            else:
                self._hot.pop(pid, None)
        self._seen_pids &= live
        for pid in list(self._hot):
            if pid not in live:
                del self._hot[pid]

        ports = self.port_lister()
        if self._ports is not None and not learning:
            new = ports - self._ports
            for port in sorted(new):
                self._raise("low", f"New port {port} is listening",
                            f"Something started accepting connections on port {port}.", ("port", str(port)))
        self._ports = ports if self._ports is None or learning else (self._ports | ports)
        self._first = False
        self._save()

    def _save(self) -> None:
        self.baseline["names"] = sorted(self._names)
        try:
            self.baseline_path.parent.mkdir(parents=True, exist_ok=True)
            self.baseline_path.write_text(json.dumps(self.baseline))
        except OSError:
            pass

    def start(self) -> None:
        if self._thread and self._thread.is_alive():
            return
        self._stop.clear()
        def loop():
            while not self._stop.is_set():
                try:
                    if self.log.privacy.source_on("process"):
                        self.tick()
                except Exception as exc:
                    logger.warning("process watcher tick failed: %s", exc)
                self._stop.wait(self.interval)
        self._thread = threading.Thread(target=loop, name="vanta-proc-watch", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop.set()
