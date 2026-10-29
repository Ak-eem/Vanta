"""Additive tools for VANTA's existing plan/act/verify agent loop.

Capabilities which require a host UI, persistent process manager, MCP server, or
remote scheduler are deliberately reported unavailable instead of simulated.
"""
from __future__ import annotations

import ast
import fnmatch
import http.client
import ipaddress
import json
import re
import socket
import ssl
import time
import uuid
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlsplit

from . import loop as _loop
from .permissions import Denied, check_secret, resolve_inside


_DESCRIPTIONS = {
    "Read": "Read a project file (alias for read_file).",
    "Write": "Create or overwrite a project file; always asks approval.",
    "Edit": "Replace exact text in a project file; always asks approval.",
    "Glob": "Find project files by path pattern (alias for list_files).",
    "Grep": "Search project file contents (alias for grep).",
    "NotebookEdit": "Edit a Jupyter notebook cell by index; always asks approval.",
    "LSP": "Python symbol-definition lookup and syntax diagnostics (not a full language server).",
    "Bash": "Run one safe, sandboxed command (alias for run_command); always asks approval.",
    "PowerShell": "Not available: no safe PowerShell sandbox is configured.",
    "Monitor": "Not available: VANTA has no background-process manager.",
    "WebSearch": "Search the web through VANTA's configured search provider; always asks approval.",
    "WebFetch": "Fetch a public HTTP(S) page with pinned-IP SSRF protections; always asks approval.",
    "Agent": "Delegate a read-only helper (alias for subagent).",
    "SendMessage": "Not available: delegates run synchronously and have no message channel.",
    "ListAgents": "List this agent and any synchronous delegate state.",
    "SubagentHandback": "Not available: no asynchronous delegate handback channel exists.",
    "EnterPlanMode": "Switch this agent to read-only plan mode.",
    "ExitPlanMode": "Leave plan mode and restore the prior permission mode.",
    "EnterWorktree": "Not available: no isolated git-worktree backend is configured.",
    "ExitWorktree": "Not available: no isolated git-worktree backend is configured.",
    "Workflow": "Run a bounded sequence of named VANTA tools; each risky step asks separately.",
    "TaskCreate": "Create an in-memory task; always asks approval.",
    "TaskGet": "Get an in-memory task.",
    "TaskList": "List in-memory tasks.",
    "TaskUpdate": "Update an in-memory task; always asks approval.",
    "TaskOutput": "Read captured in-memory task output.",
    "TaskStop": "Stop an in-memory task; always asks approval.",
    "TodoWrite": "Replace the in-memory todo list; always asks approval.",
    "CronCreate": "Not available: no persistent scheduler is configured.",
    "CronDelete": "Not available: no persistent scheduler is configured.",
    "CronList": "Not available: no persistent scheduler is configured.",
    "ScheduleWakeup": "Not available: VANTA has no wakeup scheduler.",
    "RemoteTrigger": "Not available: no remote trigger service is configured.",
    "AskUserQuestion": "Ask the user a question (alias for ask_user).",
    "PushNotification": "Not available: no notification delivery channel is configured.",
    "SendUserFile": "Not available: no user-file delivery channel is configured.",
    "ReportFindings": "Record findings for inclusion in the final response.",
    "SendFeedback": "Not available: no feedback endpoint is configured.",
    "EndConversation": "Stop the current VANTA run.",
    "ShareOnboardingGuide": "Not available: no onboarding-guide delivery channel is configured.",
    "Skill": "Read a named local skill from skills/ or .vanta/skills/.",
    "ToolSearch": "Search the available tool catalog.",
    "ListMcpResourcesTool": "Not available: no MCP client/server is configured.",
    "ReadMcpResourceTool": "Not available: no MCP client/server is configured.",
    "WaitForMcpServers": "Not available: no MCP client/server is configured.",
    "Artifact": "Write a named artifact under .vanta/artifacts/; always asks approval.",
}

_HELP = "\nAdditional tools (ONE JSON action per turn):\n" + "\n".join(
    f'{{"tool":"{name}","args":{{}}}}  {description}'
    for name, description in _DESCRIPTIONS.items()
)

_ALIASES = {
    "Read": "read_file", "Write": "write_file", "Edit": "edit_file",
    "Glob": "list_files", "Grep": "grep", "Bash": "run_command",
    "WebSearch": "web_search", "Agent": "subagent",
    "AskUserQuestion": "ask_user",
}
_MUST_APPROVE = {
    "write_file", "edit_file", "run_command", "web_search", "web_fetch",
    "NotebookEdit", "Artifact", "TaskCreate", "TaskUpdate", "TaskStop", "TodoWrite",
}
_UNAVAILABLE = {
    "PowerShell", "Monitor", "SendMessage", "SubagentHandback", "EnterWorktree",
    "ExitWorktree", "CronCreate", "CronDelete", "CronList", "ScheduleWakeup",
    "RemoteTrigger", "PushNotification", "SendUserFile", "SendFeedback",
    "ShareOnboardingGuide", "ListMcpResourcesTool", "ReadMcpResourceTool",
    "WaitForMcpServers",
}


