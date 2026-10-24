"""Threat response. Nothing here ever deletes: files are moved to quarantine (restorable) and programs are asked to stop.
Every action goes propose -> you approve -> run, and each step is logged."""
from __future__ import annotations

import hashlib
import json
import os
import shutil
import time
import uuid
from pathlib import Path
from typing import Callable, Optional

import psutil

from .audit import AuditLog

QUARANTINE = Path.home() / ".vanta" / "quarantine"
# Never touched, even with approval: operating-system locations and core programs.
PROTECTED_DIRS = ("c:\\windows", "c:\\program files", "c:\\program files (x86)", "/usr", "/bin", "/sbin", "/etc", "/lib", "/boot", "/system", "/library", "/applications")
PROTECTED_NAMES = {"system", "system idle process", "registry", "smss.exe", "csrss.exe", "wininit.exe", "winlogon.exe", "services.exe", "lsass.exe",
                   "svchost.exe", "explorer.exe", "dwm.exe", "init", "systemd", "launchd", "kernel_task"}
RISK = {"quarantine": "medium", "end_process": "medium", "restore": "low"}


class Refused(Exception):
    """Raised when an action is not allowed. The message is written for the user."""


class Guardian:
    def __init__(self, audit: AuditLog, qdir: Path = QUARANTINE, own_pids: Optional[set[int]] = None,
                 ttl: int = 3600, clock: Callable[[], float] = time.time, pid_info=None, terminate=None) -> None:
        self.audit, self.qdir, self.ttl, self.clock = audit, Path(qdir), ttl, clock
        self.own = {os.getpid(), os.getppid()} | set(own_pids or ())
        self.pending: dict[str, dict] = {}
        self._info = pid_info or self._psutil_info
        self._terminate = terminate or self._psutil_terminate
        self.qdir.mkdir(parents=True, exist_ok=True)

    # ── proposals ─────────────────────────────────────────────────────────
    def propose(self, kind: str, target: dict, reason: str, evidence: Optional[dict] = None) -> dict:
        """Create a request for your approval. Validates now so you are never asked to approve something that can't run."""
        if kind not in RISK:
            raise Refused("I don't know how to do that.")
        self._check(kind, target)
        for p in self.pending.values():      # one open proposal per target
            if p["kind"] == kind and p["target"] == target and self.clock() - p["ts"] < self.ttl:
                return p
        prop = {"id": uuid.uuid4().hex[:10], "kind": kind, "target": target, "reason": reason, "evidence": evidence or {},
                "risk": RISK[kind], "ts": self.clock(), "state": "pending"}
        self.pending[prop["id"]] = prop
        self.audit.add("proposed", prop["id"], kind=kind, target=target, reason=reason)
        return prop

    def deny(self, pid: str, who: str = "you") -> bool:
        p = self.pending.pop(pid, None)
        if p:
            self.audit.add("denied", pid, kind=p["kind"], target=p["target"], by=who)
        return bool(p)

    def approve(self, prop_id: str, who: str = "you") -> dict:
        p = self.pending.get(prop_id)
        if not p:
            raise Refused("That request has already been handled or expired.")
        if self.clock() - p["ts"] > self.ttl:
            self.pending.pop(prop_id, None)
            self.audit.add("expired", prop_id, kind=p["kind"], target=p["target"])
            raise Refused("That request is too old to act on safely. I'll ask again if it's still a problem.")
        self.audit.add("approved", prop_id, kind=p["kind"], target=p["target"], by=who)
        try:
            self._check(p["kind"], p["target"])        # re-check: things change between asking and acting
            result = getattr(self, "_do_" + p["kind"])(p["target"])
        except Refused as exc:
            self.pending.pop(prop_id, None)
            self.audit.add("failed", prop_id, error=str(exc))
            raise
        except Exception as exc:
            self.pending.pop(prop_id, None)
            self.audit.add("failed", prop_id, error=str(exc))
            raise Refused(f"That didn't work: {exc}") from exc
        self.pending.pop(prop_id, None)
        self.audit.add("done", prop_id, kind=p["kind"], result=result)
        return result

    # ── safety checks ─────────────────────────────────────────────────────
    def _check(self, kind: str, t: dict) -> None:
        if kind == "quarantine":
            f = Path(t.get("path", ""))
            if not f.is_file() or f.is_symlink():
                raise Refused("That file isn't there any more, or isn't a regular file.")
            low = str(f.resolve()).lower()
            if any(low.startswith(d) for d in PROTECTED_DIRS) or str(self.qdir.resolve()).lower() in low:
                raise Refused("That file is part of the operating system or already quarantined, so I won't touch it.")
        elif kind == "end_process":
            info = self._info(int(t.get("pid", 0)))
            if not info:
                raise Refused("That program has already closed.")
            if int(t["pid"]) in self.own or info["pid"] in self.own:
                raise Refused("That's VANTA itself, so I won't stop it.")
            if info["name"].lower() in PROTECTED_NAMES:
                raise Refused(f"{info['name']} is part of the operating system. Stopping it could crash your computer.")
            if t.get("name") and info["name"].lower() != str(t["name"]).lower():
                raise Refused("That process id now belongs to a different program, so I won't stop it.")
            if t.get("created") and abs(float(info.get("created") or 0) - float(t["created"])) > 2:
                raise Refused("That process id was reused by a different program, so I won't stop it.")
        elif kind == "restore":
            if not (self.qdir / t.get("id", "x") / "meta.json").exists():
                raise Refused("I can't find that quarantined file.")

    # ── actions ───────────────────────────────────────────────────────────
    def _do_quarantine(self, t: dict) -> dict:
        src = Path(t["path"]).resolve()
        qid = uuid.uuid4().hex[:10]
        d = self.qdir / qid
        d.mkdir(parents=True)
        h = hashlib.sha256()
        with open(src, "rb") as fh:
            for chunk in iter(lambda: fh.read(1 << 20), b""):
                h.update(chunk)
        shutil.move(str(src), str(d / "file.bin"))        # inert name: it can no longer be double-clicked or run
        try:
            os.chmod(d / "file.bin", 0o000)
        except OSError:
            pass
        (d / "meta.json").write_text(json.dumps({"id": qid, "original": str(src), "sha256": h.hexdigest(), "ts": self.clock()}))
        return {"quarantine_id": qid, "sha256": h.hexdigest(), "original": str(src)}

    def _do_restore(self, t: dict) -> dict:
        d = self.qdir / t["id"]
        meta = json.loads((d / "meta.json").read_text())
        dest = Path(meta["original"])
        if dest.exists():
            raise Refused("Something already exists at the original location.")
        os.chmod(d / "file.bin", 0o600)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(d / "file.bin"), str(dest))
        shutil.rmtree(d, ignore_errors=True)
        return {"restored": str(dest)}

    def _do_end_process(self, t: dict) -> dict:
        self._terminate(int(t["pid"]))
        return {"ended": t.get("name"), "pid": t["pid"]}

    def quarantined(self) -> list[dict]:
        out = []
        for m in self.qdir.glob("*/meta.json"):
            try:
                out.append(json.loads(m.read_text()))
            except Exception:
                pass
        return sorted(out, key=lambda x: x["ts"], reverse=True)

    # ── process helpers ───────────────────────────────────────────────────
    @staticmethod
    def _psutil_info(pid: int) -> Optional[dict]:
        try:
            p = psutil.Process(pid)
            return {"pid": p.pid, "name": p.name(), "created": p.create_time()}
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            return None

    @staticmethod
    def _psutil_terminate(pid: int) -> None:
        p = psutil.Process(pid)
        p.terminate()                                     # polite first; the program can clean up
        try:
            p.wait(5)
        except psutil.TimeoutExpired:
            p.kill()
