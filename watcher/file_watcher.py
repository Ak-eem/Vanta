"""
File + Git watcher — monitors configured project paths for merge
conflicts, uncommitted work sitting too long, and (optionally) test
failures. Silent on success by design — it only speaks up when
something actually needs attention.
"""

import shlex
import subprocess
import time
import threading
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

UNCOMMITTED_THRESHOLD_HOURS = 4
GIT_CHECK_INTERVAL_SECONDS = 300  # 5 minutes
ALLOWED_TEST_EXECUTABLES = {"python", "python3", "pytest", "node", "npm"}


class _DebouncedHandler(FileSystemEventHandler):
    """Watchdog fires multiple events per save on some editors/OSes —
    this collapses repeats within a short window.

    on_modified used to end here with no alert ever firing — the callback
    wasn't even wired to the constructor (FileWatcher.start() built this
    with zero args), so there was no path from a file change to on_alert
    regardless of what the body did. Fixed to actually connect the two,
    and to alert on real signal (a burst of rapid saves to one file within
    a short window) rather than every single save, which would be noise —
    that part of the original design comment was right."""

    def __init__(self, on_alert, source: str, debounce_seconds: float = 3,
                 burst_threshold: int = 15, burst_window_seconds: float = 600):
        self.debounce_seconds = debounce_seconds
        self.on_alert = on_alert
        self.source = source
        self.burst_threshold = burst_threshold
        self.burst_window_seconds = burst_window_seconds
        self._last_fired: dict[str, float] = {}
        self._burst_start: dict[str, float] = {}
        self._burst_count: dict[str, int] = {}

    def on_modified(self, event):
        if event.is_directory:
            return
        now = time.time()
        if now - self._last_fired.get(event.src_path, 0) < self.debounce_seconds:
            return
        self._last_fired[event.src_path] = now

        window_start = self._burst_start.get(event.src_path)
        if window_start is None or now - window_start > self.burst_window_seconds:
            self._burst_start[event.src_path] = now
            self._burst_count[event.src_path] = 1
            return

        self._burst_count[event.src_path] = self._burst_count.get(event.src_path, 0) + 1
        if self._burst_count[event.src_path] == self.burst_threshold:
            self.on_alert(
                "low", "High save frequency",
                f"{Path(event.src_path).name}: {self.burst_threshold}+ saves in "
                f"{int(self.burst_window_seconds / 60)} min — worth a look if unintentional",
                source=self.source,
            )
            # Reset so it can fire again on a later burst instead of going
            # silent for the rest of the window once past the threshold.
            self._burst_start[event.src_path] = now
            self._burst_count[event.src_path] = 0


class FileWatcher:
    def __init__(self, projects: list[dict], on_alert):
        """
        projects: [{"path": str, "test_command": str|None, "test_interval_min": int}]
        on_alert: callback(severity, title, message, source)
        """
        self.projects = [p for p in projects if Path(p.get("path", "")).is_dir()]
        self.on_alert = on_alert
        self._observer = Observer()
        self._uncommitted_since: dict[str, float] = {}
        self._stop = threading.Event()

    def start(self):
        for proj in self.projects:
            self._observer.schedule(
                _DebouncedHandler(self.on_alert, source=proj["path"]),
                proj["path"], recursive=True,
            )
        if self.projects:
            self._observer.start()
        threading.Thread(target=self._git_loop, daemon=True).start()
        threading.Thread(target=self._test_loop, daemon=True).start()

    def stop(self):
        self._stop.set()
        if self.projects:
            self._observer.stop()
            self._observer.join()

    # ── Git monitoring ──────────────────────────────────────────────────────
    def _git_loop(self):
        while not self._stop.is_set():
            for proj in self.projects:
                self._check_git(proj["path"])
            self._stop.wait(GIT_CHECK_INTERVAL_SECONDS)

    def _check_git(self, repo_path: str):
        if not (Path(repo_path) / ".git").exists():
            return
        try:
            result = subprocess.run(
                ["git", "status", "--porcelain"],
                cwd=repo_path, capture_output=True, text=True, timeout=10,
            )
        except Exception:
            return  # git not installed or not a repo — skip quietly

        lines = [l for l in result.stdout.splitlines() if l.strip()]
        if not lines:
            self._uncommitted_since.pop(repo_path, None)
            return

        conflicts = [l for l in lines if l.startswith("UU")]
        if conflicts:
            self.on_alert(
                "high", "Merge conflict",
                f"{len(conflicts)} file(s) unresolved in {Path(repo_path).name}",
                source=repo_path,
            )
            return

        first_seen = self._uncommitted_since.setdefault(repo_path, time.time())
        hours = (time.time() - first_seen) / 3600
        if hours >= UNCOMMITTED_THRESHOLD_HOURS:
            self.on_alert(
                "medium", "Uncommitted changes",
                f"{len(lines)} file(s) uncommitted for {hours:.1f}h in {Path(repo_path).name}",
                source=repo_path,
            )

    # ── Optional test/build monitoring (opt-in per project) ────────────────
    def _test_loop(self):
        last_run: dict[str, float] = {}
        while not self._stop.is_set():
            now = time.time()
            for proj in self.projects:
                cmd = proj.get("test_command")
                if not cmd:
                    continue
                interval = proj.get("test_interval_min", 15) * 60
                if now - last_run.get(proj["path"], 0) >= interval:
                    self._run_test(proj)
                    last_run[proj["path"]] = now
            self._stop.wait(60)

    def _run_test(self, proj: dict):
        project_path = proj["path"]
        command = proj.get("test_command")
        try:
            argv = shlex.split(command or "")
        except (TypeError, ValueError) as exc:
            self.on_alert(
                "high",
                "Invalid test command",
                f"{Path(project_path).name}: malformed command ({exc})",
                source=project_path,
            )
            return

        if not argv:
            self.on_alert(
                "high",
                "Invalid test command",
                f"{Path(project_path).name}: test command is empty",
                source=project_path,
            )
            return

        executable = Path(argv[0]).name
        if executable not in ALLOWED_TEST_EXECUTABLES:
            allowed = ", ".join(sorted(ALLOWED_TEST_EXECUTABLES))
            self.on_alert(
                "high",
                "Invalid test command",
                f"{Path(project_path).name}: executable '{executable}' is not allowed; "
                f"allowed executables: {allowed}",
                source=project_path,
            )
            return

        try:
            result = subprocess.run(
                argv,
                shell=False,
                cwd=project_path,
                capture_output=True,
                text=True,
                timeout=120,
            )
            if result.returncode != 0:
                err = (result.stderr or result.stdout)[:200]
                self.on_alert("high", "Tests failing",
                              f"{Path(project_path).name}: {err}", source=project_path)
        except subprocess.TimeoutExpired:
            self.on_alert("medium", "Test run timed out",
                          Path(project_path).name, source=project_path)
        except Exception:
            pass