def _approval(agent: Any, action: str, detail: str) -> bool:
    try:
        return bool(agent.approve(action, detail))
    except Exception:
        return False


def _inside(agent: Any, path: str) -> Path:
    p = resolve_inside(agent.root, path)
    check_secret(p)
    return p


def _public_target(url: str) -> tuple[str, int, str, str, list[str]]:
    """Validate URL and every DNS result; return hostname, port, request target and pins."""
    u = urlsplit(url)
    if u.scheme not in ("http", "https") or not u.hostname:
        raise ValueError("Only public HTTP(S) URLs are allowed.")
    if u.username is not None or u.password is not None:
        raise ValueError("Credentials in URLs are not allowed.")
    try:
        port = u.port
    except ValueError as exc:
        raise ValueError("Invalid URL port.") from exc
    default = 80 if u.scheme == "http" else 443
    if port not in (None, default):
        raise ValueError("Nonstandard ports are not allowed.")
    host = u.hostname.rstrip(".")
    try:
        host.encode("idna")
    except UnicodeError as exc:
        raise ValueError("Invalid host name.") from exc
    answers = socket.getaddrinfo(host, default, type=socket.SOCK_STREAM)
    ips: list[str] = []
    for answer in answers:
        ip = ipaddress.ip_address(answer[4][0].split("%", 1)[0])
        if ip.version == 6 and ip.ipv4_mapped is not None:
            ip = ip.ipv4_mapped
        if not ip.is_global:
            raise ValueError("URL resolves to a non-public IP address.")
        value = str(ip)
        if value not in ips:
            ips.append(value)
    if not ips:
        raise ValueError("Host did not resolve to a public IP address.")
    target = u.path or "/"
    if u.query:
        target += "?" + u.query
    return u.scheme, default, host, target, ips


class _PinnedHTTP(http.client.HTTPConnection):
    def __init__(self, host: str, port: int, pin: str, timeout: float):
        super().__init__(host, port, timeout=timeout)
        self._pin = pin

    def connect(self) -> None:
        self.sock = socket.create_connection((self._pin, self.port), self.timeout)


class _PinnedHTTPS(http.client.HTTPSConnection):
    def __init__(self, host: str, port: int, pin: str, timeout: float):
        super().__init__(host, port, timeout=timeout, context=ssl.create_default_context())
        self._pin = pin

    def connect(self) -> None:
        raw = socket.create_connection((self._pin, self.port), self.timeout)
        self.sock = self._context.wrap_socket(raw, server_hostname=self.host)


def _secure_fetch(agent: Any, first_url: str) -> str:
    current = first_url
    previous_origin: tuple[str, str, int] | None = None
    max_bytes = 1_000_000
    for redirect_count in range(6):
        scheme, port, host, target, pins = _public_target(current)
        origin = (scheme, host, port)
        if previous_origin is not None and origin != previous_origin:
            if not _approval(agent, "Follow public web redirect", f"{previous_origin[1]} → {host}"):
                raise PermissionError("Redirect was not approved.")
        previous_origin = origin
        conn_cls = _PinnedHTTPS if scheme == "https" else _PinnedHTTP
        conn = conn_cls(host, port, pins[0], 10.0)
        try:
            conn.request("GET", target, headers={
                "Host": host, "User-Agent": "VANTA-agent/1.0",
                "Accept": "text/html,text/plain,application/json;q=0.9,*/*;q=0.2",
                "Accept-Encoding": "identity", "Connection": "close",
            })
            response = conn.getresponse()
            if response.status in (301, 302, 303, 307, 308):
                location = response.getheader("Location")
                response.read(4096)
                if not location or redirect_count >= 5:
                    raise ValueError("Redirect limit reached or missing Location header.")
                current = urljoin(current, location)
                continue
            body = response.read(max_bytes + 1)
            if len(body) > max_bytes:
                raise ValueError("Web page exceeds the 1 MB response limit.")
            if response.status < 200 or response.status >= 300:
                raise ValueError(f"Web server returned HTTP {response.status}.")
            charset = "utf-8"
            match = re.search(r"charset\s*=\s*['\"]?([\w.-]+)", response.getheader("Content-Type", ""), re.I)
            if match:
                charset = match.group(1)
            text = body.decode(charset, errors="replace")
            if "html" in response.getheader("Content-Type", "").lower():
                text = re.sub(r"(?is)<(script|style|noscript)\b[^>]*>.*?</\1\s*>", " ", text)
                text = re.sub(r"(?s)<[^>]+>", " ", text)
                text = re.sub(r"&nbsp;", " ", text, flags=re.I)
            return " ".join(text.split())[:30_000]
        finally:
            conn.close()
    raise ValueError("Redirect limit reached.")


