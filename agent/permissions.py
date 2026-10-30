"""What the agent may do. Four modes, like the public Claude Code design: plan (read only), ask (confirm edits and commands),
accept_edits (edits inside the project are fine, commands still ask), auto (rules decide; risky things still ask)."""
from __future__ import annotations

import fnmatch
import ipaddress
import re
import shlex
import socket
from pathlib import Path
from typing import Optional
from urllib.parse import urlparse

MODES = ("plan", "ask", "accept_edits", "auto")
READ_TOOLS = {"read_file", "list_files", "grep", "web_search", "web_fetch", "note", "ask_user", "subagent", "task_create", "task_update", "task_list", "enter_plan_mode",
              "exit_plan_mode", "code_intel", "bg_output", "schedule_list", "skill", "notify", "git_status"}
# Always ask, never auto-approved. The tool itself shows you what it is about to do.
ASK_TOOLS = {"bg_start", "bg_stop", "enter_worktree", "exit_worktree", "schedule_create", "schedule_delete", "git_commit", "git_push", "github_pr"}
EDIT_TOOLS = {"write_file", "edit_file", "notebook_edit"}
SECRET_GLOBS = (".env", ".env.*", "*.pem", "*.key", "id_rsa*", "id_ed25519*", "*.pfx", "*.p12", "credentials*", "secrets*", ".npmrc", ".pypirc", "*.kdbx", "wallet*.dat")
SECRET_DIRS = {".ssh", ".aws", ".gnupg", ".kube", ".azure"}
NEVER_RUN = {"rm", "rmdir", "del", "erase", "format", "diskpart", "shutdown", "reboot", "reg", "regedit", "netsh", "sc", "taskkill", "kill", "pkill", "chmod",
             "chown", "dd", "mkfs", "curl", "wget", "powershell", "pwsh", "cmd", "bash", "sh", "zsh", "sudo", "su", "ssh", "scp", "nc", "ncat", "certutil", "bitsadmin", "schtasks"}
SAFE_AUTO = {("python", "-m", "pytest"), ("python3", "-m", "pytest"), ("pytest",), ("npm", "test"), ("npm", "run", "test"), ("npm", "run", "lint"), ("npm", "run", "build"),
             ("go", "test"), ("cargo", "test"), ("git", "status"), ("git", "diff"), ("git", "log"), ("git", "branch"), ("ls",), ("dir",), ("python", "--version"), ("node", "--version")}


class Denied(Exception):
    """Plain-language reason, shown to the model and to you."""


def resolve_inside(root: Path, rel: str) -> Path:
    p = (root / rel).resolve() if not Path(rel).is_absolute() else Path(rel).resolve()
    try:
        p.relative_to(root.resolve())
    except ValueError:
        raise Denied("That path is outside the project folder.")
    return p


def check_secret(p: Path) -> None:
    if any(part in SECRET_DIRS for part in p.parts) or any(fnmatch.fnmatch(p.name.lower(), g) for g in SECRET_GLOBS):
        raise Denied("That file looks like it holds passwords or keys, so I never read or change it.")


def is_public_url(url: str, resolver=socket.getaddrinfo) -> bool:
    u = urlparse(url)
    if u.scheme not in ("http", "https") or not u.hostname:
        return False
    try:
        for fam, _, _, _, sa in resolver(u.hostname, None):
            ip = ipaddress.ip_address(sa[0])
            if ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved or ip.is_multicast:
                return False
    except Exception:
        return False
    return True


def split_command(cmd: str) -> list[str]:
    try:
        argv = shlex.split(cmd, posix=True)
    except ValueError:
        raise Denied("I couldn't read that command.")
    if not argv or re.search(r"[|;&<>`$]", cmd):
        raise Denied("Commands with pipes, redirects or chaining aren't allowed. Run one simple command at a time.")
    if Path(argv[0]).name.lower().removesuffix(".exe") in NEVER_RUN:
        raise Denied(f"I don't run '{argv[0]}'. It can damage things or reach the network.")
    return argv


def decide(mode: str, tool: str, args: dict) -> str:
    """Returns 'allow', 'ask' or raises Denied."""
    if mode not in MODES:
        mode = "ask"
    if tool in READ_TOOLS:
        return "allow"
    if mode == "plan":
        raise Denied("I'm in plan mode, so I can look but not change anything. Switch modes to let me make changes.")
    if tool in ASK_TOOLS:
        return "ask"
    if tool in EDIT_TOOLS:
        return "allow" if mode in ("accept_edits", "auto") else "ask"
    if tool == "run_command":
        argv = split_command(str(args.get("command", "")))
        if mode == "auto" and any(tuple(a.lower() for a in argv[:len(s)]) == s for s in SAFE_AUTO):
            return "allow"
        return "ask"
    raise Denied(f"Unknown tool {tool}.")
