"""Tests for utils.commands.parse_run_command.

This script can be executed directly to verify that the function correctly
rejects unsafe shell constructs while allowing safe commands.
"""

import pytest

from utils.commands import parse_run_command


def test_rejects_unsafe_shell_tokens_and_interpreters():
    for s in [
        "python script.py && rm -rf /",
        "python script.py ; rm -rf /",
        "python script.py $(rm -rf /)",
        "python script.py `rm -rf /`",
        "python script.py | cat",
        "python -c \"print('safe')\"",
        "bash -lc 'echo hi'",
        "curl https://example.com",
        "rm -rf /",
        "python script.py;echo hi",
        "python script.py\nrm -rf /",
        "python 'hello;world'",
    ]:
        with pytest.raises(ValueError):
            parse_run_command(s)


def test_allows_safe_commands_only():
    assert parse_run_command("python app.py") == ["python", "app.py"]
    assert parse_run_command("node script.js --port 3000") == ["node", "script.js", "--port", "3000"]
    assert parse_run_command("npm run build -- --watch") == ["npm", "run", "build", "--", "--watch"]
    assert parse_run_command("git status --short") == ["git", "status", "--short"]


if __name__ == "__main__":
    test_rejects_unsafe_shell_tokens_and_interpreters()
    test_allows_safe_commands_only()
    print("parse_run_command checks passed")