def _notebook_edit(agent: Any, args: dict[str, Any]) -> str:
    if getattr(agent, "mode", "ask") == "plan":
        return "Not allowed in plan mode."
    path = _inside(agent, str(args.get("path", "")))
    if path.suffix.lower() != ".ipynb" or not path.is_file():
        return "NotebookEdit requires an existing .ipynb file."
    try:
        notebook = json.loads(path.read_text(encoding="utf-8"))
        cells = notebook["cells"]
        action = str(args.get("action", "update"))
        source = str(args.get("source", ""))
        index = int(args.get("cell_index", -1))
        if action == "append":
            index = len(cells)
            cells.append({"cell_type": str(args.get("cell_type", "code")), "metadata": {},
                          "source": source.splitlines(keepends=True), **({"outputs": [], "execution_count": None} if args.get("cell_type", "code") == "code" else {})})
        elif action == "insert":
            if index < 0 or index > len(cells):
                return "cell_index is outside the notebook."
            cell_type = str(args.get("cell_type", "code"))
            cell = {"cell_type": cell_type, "metadata": {}, "source": source.splitlines(keepends=True)}
            if cell_type == "code":
                cell.update({"outputs": [], "execution_count": None})
            cells.insert(index, cell)
        elif action == "delete":
            if index < 0 or index >= len(cells):
                return "cell_index is outside the notebook."
            del cells[index]
        elif action == "update":
            if index < 0 or index >= len(cells):
                return "cell_index is outside the notebook."
            cells[index]["source"] = source.splitlines(keepends=True)
        else:
            return "action must be update, insert, append, or delete."
        agent.cp.save(path)
        path.write_text(json.dumps(notebook, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        rel = path.relative_to(agent.root).as_posix()
        if rel not in agent.run.changed:
            agent.run.changed.append(rel)
        return f"Updated notebook {rel} (action={action}, cell={index})."
    except (OSError, ValueError, KeyError, TypeError, json.JSONDecodeError) as exc:
        return f"Could not edit notebook: {exc}"


def _lsp(agent: Any, args: dict[str, Any]) -> str:
    operation = str(args.get("operation", "definition")).lower()
    if operation in ("diagnostics", "errors", "find_errors"):
        paths = [ _inside(agent, str(args["path"])) ] if args.get("path") else sorted(agent.root.glob("**/*.py"))
        results: list[str] = []
        for p in paths[:250]:
            try:
                if not p.is_file() or p.stat().st_size > 1_000_000:
                    continue
                check_secret(p)
                ast.parse(p.read_text(encoding="utf-8", errors="replace"), filename=str(p))
            except SyntaxError as exc:
                results.append(f"{p.relative_to(agent.root)}:{exc.lineno or 1}:{exc.offset or 1}: {exc.msg}")
            except (OSError, Denied, ValueError):
                continue
        return "\n".join(results) if results else "No Python syntax errors found (syntax-only; not a full LSP/type checker)."
    symbol = str(args.get("symbol", ""))
    if not symbol.isidentifier():
        return "Provide a valid Python symbol name."
    paths = [ _inside(agent, str(args["path"])) ] if args.get("path") else sorted(agent.root.glob("**/*.py"))
    found: list[str] = []
    for p in paths[:250]:
        try:
            if not p.is_file() or p.stat().st_size > 1_000_000:
                continue
            check_secret(p)
            tree = ast.parse(p.read_text(encoding="utf-8", errors="replace"), filename=str(p))
            for node in ast.walk(tree):
                if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)) and node.name == symbol:
                    found.append(f"{p.relative_to(agent.root)}:{node.lineno}: {node.name}")
        except (OSError, SyntaxError, Denied, ValueError):
            continue
    return "\n".join(found) if found else f"No Python definition found for {symbol!r}. (No language-server backend is configured.)"


def _task_store(agent: Any) -> dict[str, dict[str, Any]]:
    if not hasattr(agent, "_suite_tasks"):
        agent._suite_tasks = {}
    return agent._suite_tasks


