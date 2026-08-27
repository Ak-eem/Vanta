"""
Telegram bot alerts — the away-from-screen channel for the watcher daemon.

Setup (one-time, ~2 minutes):
1. Message @BotFather on Telegram, send /newbot, follow the prompts
   -> gives you a bot token like 123456789:ABCdefGhIJKlmNoPQRstuVwxyZ
2. Message your new bot anything once (so Telegram knows the chat exists)
3. Get your chat ID: visit
   https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
   in a browser after step 2 — look for "chat":{"id": ...} in the response
4. Put both values in watcher_config.json
"""

import json
import urllib.request
import urllib.parse

SEVERITY_PREFIX = {
    "low": "🔵",
    "medium": "🟡",
    "high": "⚠️",
}


def send_telegram_alert(bot_token: str, chat_id: str, title: str, message: str,
                         severity: str = "medium", source: str = ""):
    if not bot_token or not chat_id:
        return

    prefix = SEVERITY_PREFIX.get(severity, "🔵")
    text = f"{prefix} *{title}*\n{message}"
    if source:
        text += f"\n\n_{source}_"

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown",
    }).encode("utf-8")

    req = urllib.request.Request(
        url, data=payload,
        headers={"Content-Type": "application/json"},
    )
    try:
        urllib.request.urlopen(req, timeout=10)
    except Exception as e:
        print(f"[Telegram] Failed to send alert: {e}")
