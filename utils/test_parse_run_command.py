"""Tests for utils.commands.parse_run_command.

This script can be executed directly to verify that the function correctly
rejects unsafe shell constructs while allowing safe commands.
"""

from utils.commands import parse_run_command

def test_samples():
    samples = [
        "python script.py && rm -rf /",
        "python script.py ; rm -rf /",
        "python script.py $(rm -rf /)",
        "python script.py `rm -rf /`",
        "python script.py | cat",
        "python -c \"print('safe')\"",
    ]
    for s in samples:
        try:
            result = parse_run_command(s)
            print(f"ACCEPTED: {s!r} -> {result}")
        except Exception as exc:
            print(f"REJECTED: {s!r} -> {exc}")

if __name__ == "__main__":
    test_samples()