def _task_tool(agent: Any, name: str, args: dict[str, Any]) -> str:
    tasks = _task_store(agent)
    if name == "TaskList":
        return json.dumps(list(tasks.values()), ensure_ascii=False)
    task_id = str(args.get("task_id", args.get("id", "")))
    if name in ("TaskGet", "TaskOutput"):
        task = tasks.get(task_id)
        return json.dumps(task, ensure_ascii=False) if task else f"No task with id {task_id!r}."
    if name == "TaskCreate":
        task_id = "task-" + uuid.uuid4().hex[:8]
        task = {"id": task_id, "subject": str(args.get("subject", "")),
                "description": str(args.get("description", "")), "status": "pending", "output": ""}
        tasks[task_id] = task
        return json.dumps(task, ensure_ascii=False)
    if name == "TaskUpdate":
        task = tasks.get(task_id)
        if not task:
            return f"No task with id {task_id!r}."
        for key in ("subject", "description", "status", "output"):
            if key in args:
                task[key] = str(args[key])
        return json.dumps(task, ensure_ascii=False)
    if name == "TaskStop":
        task = tasks.get(task_id)
        if not task:
            return f"No task with id {task_id!r}."
        task["status"] = "stopped"
        return json.dumps(task, ensure_ascii=False)
    if name == "TodoWrite":
        items = args.get("todos", args.get("items", []))
        if not isinstance(items, list):
            return "todos must be a list."
        tasks.clear()
        for item in items[:100]:
            if isinstance(item, dict):
                ident = "task-" + uuid.uuid4().hex[:8]
                tasks[ident] = {"id": ident, "subject": str(item.get("content", item.get("subject", ""))),
                                "description": str(item.get("description", "")),
                                "status": str(item.get("status", "pending")), "output": ""}
        return json.dumps(list(tasks.values()), ensure_ascii=False)
    return "Unknown task operation."


def _unsupported(name: str) -> str:
    return f"{name} is unavailable: {_DESCRIPTIONS.get(name, 'the required host integration is not configured')}"


