"""Small import-safe helpers for generated
command handling."""

import os
import shlex
import shutil


DANGEROUS_EXECUTABLES = {
    "rm",
    "del",
    "curl",
    "wget",
    "shutdown",
    "mkfs",
    "dd",
    "diskpart",
    "reg",
    "powershell",
    "pwsh",
    "cmd",
    "bash",
    "sh",
    "chmod",
    "chown",
    "mv",
    "cp",
    "kill",
    "pkill",
    "taskkill",
}
_META_CHARS = set(";|&`\n\r\0><$()*?!~[]")


def _allowed_executables() -> set[str]:
    allowed = {"python", "python3", "node", "npm", "npx", "git"}
    custom = os.environ.get("VANTA_ALLOWED_RUN_COMMANDS", "").strip()
    if custom:
        for item in custom.replace(";", ",").split(","):
            name = item.strip().lower()
            if name:
                allowed.add(name)
    return allowed


def parse_run_command(cmd: str) -> list[str]:
    """Parse a RUN command safely for shell=False subprocess execution."""
    if not cmd or not cmd.strip():
        raise ValueError("RUN is empty")
    if "\n" in cmd or "\r" in cmd:
        raise ValueError("RUN command must not contain newlines")

    try:
        tokens = shlex.split(cmd)
    except ValueError as exc:
        raise ValueError(f"malformed RUN quoting: {exc}") from exc
    if not tokens:
        raise ValueError("RUN is empty")

    for token in tokens:
        if any(ch in token for ch in _META_CHARS):
            raise ValueError(
                "RUN command contains forbidden shell metacharacters or chaining syntax"
            )

    executable = os.path.basename(tokens[0]).lower()
    if executable in DANGEROUS_EXECUTABLES:
        raise ValueError(f"RUN executable is not allowed: {executable!r}")

    allowed = _allowed_executables()
    resolved = shutil.which(tokens[0])
    if not resolved:
        if executable not in allowed:
            raise ValueError(
                f"RUN executable is not allowed or not installed: {tokens[0]!r}"
            )
        resolved = executable
    executable_name = os.path.basename(resolved).lower()
    if executable_name in DANGEROUS_EXECUTABLES or executable_name not in allowed:
        raise ValueError(f"RUN executable is not allowed: {tokens[0]!r}")

    for token in tokens[1:]:
        if token.startswith("-") and token[1:] in {"c", "e", "i"}:
            raise ValueError("RUN command may not use interpreter flags like -c / -e / -i")
        if token.startswith("--") and token[2:3] in {"c", "e", "i"}:
            raise ValueError("RUN command may not use interpreter flags like -c / -e / -i")
        if any(ch in token for ch in _META_CHARS):
            raise ValueError("RUN command contains forbidden shell metacharacters")

    return tokens
