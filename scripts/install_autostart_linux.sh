#!/usr/bin/env bash
# Starts VANTA when you log in (Linux, systemd user service). Run once:  bash scripts/install_autostart_linux.sh
# Remove with:  systemctl --user disable --now vanta && rm ~/.config/systemd/user/vanta.service
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PY="${VANTA_PYTHON:-$ROOT/.venv/bin/python}"
[ -x "$PY" ] || PY="$(command -v python3)"
mkdir -p "$HOME/.config/systemd/user"
cat > "$HOME/.config/systemd/user/vanta.service" <<UNIT
[Unit]
Description=VANTA assistant

[Service]
WorkingDirectory=$ROOT
ExecStart=$PY $ROOT/vanta_ui/server.py
Restart=on-failure
RestartSec=30

[Install]
WantedBy=default.target
UNIT
systemctl --user daemon-reload
systemctl --user enable --now vanta
echo "VANTA will now start at login. Open http://127.0.0.1:5000"