def _suite_tool(agent: Any, name: str, args: dict[str, Any], original: Any) -> str:
    if not isinstance(args, dict):
        args = {}
    if name in _UNAVAILABLE:
        return _unsupported(name)
    if name in ("EnterPlanMode", "ExitPlanMode"):
        if name == "EnterPlanMode":
            agent._suite_previous_mode = agent.mode
            agent.mode = "plan"
            return "Plan mode enabled; tools that change state remain blocked."
        prior = getattr(agent, "_suite_previous_mode", "ask")
        agent.mode = prior if prior in ("ask", "accept_edits", "auto") else "ask"
        return f"Plan mode disabled; permission mode is {agent.mode}."
    if name == "ListAgents":
        return json.dumps([{"id": "current", "status": "running", "depth": agent.depth}], ensure_ascii=False)
    if name == "Workflow":
        steps = args.get("steps", [])
        if not isinstance(steps, list) or len(steps) > 20:
            return "Workflow requires a list of at most 20 tool steps."
        out = []
        for step in steps:
            if not isinstance(step, dict) or not isinstance(step.get("tool"), str):
                return "Each workflow step must contain tool and args."
            result = agent._tool(step["tool"], step.get("args", {}))
            out.append({"tool": step["tool"], "result": result[:3000]})
        return json.dumps(out, ensure_ascii=False)
    if name in ("TaskCreate", "TaskUpdate", "TaskStop", "TodoWrite"):
        if agent.mode == "plan" or not _approval(agent, name, json.dumps(args, ensure_ascii=False)[:500]):
            return "Not approved; no task changes were made."
        return _task_tool(agent, name, args)
    if name in ("TaskGet", "TaskList", "TaskOutput"):
        return _task_tool(agent, name, args)
    if name == "NotebookEdit":
        if not _approval(agent, "Edit notebook", str(args.get("path", ""))):
            return "Not approved; notebook was not changed."
        return _notebook_edit(agent, args)
    if name == "LSP":
        return _lsp(agent, args)
    if name == "Skill":
        slug = str(args.get("name", ""))
        if not slug or any(c not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_" for c in slug):
            return "Provide a simple skill name."
        candidates = [agent.root / "skills" / slug / "SKILL.md", agent.root / ".vanta" / "skills" / slug / "SKILL.md",
                     agent.root / "skills" / f"{slug}.md", agent.root / ".vanta" / "skills" / f"{slug}.md"]
        for candidate in candidates:
            try:
                p = resolve_inside(agent.root, str(candidate))
                check_secret(p)
                if p.is_file():
                    return p.read_text(encoding="utf-8", errors="replace")[:20_000]
            except (Denied, OSError, ValueError):
                continue
        return f"No local skill named {slug!r} was found."
    if name == "ToolSearch":
        query = str(args.get("query", "")).lower()
        matches = [{"name": key, "description": value} for key, value in _DESCRIPTIONS.items()
                   if not query or query in key.lower() or query in value.lower()]
        return json.dumps(matches[:30], ensure_ascii=False)
    if name == "Artifact":
        if agent.mode == "plan" or not _approval(agent, "Write artifact", str(args.get("name", "artifact"))):
            return "Not approved; artifact was not written."
        filename = str(args.get("name", "artifact.txt"))
        if not filename or Path(filename).name != filename or filename in (".", ".."):
            return "Artifact name must be a simple filename."
        return original(agent, "write_file", {"path": f".vanta/artifacts/{filename}", "content": str(args.get("content", ""))})
    if name == "ReportFindings":
        findings = args.get("findings", args.get("text", ""))
        if not hasattr(agent, "_suite_findings"):
            agent._suite_findings = []
        agent._suite_findings.append(str(findings)[:5000])
        return "Findings recorded for the final response."
    if name == "EndConversation":
        agent.stop = True
        return "Stopping the current VANTA run."
    if name == "Monitor":
        return _unsupported(name)
    if name in _ALIASES:
        target = _ALIASES[name]
        if name == "Read":
            args = {"path": args.get("path", args.get("file_path", "")), "start": args.get("start", args.get("offset", 1)), "end": args.get("end", args.get("limit"))}
            args = {k: v for k, v in args.items() if v is not None}
        elif name == "Write":
            args = {"path": args.get("path", args.get("file_path", "")), "content": args.get("content", "")}
        elif name == "Edit":
            args = {"path": args.get("path", args.get("file_path", "")), "find": args.get("find", args.get("old_string", "")), "replace": args.get("replace", args.get("new_string", ""))}
        elif name == "Glob":
            args = {"pattern": args.get("pattern", "**/*")}
        elif name == "Bash":
            args = {"command": args.get("command", "")}
        elif name == "WebSearch":
            args = {"query": args.get("query", "")}
        elif name == "Agent":
            args = {"task": args.get("task", "")}
        elif name == "AskUserQuestion":
            args = {"question": args.get("question", args.get("prompt", ""))}
        sensitive = target in _MUST_APPROVE
        if sensitive and not _approval(agent, name, json.dumps(args, ensure_ascii=False)[:500]):
            return "Not approved; action was not run."
        if name == "WebSearch":
            return original(agent, target, args)
        if sensitive:
            old_approve = agent.approve
            agent.approve = lambda *_a, **_k: True
            try:
                return original(agent, target, args)
            finally:
                agent.approve = old_approve
        return original(agent, target, args)
    if name == "WebFetch":
        url = str(args.get("url", ""))
        if not _approval(agent, "Fetch a web page", url[:500]):
            return "Not approved; no network request was made."
        try:
            return _secure_fetch(agent, url)
        except Exception as exc:
            return f"WebFetch blocked or failed: {exc}"
    if name in ("list_files", "grep", "read_file", "edit_file", "write_file", "run_command",
                "web_search", "web_fetch", "note", "subagent", "ask_user"):
        if name in _MUST_APPROVE and not _approval(agent, name, json.dumps(args, ensure_ascii=False)[:500]):
            return "Not approved; action was not run."
        if name == "web_fetch":
            return _secure_fetch(agent, str(args.get("url", "")))
        if name in _MUST_APPROVE:
            old_approve = agent.approve
            agent.approve = lambda *_a, **_k: True
            try:
                return original(agent, name, args)
            finally:
                agent.approve = old_approve
        return original(agent, name, args)
    return original(agent, name, args)


def install() -> None:
    """Install once while preserving the original Agent implementation."""
    cls = _loop.Agent
    if getattr(cls, "_tool_suite_installed", False):
        return
    original_tool = cls._tool
    original_init = cls.__init__
    original_execute = cls.execute

    def init(self: Any, *args: Any, **kwargs: Any) -> None:
        original_init(self, *args, **kwargs)
        self._suite_tasks = {}
        self._suite_findings = []

    def tool(self: Any, name: str, args: dict[str, Any]) -> str:
        return _suite_tool(self, name, args, original_tool)

    def execute(self: Any, goal: str) -> Any:
        run = original_execute(self, goal)
        if self._suite_findings and run.final:
            run.final += "\n\nFindings:\n" + "\n".join(self._suite_findings)
        return run

    cls.__init__ = init
    cls._tool = tool
    cls.execute = execute
    cls._tool_suite_installed = True
    _loop.TOOL_HELP += _HELP
