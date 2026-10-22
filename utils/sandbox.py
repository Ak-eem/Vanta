"""Best-effort sandbox for running code VANTA generated.

What it does on every OS: scrubbed environment (no API keys or tokens leak into
generated code), a fixed working directory, wall-clock timeout that kills the
whole process tree, and an output cap.
Extra on Linux/macOS: CPU/memory/file-size/process limits, and no network via
`unshare -rn` when the kernel allows it.
Windows has no equivalent of those without containers, so network access is NOT
blocked there; for stronger isolation run VANTA's code runs inside Docker/WSL.
`isolation_report()` says honestly what is in force.
"""
from __future__ import annotations

import os
import shutil
import subprocess
import sys
from dataclasses import dataclass, field
from typing import Optional, Sequence

import psutil

MAX_OUTPUT = 20_000
_KEEP_ENV = {"PATH", "SYSTEMROOT", "WINDIR", "COMSPEC", "PATHEXT", "TEMP", "TMP", "LANG", "LC_ALL", "PYTHONIOENCODING"}
_net_ok: Optional[bool] = None


@dataclass
class SandboxResult:
    returncode: int
    stdout: str = ""
    stderr: str = ""
    timed_out: bool = False
    notes: list[str] = field(default_factory=list)


def clean_env(cwd: str) -> dict[str, str]:
    env = {k: v for k, v in os.environ.items() if k.upper() in _KEEP_ENV}
    env.update({"HOME": cwd, "USERPROFILE": cwd, "PYTHONDONTWRITEBYTECODE": "1", "PYTHONIOENCODING": "utf-8"})
    return env


def _unshare_works() -> bool:
    global _net_ok
    if _net_ok is None:
        _net_ok = False
        if sys.platform != "win32" and shutil.which("unshare"):
            try:
                _net_ok = subprocess.run(["unshare", "-rn", "true"], capture_output=True, timeout=5).returncode == 0
            except Exception:
                _net_ok = False
    return _net_ok


def isolation_report() -> dict:
    posix = sys.platform != "win32"
    return {"clean_env": True, "timeout": True, "output_cap": True,
            "resource_limits": posix, "network_blocked_by_default": _unshare_works(),
            "platform": sys.platform}


def _limits(timeout: float):
    def apply():
        import resource
        resource.setrlimit(resource.RLIMIT_CPU, (int(timeout) + 5, int(timeout) + 10))
        resource.setrlimit(resource.RLIMIT_FSIZE, (200 * 2**20, 200 * 2**20))
        resource.setrlimit(resource.RLIMIT_AS, (2 * 2**30, 2 * 2**30))
        os.setsid()
    return apply


def _kill_tree(proc: subprocess.Popen) -> None:
    try:
        parent = psutil.Process(proc.pid)
        for ch in parent.children(recursive=True):
            try: ch.kill()
            except psutil.Error: pass
        parent.kill()
    except psutil.Error:
        pass


def run(argv: Sequence[str], cwd: str, timeout: float = 30, allow_network: bool = False) -> SandboxResult:
    cmd = list(argv)
    notes: list[str] = []
    if not allow_network:
        if _unshare_works():
            cmd = ["unshare", "-rn"] + cmd
        else:
            notes.append("network not blocked on this system")
    kw: dict = {}
    if sys.platform == "win32":
        kw["creationflags"] = 0x08000000  # CREATE_NO_WINDOW
    else:
        kw["preexec_fn"] = _limits(timeout)
    proc = subprocess.Popen(cmd, cwd=cwd, env=clean_env(cwd), shell=False, text=True,
                            stdin=subprocess.DEVNULL, stdout=subprocess.PIPE, stderr=subprocess.PIPE, **kw)
    try:
        out, err = proc.communicate(timeout=timeout)
        return SandboxResult(proc.returncode, out[:MAX_OUTPUT], err[:MAX_OUTPUT], False, notes)
    except subprocess.TimeoutExpired:
        _kill_tree(proc)
        try:
            out, err = proc.communicate(timeout=2)
        except Exception:
            out, err = "", ""
        return SandboxResult(-9, (out or "")[:MAX_OUTPUT], (err or "")[:MAX_OUTPUT], True, notes)
