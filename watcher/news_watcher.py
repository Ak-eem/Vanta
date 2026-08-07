"""
News watcher — polls RSS feeds for configured topics, filters through
Groq for genuine significance, and remembers what's already been shown
so restarts don't re-trigger old stories.
"""

import json
import time
import threading
from pathlib import Path

try:
    import feedparser
    FEEDPARSER_OK = True
except ImportError:
    FEEDPARSER_OK = False

SEEN_FILE = Path(__file__).parent / ".seen_news.json"
MAX_SEEN_HISTORY = 500


class NewsWatcher:
    def __init__(self, feeds: list[str], groq_client, model: str,
                 on_alert, poll_minutes: int = 45):
        self.feeds = feeds
        self.client = groq_client
        self.model = model
        self.on_alert = on_alert
        self.poll_minutes = poll_minutes
        self._seen: set = self._load_seen()
        self._stop = threading.Event()

    def _load_seen(self) -> set:
        if SEEN_FILE.exists():
            try:
                return set(json.loads(SEEN_FILE.read_text()))
            except Exception:
                pass
        return set()

    def _save_seen(self):
        try:
            SEEN_FILE.write_text(json.dumps(list(self._seen)[-MAX_SEEN_HISTORY:]))
        except Exception:
            pass

    def start(self):
        if not FEEDPARSER_OK or not self.feeds:
            if self.feeds and not FEEDPARSER_OK:
                print("⚠️  News watcher: feedparser not installed (pip install feedparser)")
            return
        threading.Thread(target=self._loop, daemon=True).start()

    def stop(self):
        self._stop.set()

    def _loop(self):
        while not self._stop.is_set():
            self._poll_once()
            self._stop.wait(self.poll_minutes * 60)

    def _poll_once(self):
        new_items = []
        for feed_url in self.feeds:
            try:
                parsed = feedparser.parse(feed_url)
            except Exception:
                continue
            for entry in parsed.entries[:10]:
                uid = entry.get("id") or entry.get("link")
                if not uid or uid in self._seen:
                    continue
                self._seen.add(uid)
                new_items.append({
                    "title": entry.get("title", ""),
                    "summary": entry.get("summary", "")[:300],
                    "link": entry.get("link", ""),
                })
        if new_items:
            self._save_seen()
            self._filter_and_alert(new_items)

    def _filter_and_alert(self, items: list[dict]):
        listing = "\n".join(
            f"{i+1}. {it['title']} — {it['summary']}" for i, it in enumerate(items)
        )
        prompt = f"""Here are {len(items)} recent news items. Most are routine noise.
Flag ONLY genuinely significant ones — real developments, not minor updates.

{listing}

Respond ONLY with valid JSON, nothing else:
{{"significant": [{{"index": 1, "severity": "medium", "reason": "one line why this matters"}}]}}
If nothing qualifies: {{"significant": []}}"""

        try:
            resp = self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.1,
                max_tokens=500,
            )
            raw = resp.choices[0].message.content.strip()
            raw = raw.removeprefix("```json").removeprefix("```").removesuffix("```").strip()
            data = json.loads(raw)
        except Exception:
            return

        for flagged in data.get("significant", []):
            idx = flagged.get("index", 0) - 1
            if 0 <= idx < len(items):
                item = items[idx]
                self.on_alert(
                    flagged.get("severity", "low"),
                    item["title"],
                    flagged.get("reason", ""),
                    source=item["link"],
                )
