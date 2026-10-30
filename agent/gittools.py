"""Git and GitHub for the agent. Uses the git login already on this computer (git credential manager, ssh key, or `gh auth login`),
so VANTA never sees or stores a token. Every commit and push asks you first. No force-push, ever. Secret files are never committed."""
from __future__ import annotations

import fnmatch
import os
import re
import shutil
import subprocess
from pathlib import Path

from .permissions import SECRET_DIRS, SECRET_GLOBS, Denied

PROTECTED_BRANCHES = {"main", "master", "production", "prod"}


def _git(root: Path, *args: str, timeout: int = 90) -> tuple[int, str]:
    env = {**os.environ, "GIT_TERMINAL_PROMPT": "0", "GCM_INTERACTIVE": "never"}   # fail with a message instead of hanging on a password prompt
    r = subprocess.run(["git", *args], cwd=str(root), capture_output=True, text=True, timeout=timeout, env=env)
    return r.returncode, (r.stdout + r.stderr).strip()


def _is_secret(rel: str) -> bool:
    parts = Path(rel).parts
    return any(p in SECRET_DIRS for p in parts) or any(fnmatch.fnmatch(parts[-1].lower(), g) for g in SECRET_GLOBS)


def _clean_url(u: str) -> str:
    return re.sub(r"//[^/@]+@", "//", u)       # never show a token embedded in a URL


def _changes(root: Path) -> list[tuple[str, str]]:
    rc, out = _git(root, "status", "--porcelain", "-uall")
    rows = []
    for line in out.splitlines():
        if len(line) > 3:
            path = line[3:].split(" -> ")[-1].strip().strip('"')
            rows.append((line[:2], path))
    return rows


def git_status(ag, a) -> str:
    rc, out = _git(ag.root, "rev-parse", "--abbrev-ref", "HEAD")
    if rc != 0:
        return "This folder isn't a git project."
    ch = _changes(ag.root)
    _, rem = _git(ag.root, "remote", "-v")
    lines = [f"branch: {out}", "remote: " + (_clean_url(rem.splitlines()[0]) if rem else "(none)")]
    lines += [f"{c.strip() or '?'} {p}{'  (secret: will never be committed)' if _is_secret(p) else ''}" for c, p in ch[:60]]
    return "\n".join(lines) + ("" if ch else "\nno changes")


def git_commit(ag, a) -> str:
    msg = " ".join(str(a.get("message", "")).split())[:200]
    if not msg:
        return "A commit needs a message."
    ch = _changes(ag.root)
    ok = [p for _, p in ch if not _is_secret(p)]
    held = [p for _, p in ch if _is_secret(p)]
    if not ok:
        return "Nothing to commit." + (f" These look like secrets, so I left them out: {', '.join(held)}." if held else "")
    detail = f"Message: {msg}\nFiles ({len(ok)}): {', '.join(ok[:12])}{'…' if len(ok) > 12 else ''}" + (f"\nLeft out (secrets): {', '.join(held)}" if held else "")
    if not ag.approve("Commit changes", detail):
        raise Denied("You said no to that commit.")
    rc, out = _git(ag.root, "add", "--", *ok)
    if rc != 0:
        return f"Couldn't stage files: {out[:300]}"
    rc, out = _git(ag.root, "commit", "-m", msg)
    return ("Committed. " if rc == 0 else "Commit failed: ") + out[:300]


def git_push(ag, a) -> str:
    root = ag.root
    rc, branch = _git(root, "rev-parse", "--abbrev-ref", "HEAD")
    if rc != 0 or branch == "HEAD":
        return "No branch to push (not a git project, or detached)."
    remote = str(a.get("remote") or "origin")
    if not re.fullmatch(r"[\w.-]+", remote):
        return "That remote name isn't valid."
    rc, url = _git(root, "remote", "get-url", remote)
    if rc != 0:
        return f"There is no remote called '{remote}'. Add one first (git remote add)."
    rc2, ahead = _git(root, "rev-list", "--count", f"{remote}/{branch}..HEAD")
    if rc2 != 0:                                   # branch is new on the remote: count what no remote has yet
        _, ahead = _git(root, "rev-list", "--count", "HEAD", "--not", f"--remotes={remote}")
    n = ahead if ahead.isdigit() else "some"
    warn = f"\nThis is a main branch. Everyone who uses this repo gets these changes." if branch in PROTECTED_BRANCHES else ""
    if not ag.approve("Push to GitHub", f"Send {n} commit(s) on '{branch}' to {_clean_url(url)}.{warn}\n(No force-push. Nothing is deleted on the remote.)"):
        raise Denied("You said no to that push.")
    rc, out = _git(root, "push", "-u", remote, branch, timeout=180)
    if rc != 0:
        hint = " It looks like you aren't signed in. Run `gh auth login` (or set up git credentials) in a terminal once, then ask me again." if re.search(r"auth|credential|denied|403|could not read", out, re.I) else ""
        return f"Push failed: {out[-300:]}{hint}"
    return f"Pushed '{branch}' to {_clean_url(url)}."


def github_pr(ag, a) -> str:
    if not shutil.which("gh"):
        return "The GitHub command line (gh) isn't installed. Install it from cli.github.com and run `gh auth login`."
    title, body = str(a.get("title", "")).strip()[:200], str(a.get("body", "")).strip()[:3000]
    if not title:
        return "A pull request needs a title."
    rc, branch = _git(ag.root, "rev-parse", "--abbrev-ref", "HEAD")
    if branch in PROTECTED_BRANCHES:
        return "You're on the main branch. Make a branch first, push it, then open the request."
    if not ag.approve("Open a pull request", f"Title: {title}\nFrom branch: {branch}"):
        raise Denied("You said no to that.")
    r = subprocess.run(["gh", "pr", "create", "--title", title, "--body", body or title], cwd=str(ag.root), capture_output=True, text=True, timeout=90,
                       env={**os.environ, "GH_PROMPT_DISABLED": "1"})
    return (r.stdout + r.stderr).strip()[-400:] or "Done."
