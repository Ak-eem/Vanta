"""Two-brain build: a strong model plans and reviews, a fast model writes the files.

blueprint (strong, short) -> files (fast, in parallel) -> review (strong, patches only)
-> checks -> fix rounds (strong patches). Everything is written inside one folder and can be undone.
"""
from __future__ import annotations

import re
import uuid
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from typing import Callable, Optional

from agent.checkpoints import Checkpoints, ROOT as CHECK_ROOT
from agent.permissions import Denied, check_secret, resolve_inside
from setups.guards import GuardError, ask_json, strip_fences

LLM = Callable[[list], str]

CHECKLIST = [
    "Login/auth: passwords hashed (never stored or compared in plain text), tokens are random and expire, never an email or id.",
    "Injection: database queries use parameters, user text is escaped before it is shown.",
    "Secrets: no keys or passwords in code the browser can see; they come from environment variables.",
    "Permissions: a user can only read or change their own data; check on the server, not only in the page.",
    "Payments: amounts are set and verified on the server; webhooks are signature-checked; secret keys stay server-side.",
    "Errors: no stack traces or internal details shown to visitors.",
    "Phone and data: small pages, lazy images, readable contrast, buttons large enough to tap.",
    "Placeholders: every invented phone number, address, price or claim is clearly marked for the owner to replace.",
]

BLUEPRINT_PROMPT = """You are the architect. Plan this build briefly (under 400 words). Reply with ONLY JSON:
{"summary": "one sentence", "files": [{"path": "index.html", "purpose": "what this file does"}], "rules": ["rules every file must follow, including security and design"]}
At most <<MAX>> files. Relative paths only. No secret or .env files. If users, logins or payments are involved, put the security rules in "rules".
Goal: <<GOAL>>"""

FILE_PROMPT = """You are the builder. Write the complete file `<<PATH>>`.
Purpose of this file: <<PURPOSE>>
Whole plan: <<SUMMARY>>
Other files in the project: <<OTHERS>>
Rules to follow: <<RULES>>
Reply with ONLY the file content. No explanation, no code fences. Mark invented details (phone numbers, addresses, prices) with the word PLACEHOLDER nearby.
Goal: <<GOAL>>"""

REVIEW_PROMPT = """You are the senior reviewer. Check the files below against this checklist and fix real problems only.
Checklist:
<<CHECKLIST>>

Plan: <<SUMMARY>>

Files:
<<FILES>>

Reply with ONLY JSON: {"verdict": "ok" or "changes", "issues": [{"severity": "high|medium|low", "path": "file", "find": "exact text copied from the file, appears once", "replace": "new text", "why": "short reason"}]}
Keep each patch small. Do not rewrite whole files. If everything is fine, verdict "ok" with an empty list."""

FIX_PROMPT = """These automatic checks failed:
<<FAILS>>

Files:
<<FILES>>

Reply with ONLY JSON in the same patch format: {"verdict": "changes", "issues": [{"severity": "high", "path": "file", "find": "exact text copied from the file, appears once", "replace": "new text", "why": "short reason"}]}"""


@dataclass
class Build:
    id: str
    goal: str
    root: Path
    summary: str = ""
    files: list = field(default_factory=list)
    stage: str = "starting"
    patches_applied: list = field(default_factory=list)
    patches_skipped: list = field(default_factory=list)
    failures: list = field(default_factory=list)
    rounds: int = 0
    status: str = "running"            # done | failed | stopped
    changed: list = field(default_factory=list)
    final: str = ""
    stop: bool = False


def _fill(template: str, **kw) -> str:
    for k, v in kw.items():
        template = template.replace(f"<<{k}>>", str(v))
    return template


def _safe_name(path: str) -> str:
    p = str(path).strip().replace("\\", "/").lstrip("/")
    if not p or ".." in p.split("/") or re.match(r"^[a-zA-Z]:", p):
        raise Denied("unsafe file path in plan")
    return p


