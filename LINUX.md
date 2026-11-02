# VANTA on Linux

Runs fine: `python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && python3 vanta_ui/server.py`, then open http://127.0.0.1:5000.

| Feature | Linux status |
|---|---|
| Chat, agent, tools, Builder, Orchestra, Offline | Works |
| Active window and idle time | X11 only: `sudo apt install xdotool xprintidle`. Wayland has no safe way, so VANTA skips it. |
| Start at login | `bash scripts/install_autostart_linux.sh` (systemd user service) |
| Notifications and voice | Through plyer (needs `notify-send`) and pyttsx3 (needs `espeak`) |
| Ransomware watch, scanner, quarantine | Works (protected folders include /usr, /etc, /bin, /boot) |
| Dashboard board (temps, fans, firewall check, End program) | On the `system-board` branch: temps need `lm-sensors`; firewall check detects ufw, firewalld, nftables, ClamAV. |
| Installed-programs list and Uninstall | Windows only for now. On Linux removing software needs admin rights, so VANTA leaves it to you. |
