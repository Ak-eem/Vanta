# Vanta

Vanta is a local AI workspace and watcher app. It serves a Socket.IO UI, can generate files in a workspace, and watches configured projects/news feeds for alerts.

## Quick start

1. Create a Python environment and install dependencies:
   - `python -m venv .venv`
   - `source .venv/bin/activate` (or `.venv\Scripts\activate` on Windows)
   - `pip install -r requirements.txt`
2. Copy the environment variables you need into a `.env` file or export them in your shell.
3. Start the app:
   - `python vanta_ui/server.py`

## Required environment variables

- `GROQ_API_KEY`: required for the primary chat client.
- `FLASK_SECRET`: required for Flask session security.
- `VANTA_TOKEN`: optional shared token for Socket.IO access checks.
- `VANTA_WORKSPACE`: optional workspace root; supports `~` and environment variables.
- `VANTA_ALLOWED_RUN_COMMANDS`: optional comma-separated allowlist of extra safe executables beyond the built-in set (`python`, `python3`, `node`, `npm`, `git`).
- Optional: `OPENROUTER_API_KEY`, `OPENROUTER_BASE_URL`, `OPENROUTER_*` model settings.

## Security model

- Model-generated `RUN` commands are limited to a small allowlist and execute with `shell=False`.
- Dangerous executables such as `rm`, `curl`, `wget`, `bash`, `sh`, `powershell`, and `cmd` are rejected.
- File writes are blocked when the target path is absolute, uses `..`, escapes the workspace, or resolves through an unsafe symlink.
- Staging happens in a per-request temp directory and is cleaned up after use.
- Socket.IO access can be gated with `VANTA_TOKEN`; localhost-only CORS is used for the browser UI.

## Workspace and watchers

- Set `VANTA_WORKSPACE` to the root folder where generated app files should live.
- The watcher config in `watcher_config.json` should only contain project directories that already exist; no personal machine paths should be checked in.
- The daemon validates test commands and rejects shell-level injection patterns before running anything.