# ── automatic checks (no model involved) ─────────────────────────────────
class _Refs(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.refs, self.meta, self.title, self.doctype, self._in_title = [], set(), False, False, False

    def handle_decl(self, decl):
        self.doctype = self.doctype or decl.lower().startswith("doctype")

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "meta" and a.get("name"):
            self.meta.add(a["name"].lower())
        if tag == "title":
            self._in_title = True
        for k in ("href", "src"):
            v = a.get(k)
            if v and not re.match(r"^(https?:|//|mailto:|tel:|#|data:|javascript:)", v, re.I):
                self.refs.append(v.split("#")[0].split("?")[0])

    def handle_data(self, data):
        if self._in_title and data.strip():
            self.title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False


_SECRET_RE = re.compile(r"(sk_live_[A-Za-z0-9]{8,}|sk_test_[A-Za-z0-9]{8,}|AIza[0-9A-Za-z_\-]{30,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|(?:secret|api[_-]?key|password)\s*[:=]\s*['\"][^'\"]{8,}['\"])", re.I)


def static_checks(root: Path) -> list[str]:
    """Plain checks that need no model: pages are well formed, links resolve, no secrets in the files."""
    fails = []
    for f in sorted(Path(root).rglob("*")):
        if not f.is_file() or f.stat().st_size > 2_000_000:
            continue
        rel = f.relative_to(root).as_posix()
        try:
            text = f.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        if _SECRET_RE.search(text):
            fails.append(f"{rel}: looks like it contains a secret key or password")
        if f.suffix.lower() in (".html", ".htm"):
            p = _Refs()
            try:
                p.feed(text)
            except Exception:
                fails.append(f"{rel}: could not be read as HTML")
                continue
            if not p.doctype:
                fails.append(f"{rel}: missing <!DOCTYPE html>")
            if "viewport" not in p.meta:
                fails.append(f"{rel}: missing the viewport meta tag, so it will look wrong on phones")
            if not p.title:
                fails.append(f"{rel}: missing a page title")
            for ref in p.refs:
                if ref and not (f.parent / ref).exists():
                    fails.append(f"{rel}: links to {ref}, which does not exist")
    return fails


# ── patches ──────────────────────────────────────────────────────────────
def _validate_blueprint(max_files: int):
    def v(d):
        if not isinstance(d, dict) or not isinstance(d.get("files"), list) or not d["files"]:
            return "I need a JSON object with a non-empty 'files' list."
        if len(d["files"]) > max_files:
            return f"Too many files; use at most {max_files}."
        for f in d["files"]:
            if not isinstance(f, dict) or "path" not in f:
                return "Each file needs a 'path'."
            try:
                check_secret(Path(_safe_name(f["path"])))
            except Denied as e:
                return f"{f['path']}: {e}"
        return None
    return v


def _validate_patches(d):
    if not isinstance(d, dict) or not isinstance(d.get("issues", []), list):
        return "I need a JSON object with an 'issues' list."
    for i in d.get("issues", []):
        if not isinstance(i, dict) or not all(k in i for k in ("path", "find", "replace")):
            return "Each issue needs 'path', 'find' and 'replace'."
    return None


class Builder:
    def __init__(self, strong: LLM, fast: LLM, base: Path, checkpoint_base: Path = CHECK_ROOT,
                 max_files: int = 8, workers: int = 3, max_rounds: int = 3,
                 on_stage: Optional[Callable[["Build"], None]] = None,
                 extra_checks: Optional[Callable[[Path], list]] = None) -> None:
        self.strong, self.fast = strong, fast
        self.base, self.checkpoint_base = Path(base).resolve(), checkpoint_base
        self.max_files, self.workers, self.max_rounds = max_files, workers, max_rounds
        self.on_stage, self.extra_checks = on_stage, extra_checks
        self.run: Optional[Build] = None
        self.cp: Optional[Checkpoints] = None

    def _tick(self, stage: str) -> None:
        self.run.stage = stage
        if self.on_stage:
            try:
                self.on_stage(self.run)
            except Exception:
                pass

    def rewind(self) -> list[str]:
        return self.cp.rewind() if self.cp else []

    def _write(self, rel: str, text: str) -> None:
        p = resolve_inside(self.run.root, _safe_name(rel))
        check_secret(p)
        self.cp.save(p)
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(text, encoding="utf-8")
        if rel not in self.run.changed:
            self.run.changed.append(rel)

    def _files_blob(self, cap: int = 26000) -> str:
        parts, used = [], 0
        for rel in self.run.files:
            p = self.run.root / rel
            if not p.exists():
                continue
            t = p.read_text(encoding="utf-8", errors="replace")
            room = max(1500, (cap - used) // max(1, len(self.run.files)))
            t = t if len(t) <= room else t[:room] + "\n…(shortened)"
            parts.append(f"=== {rel} ===\n{t}")
            used += len(t)
        return "\n\n".join(parts)

    def _apply(self, issues: list) -> int:
        n = 0
        for i in issues:
            try:
                rel = _safe_name(i["path"])
                p = resolve_inside(self.run.root, rel)
                check_secret(p)
                if not p.exists():
                    raise Denied("file does not exist")
                text = p.read_text(encoding="utf-8")
                find, rep = str(i["find"]), str(i["replace"])
                if not find:
                    raise Denied("empty 'find'")
                if text.count(find) != 1:
                    raise Denied(f"the text to change appears {text.count(find)} times, not exactly once")
                self._write(rel, text.replace(find, rep, 1))
                self.run.patches_applied.append({"path": rel, "why": str(i.get("why", ""))[:160], "severity": i.get("severity", "")})
                n += 1
            except (Denied, KeyError, OSError) as e:
                self.run.patches_skipped.append({"path": str(i.get("path", "?")), "reason": str(e)})
        return n

    def _checks(self) -> list[str]:
        fails = static_checks(self.run.root)
        if self.extra_checks:
            fails += list(self.extra_checks(self.run.root) or [])
        return fails

    def build(self, goal: str, folder: str) -> Build:
        name = re.sub(r"[^a-zA-Z0-9_-]+", "-", folder).strip("-")[:40] or "project"
        root = resolve_inside(self.base, name)
        self.run = Build(id=uuid.uuid4().hex[:10], goal=goal, root=root)
        self.cp = Checkpoints(self.run.id, root, self.checkpoint_base)
        root.mkdir(parents=True, exist_ok=True)
        r = self.run
        try:
            self._tick("blueprint")
            bp = ask_json(self.strong, [{"role": "user", "content": _fill(BLUEPRINT_PROMPT, GOAL=goal, MAX=self.max_files)}],
                          _validate_blueprint(self.max_files))
            r.summary = str(bp.get("summary", ""))[:300]
            files = [{"path": _safe_name(f["path"]), "purpose": str(f.get("purpose", ""))[:200]} for f in bp["files"]]
            r.files = [f["path"] for f in files]
            rules = "; ".join(str(x) for x in bp.get("rules", []))[:1200] or "Keep it simple, safe and mobile-first."

            self._tick("writing files")

            def write_one(f):
                if r.stop:
                    return f["path"], None
                prompt = _fill(FILE_PROMPT, PATH=f["path"], PURPOSE=f["purpose"], SUMMARY=r.summary,
                               OTHERS=", ".join(x for x in r.files if x != f["path"]) or "none", RULES=rules, GOAL=goal)
                return f["path"], strip_fences(self.fast([{"role": "user", "content": prompt}]) or "")

            with ThreadPoolExecutor(max_workers=self.workers) as ex:
                for rel, text in ex.map(write_one, files):
                    if text:
                        self._write(rel, text)
            if r.stop:
                r.status, r.final = "stopped", "Stopped. Say undo to remove what I wrote."
                return r

            self._tick("senior review")
            review = ask_json(self.strong, [{"role": "user", "content": _fill(
                REVIEW_PROMPT, CHECKLIST="\n".join("- " + c for c in CHECKLIST), SUMMARY=r.summary, FILES=self._files_blob())}],
                _validate_patches)
            self._apply(review.get("issues", []))

            self._tick("checking")
            prev = None
            r.failures = self._checks()
            while r.failures and r.rounds < self.max_rounds and r.failures != prev and not r.stop:
                r.rounds += 1
                prev = list(r.failures)
                self._tick(f"fixing (round {r.rounds})")
                try:
                    fix = ask_json(self.strong, [{"role": "user", "content": _fill(
                        FIX_PROMPT, FAILS="\n".join("- " + x for x in r.failures), FILES=self._files_blob())}], _validate_patches)
                    self._apply(fix.get("issues", []))
                except GuardError:
                    break
                r.failures = self._checks()

            r.status = "done" if not r.failures else "failed"
            r.final = self._summary()
        except (GuardError, Denied) as e:
            r.status, r.final = "failed", f"I could not finish: {e}"
        except Exception as e:  # a model or disk problem should end the run cleanly, not crash the server
            r.status, r.final = "failed", f"The build stopped on an error: {e}"
        self._tick("finished")
        return r

    def _summary(self) -> str:
        r = self.run
        lines = [f"Built {len(r.files)} file(s) in {r.root.name}: {', '.join(r.files)}.",
                 f"The senior reviewer made {len(r.patches_applied)} fix(es)."]
        if r.patches_skipped:
            lines.append(f"{len(r.patches_skipped)} suggested fix(es) could not be applied safely.")
        lines.append("All automatic checks pass." if not r.failures else "Still failing: " + "; ".join(r.failures[:4]))
        lines.append("Replace every PLACEHOLDER with the client's real details before showing it.")
        return " ".join(lines)
