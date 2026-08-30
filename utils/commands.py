"""Small import-safe helpers for generated command handling."""

import shlex


def parse_run_command(cmd: str) -> list[str]:
    """Parse a RUN command safely for shell=False subprocess execution."""
    if not cmd or not cmd.strip():
        raise ValueError("RUN is empty")
    try:
        tokens = shlex.split(cmd)
    except ValueError as exc:
        raise ValueError(f"malformed RUN quoting: {exc}") from exc
    if not tokens:
        raise ValueError("RUN is empty")
    forbidden = {";", "&&", "||", "|", "&", "`"}
    if any(t in forbidden for t in tokens):
        raise ValueError(
            "RUN command contains shell chaining; use one executable and "
            "arguments without ;, |, &, ||, &&, `, or newlines."
        )
    return tokens