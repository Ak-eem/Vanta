"""
memory.py
Vanta's long-term memory: a hybrid of a compact memory.md profile and a
SQLite ledger (WAL mode, FTS5 full-text search, metadata pointers, and an
audit trail). Extraction runs after each turn; consolidation runs
periodically and is fully reviewable — nothing is ever deleted.

Why no embeddings/Chroma/vectors: the sibling module vanta_knowledge/rag.py
already hit this wall (chromadb's default embedder pulls a 79MB ONNX model
on first run, which stalled out on a slow connection) and moved to plain
keyword matching instead. This module follows the same lesson: regex
extraction + SQLite FTS5 gets most of the value of "search my memory" with
zero downloads, zero extra processes, and nothing that can go stale.

Stdlib only: sqlite3, pathlib, re, json, datetime. Python 3.10+ (this is
what lets `str | None`-style unions work without importing `typing`).

Layout on disk, mirroring the existing ~/.vanta/ convention already used by
vanta_knowledge/google_search.py's cache db:
    ~/.vanta/vanta_memory.db                 SQLite ledger (WAL)
    ~/.vanta/memory.md                       compact human-readable profile
    ~/.vanta/memory_consolidation_report.md  append-only, one section/run
"""

import json
import re
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

# ─────────────────────────────────────────────────────────────────────────
# ██  PATHS & MODULE STATE
# ─────────────────────────────────────────────────────────────────────────

DEFAULT_DB_PATH = Path.home() / ".vanta" / "vanta_memory.db"
DEFAULT_MEMORY_MD_PATH = Path.home() / ".vanta" / "memory.md"
DEFAULT_REPORT_PATH = Path.home() / ".vanta" / "memory_consolidation_report.md"

# Tri-state: None = not checked yet, True/False = known for this process.
_FTS_AVAILABLE: "bool | None" = None

VALID_KINDS = ("fact", "preference", "skill", "event", "task")
VALID_ACTIONS = ("extract", "update", "consolidate", "review")
SIMILARITY_THRESHOLD = 0.55  # Jaccard token overlap for consolidate()


def _resolve_path(db_path=None) -> Path:
    if db_path:
        return Path(db_path)
    return DEFAULT_DB_PATH


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


# ─────────────────────────────────────────────────────────────────────────
# ██  CONNECTION HANDLING
# ─────────────────────────────────────────────────────────────────────────
# A small hand-rolled context manager instead of @contextlib.contextmanager
# — contextlib isn't in the allowed stdlib list, and this is one class.
# Short-lived connections (open -> use -> commit/rollback -> close) rather
# than one shared global connection, since server.py runs SocketIO with
# async_mode="threading" and sqlite3 connections aren't safe to share
# across threads.

class _Conn:
    def __init__(self, path: Path):
        self._path = path

    def __enter__(self) -> sqlite3.Connection:
        self._path.parent.mkdir(parents=True, exist_ok=True)
        self.conn = sqlite3.connect(str(self._path), timeout=10)
        try:
            self.conn.row_factory = sqlite3.Row
            self.conn.execute("PRAGMA journal_mode=WAL;")
            self.conn.execute("PRAGMA foreign_keys=ON;")
            _ensure_schema(self.conn)
            return self.conn
        except Exception:
            self.conn.close()
            raise

    def __exit__(self, exc_type, exc, tb) -> bool:
        if exc_type is None:
            self.conn.commit()
        else:
            self.conn.rollback()
        self.conn.close()
        return False


def _ensure_schema(conn: sqlite3.Connection) -> None:
    global _FTS_AVAILABLE

    conn.execute("""
        CREATE TABLE IF NOT EXISTS memory_entries (
            id           INTEGER PRIMARY KEY AUTOINCREMENT,
            kind         TEXT NOT NULL CHECK(kind IN ('fact','preference','skill','event','task')),
            content      TEXT NOT NULL,
            source       TEXT,
            confidence   REAL NOT NULL DEFAULT 1.0,
            created_at   TEXT NOT NULL,
            updated_at   TEXT NOT NULL,
            consolidated INTEGER NOT NULL DEFAULT 0
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS memory_meta (
            key   TEXT PRIMARY KEY,
            value TEXT
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS memory_audit (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            action     TEXT NOT NULL CHECK(action IN ('extract','update','consolidate','review')),
            entry_id   INTEGER,
            detail     TEXT,
            created_at TEXT NOT NULL
        )
    """)
    conn.execute("CREATE INDEX IF NOT EXISTS idx_entries_kind_consolidated "
                 "ON memory_entries(kind, consolidated)")
    conn.execute("CREATE INDEX IF NOT EXISTS idx_entries_updated_at "
                 "ON memory_entries(updated_at)")

    if _FTS_AVAILABLE is not False:
        try:
            conn.execute("""
                CREATE VIRTUAL TABLE IF NOT EXISTS memory_fts
                USING fts5(content, content='memory_entries', content_rowid='id')
            """)
            # External-content FTS5 table: triggers keep it in sync since it
            # doesn't store its own copy of the row.
            conn.execute("""
                CREATE TRIGGER IF NOT EXISTS memory_entries_ai
                AFTER INSERT ON memory_entries BEGIN
                    INSERT INTO memory_fts(rowid, content) VALUES (new.id, new.content);
                END
            """)
            conn.execute("""
                CREATE TRIGGER IF NOT EXISTS memory_entries_ad
                AFTER DELETE ON memory_entries BEGIN
                    INSERT INTO memory_fts(memory_fts, rowid, content) VALUES ('delete', old.id, old.content);
                END
            """)
            conn.execute("""
                CREATE TRIGGER IF NOT EXISTS memory_entries_au
                AFTER UPDATE OF content ON memory_entries BEGIN
                    INSERT INTO memory_fts(memory_fts, rowid, content) VALUES ('delete', old.id, old.content);
                    INSERT INTO memory_fts(rowid, content) VALUES (new.id, new.content);
                END
            """)
            _FTS_AVAILABLE = True
        except sqlite3.OperationalError:
            # This Python's sqlite3 wasn't built with FTS5. search_memories()
            # falls back to LIKE automatically — see below.
            _FTS_AVAILABLE = False


def init_db(db_path=None) -> Path:
    """Create/open the DB and ensure schema. All callers should pass the
    desired db_path explicitly to avoid shared process-global path state."""
    path = Path(db_path) if db_path else DEFAULT_DB_PATH
    with _Conn(path) as conn:
        _set_meta(conn, "schema_version", "1")
        if _get_meta(conn, "profile_path") is None:
            _set_meta(conn, "profile_path", str(path.parent / "memory.md"))
    return path


# ─────────────────────────────────────────────────────────────────────────
# ██  META / AUDIT HELPERS
# ─────────────────────────────────────────────────────────────────────────

def _get_meta(conn: sqlite3.Connection, key: str) -> "str | None":
    row = conn.execute("SELECT value FROM memory_meta WHERE key=?", (key,)).fetchone()
    return row["value"] if row else None


def _set_meta(conn: sqlite3.Connection, key: str, value: str) -> None:
    conn.execute(
        "INSERT INTO memory_meta (key, value) VALUES (?, ?) "
        "ON CONFLICT(key) DO UPDATE SET value=excluded.value",
        (key, value),
    )


def _audit(conn: sqlite3.Connection, action: str, entry_id, detail: str) -> None:
    if action not in VALID_ACTIONS:
        raise ValueError(f"invalid audit action: {action!r}, must be one of {VALID_ACTIONS}")
    conn.execute(
        "INSERT INTO memory_audit (action, entry_id, detail, created_at) VALUES (?, ?, ?, ?)",
        (action, entry_id, detail, _now()),
    )


def log_review(entry_id=None, detail: str = "", db_path=None) -> None:
    """Optional: record that a human reviewed an entry (or the
    consolidation report as a whole). Not called automatically anywhere —
    it exists so a future review UI/CLI has somewhere to write to; the
    audit schema already reserves 'review' as a valid action."""
    with _Conn(_resolve_path(db_path)) as conn:
        _audit(conn, "review", entry_id, json.dumps({"note": detail}) if detail else "{}")


# ─────────────────────────────────────────────────────────────────────────
# ██  EXTRACTION PATTERNS
# ─────────────────────────────────────────────────────────────────────────
# Regex, not NLP — approximate by design (see module docstring). Each
# pattern stops at sentence punctuation; _clean_capture() additionally cuts
# off a run-on second clause ("I like X and I prefer Y") when there's no
# punctuation between them.

_NAME_RE = re.compile(
    r"\bmy name(?:'s| is)\s+([A-Za-z][A-Za-z'\-]*(?:\s+[A-Za-z][A-Za-z'\-]*){0,2})",
    re.IGNORECASE,
)
_AM_RE = re.compile(r"\bi(?:'m| am)\s+(?!not\b)([^.!?\n,;]{2,80})", re.IGNORECASE)
_LIKE_RE = re.compile(r"\bi\s+like\s+([^.!?\n,;]{2,80})", re.IGNORECASE)
_PREFER_RE = re.compile(r"\bi\s+prefer\s+([^.!?\n,;]{2,80})", re.IGNORECASE)

_CLAUSE_BREAK_RE = re.compile(
    r"\bi(?:'m| am|\s+like|\s+prefer|\s+need|\s+want|\s+have)\b", re.IGNORECASE
)
_TRAILING_JUNK_RE = re.compile(r"\s+(and|but|so|because|which|that)\s*$", re.IGNORECASE)

_TOKEN_RE = re.compile(r"[a-z0-9']+")


def _clean_capture(s: str) -> str:
    s = s.strip()
    m = _CLAUSE_BREAK_RE.search(s)
    if m and m.start() > 0:
        s = s[: m.start()].strip()
    s = _TRAILING_JUNK_RE.sub("", s).strip()
    return s


def _tokenize(text: str) -> set:
    return set(_TOKEN_RE.findall(text.lower()))


def _similarity(a: str, b: str) -> float:
    """Cheap stdlib-only fuzzy match: Jaccard overlap of word tokens.
    Not difflib (not in the allowed import list) — this is deliberately
    simple; consolidate() is a reviewable, non-destructive process, so an
    imperfect merge is visible in the report rather than silently wrong."""
    ta, tb = _tokenize(a), _tokenize(b)
    if not ta and not tb:
        return 1.0
    if not ta or not tb:
        return 0.0
    return len(ta & tb) / len(ta | tb)


# ─────────────────────────────────────────────────────────────────────────
# ██  CORE READ/WRITE
# ─────────────────────────────────────────────────────────────────────────

def _add_memory_internal(conn, kind: str, content: str, source: str, confidence: float):
    """Returns (id, created). If an active entry of the same kind already
    has the same normalized content, it's reinforced (updated_at bumped,
    confidence raised to the max of the two) instead of duplicated — this
    matters because extract_memories runs after *every* turn, and without
    this a repeated preference would otherwise re-insert on every mention
    until the next consolidate() (default: every 30 days)."""
    if kind not in VALID_KINDS:
        raise ValueError(f"invalid kind: {kind!r}, must be one of {VALID_KINDS}")
    content = (content or "").strip()
    if not content:
        raise ValueError("content must not be empty")
    confidence = max(0.0, min(1.0, float(confidence)))
    norm = " ".join(content.lower().split())
    now = _now()

    existing = conn.execute(
        "SELECT id, content, confidence FROM memory_entries WHERE kind=? AND consolidated=0",
        (kind,),
    ).fetchall()
    for row in existing:
        if " ".join(row["content"].lower().split()) == norm:
            new_conf = max(row["confidence"], confidence)
            conn.execute(
                "UPDATE memory_entries SET updated_at=?, confidence=? WHERE id=?",
                (now, new_conf, row["id"]),
            )
            _audit(conn, "update", row["id"], json.dumps({
                "reason": "duplicate_reinforced", "source": source,
                "prev_confidence": row["confidence"], "new_confidence": new_conf,
            }))
            return row["id"], False

    cur = conn.execute(
        "INSERT INTO memory_entries (kind, content, source, confidence, created_at, updated_at, consolidated) "
        "VALUES (?, ?, ?, ?, ?, ?, 0)",
        (kind, content, source, confidence, now, now),
    )
    new_id = cur.lastrowid
    _audit(conn, "extract", new_id, json.dumps({"kind": kind, "source": source, "confidence": confidence}))
    return new_id, True


def add_memory(kind: str, content: str, source: str, confidence: float = 1.0, db_path=None) -> int:
    """Directly add (or reinforce) one memory. Returns its id."""
    with _Conn(_resolve_path(db_path)) as conn:
        entry_id, _created = _add_memory_internal(conn, kind, content, source, confidence)
    return entry_id


def extract_memories(text: str, source: str = "turn", explicit: "list | None" = None, db_path=None) -> list:
    """Regex-extract facts/preferences from `text` ("I am/I'm X", "I like Y",
    "I prefer Z", "my name is X"), insert them, and audit-log each insert.

    `explicit` optionally accepts pre-identified memories to insert alongside
    (or instead of) regex extraction — either plain strings (kind='fact',
    confidence=1.0) or dicts like {"kind", "content", "confidence", "source"}.

    Returns the ids of entries that were newly created (reinforced
    duplicates are not included, since nothing new was learned)."""
    path = _resolve_path(db_path)
    inserted_ids = []

    with _Conn(path) as conn:
        if text:
            name_match = _NAME_RE.search(text)
            if name_match:
                name = _clean_capture(name_match.group(1))
                if name:
                    entry_id, created = _add_memory_internal(
                        conn, "fact", f"User's name is {name}.", source, 0.9
                    )
                    _set_meta(conn, "profile_name", name)
                    if created:
                        inserted_ids.append(entry_id)

            for pattern, kind, conf in (
                (_AM_RE, "fact", 0.6),
                (_LIKE_RE, "preference", 0.6),
                (_PREFER_RE, "preference", 0.65),
            ):
                for m in pattern.finditer(text):
                    content = _clean_capture(m.group(1))
                    if len(content) < 2:
                        continue
                    entry_id, created = _add_memory_internal(conn, kind, content, source, conf)
                    if created:
                        inserted_ids.append(entry_id)

        if explicit:
            for item in explicit:
                if isinstance(item, str):
                    kind, content, conf, item_source = "fact", item, 1.0, source
                elif isinstance(item, dict):
                    kind = item.get("kind", "fact")
                    content = item.get("content", "")
                    conf = item.get("confidence", 1.0)
                    item_source = item.get("source", source)
                else:
                    continue
                content = content.strip() if isinstance(content, str) else ""
                if not content:
                    continue
                entry_id, created = _add_memory_internal(conn, kind, content, item_source, conf)
                if created:
                    inserted_ids.append(entry_id)

        if inserted_ids:
            _set_meta(conn, "last_extraction_id", str(inserted_ids[-1]))
            _set_meta(conn, "last_extraction_time", _now())

    return inserted_ids


def search_memories(query: str, top_k: int = 5, db_path=None, include_consolidated: bool = False) -> list:
    """FTS5 MATCH first (prefix-matched, OR'd tokens); falls back to a plain
    LIKE scan if FTS5 isn't compiled into this Python's sqlite3, or if the
    FTS5 pass comes back empty. Returns a list of dicts (memory_entries rows)."""
    query = (query or "").strip()
    if not query:
        return []
    path = _resolve_path(db_path)
    cons_clause = "" if include_consolidated else "AND e.consolidated = 0"
    results = []

    with _Conn(path) as conn:
        if _FTS_AVAILABLE:
            tokens = _TOKEN_RE.findall(query.lower())
            if tokens:
                fts_query = " OR ".join(f"{t}*" for t in tokens)
                try:
                    rows = conn.execute(
                        f"""
                        SELECT e.* FROM memory_entries e
                        JOIN memory_fts f ON f.rowid = e.id
                        WHERE f MATCH ? {cons_clause}
                        ORDER BY rank LIMIT ?
                        """,
                        (fts_query, top_k),
                    ).fetchall()
                    results = [dict(r) for r in rows]
                except sqlite3.OperationalError:
                    results = []

        if not results:
            like_q = f"%{query}%"
            rows = conn.execute(
                f"""
                SELECT e.* FROM memory_entries e
                WHERE e.content LIKE ? {cons_clause}
                ORDER BY e.updated_at DESC LIMIT ?
                """,
                (like_q, top_k),
            ).fetchall()
            results = [dict(r) for r in rows]

    return results


def get_profile(db_path=None, max_per_kind: int = 8) -> str:
    """Assemble a compact profile string from the highest-confidence, most
    recently touched active entries, grouped by kind."""
    with _Conn(_resolve_path(db_path)) as conn:
        name = _get_meta(conn, "profile_name")
        lines = []
        if name:
            lines.append(f"Name: {name}")
        for kind, label in (
            ("fact", "Facts"), ("preference", "Preferences"), ("skill", "Skills"),
            ("task", "Open tasks"), ("event", "Recent events"),
        ):
            rows = conn.execute(
                "SELECT content FROM memory_entries WHERE kind=? AND consolidated=0 "
                "ORDER BY confidence DESC, updated_at DESC LIMIT ?",
                (kind, max_per_kind),
            ).fetchall()
            if rows:
                lines.append(f"{label}:")
                lines.extend(f"- {r['content']}" for r in rows)
    return "\n".join(lines) if lines else "(no memories yet)"


def write_memory_md(path=None, db_path=None) -> Path:
    """Write/overwrite the compact memory.md profile file."""
    target = Path(path) if path else DEFAULT_MEMORY_MD_PATH
    target.parent.mkdir(parents=True, exist_ok=True)
    profile = get_profile(db_path=db_path)
    now = _now()
    target.write_text(f"# Vanta Memory Profile\n\n_Last updated: {now}_\n\n{profile}\n", encoding="utf-8")

    with _Conn(_resolve_path(db_path)) as conn:
        _set_meta(conn, "profile_path", str(target))
        _set_meta(conn, "profile_last_written", now)
        _audit(conn, "update", None, json.dumps({"action": "memory.md written", "path": str(target)}))
    return target


# ─────────────────────────────────────────────────────────────────────────
# ██  CONSOLIDATION
# ─────────────────────────────────────────────────────────────────────────

def _write_consolidation_report(report_path, summary: dict, merges: list) -> Path:
    target = Path(report_path) if report_path else DEFAULT_REPORT_PATH
    target.parent.mkdir(parents=True, exist_ok=True)

    lines = [f"## Consolidation run: {summary.get('ran_at', summary.get('checked_at', ''))}", ""]
    if summary["status"] == "skipped":
        lines.append(f"Skipped — {summary['reason']}.")
    else:
        n = summary["entries_marked_consolidated"]
        lines.append(f"Reviewed {summary['reviewed']} active entries.")
        lines.append(f"Merged {n} entr{'y' if n == 1 else 'ies'} into {summary['merged_groups']} survivor(s).")
        if merges:
            lines += ["", "| consolidated id | kind | merged into |", "|---|---|---|"]
            lines += [f"| {m['consolidated_id']} | {m['kind']} | {m['survivor_id']} |" for m in merges]
    lines += ["", "```json", json.dumps(summary, indent=2), "```", ""]

    with target.open("a", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")
    return target


def consolidate(threshold_days: int = 30, db_path=None, force: bool = False, report_path=None) -> dict:
    """Periodic, reviewable consolidation. Groups active entries by kind,
    clusters near-duplicates via token-overlap similarity, and marks all
    but one survivor per cluster as consolidated=1 — never deletes.
    Gated by threshold_days against memory_meta['last_consolidation_time']
    so it's genuinely periodic rather than re-scanning on every call;
    pass force=True to bypass the gate. Always appends a dated section to
    the consolidation report, even when skipped."""
    path = _resolve_path(db_path)
    now = datetime.now(timezone.utc)

    with _Conn(path) as conn:
        last_run_str = _get_meta(conn, "last_consolidation_time")
        if last_run_str and not force:
            try:
                last_run = datetime.fromisoformat(last_run_str)
            except ValueError:
                last_run = None
            if last_run is not None:
                elapsed_days = (now - last_run).total_seconds() / 86400
                if elapsed_days < threshold_days:
                    summary = {
                        "status": "skipped",
                        "reason": f"last consolidation {elapsed_days:.1f}d ago, threshold is {threshold_days}d",
                        "checked_at": now.isoformat(),
                    }
                    _audit(conn, "consolidate", None, json.dumps(summary))
                    _write_consolidation_report(report_path, summary, [])
                    return summary

        rows = conn.execute(
            "SELECT id, kind, content, confidence, updated_at FROM memory_entries "
            "WHERE consolidated=0 ORDER BY kind, id"
        ).fetchall()

        groups: dict = {}
        for r in rows:
            groups.setdefault(r["kind"], []).append(r)

        merges = []
        for kind, entries in groups.items():
            used = set()
            for i in range(len(entries)):
                if entries[i]["id"] in used:
                    continue
                cluster = [entries[i]]
                for j in range(i + 1, len(entries)):
                    if entries[j]["id"] in used:
                        continue
                    if _similarity(entries[i]["content"], entries[j]["content"]) >= SIMILARITY_THRESHOLD:
                        cluster.append(entries[j])
                        used.add(entries[j]["id"])
                if len(cluster) > 1:
                    survivor = max(cluster, key=lambda r: (r["confidence"], r["updated_at"]))
                    for entry in cluster:
                        if entry["id"] == survivor["id"]:
                            continue
                        conn.execute(
                            "UPDATE memory_entries SET consolidated=1, updated_at=? WHERE id=?",
                            (now.isoformat(), entry["id"]),
                        )
                        detail = json.dumps({
                            "merged_into": survivor["id"], "kind": kind,
                            "similarity_hint": "jaccard_token_overlap",
                        })
                        _audit(conn, "consolidate", entry["id"], detail)
                        merges.append({"consolidated_id": entry["id"], "survivor_id": survivor["id"], "kind": kind})

        _set_meta(conn, "last_consolidation_time", now.isoformat())
        summary = {
            "status": "completed",
            "reviewed": len(rows),
            "merged_groups": len({m["survivor_id"] for m in merges}),
            "entries_marked_consolidated": len(merges),
            "threshold_days": threshold_days,
            "ran_at": now.isoformat(),
        }
        _audit(conn, "consolidate", None, json.dumps(summary))

    _write_consolidation_report(report_path, summary, merges)
    if merges:
        write_memory_md(db_path=db_path)
    return summary


# ─────────────────────────────────────────────────────────────────────────
# ██  CONVERSATION SUMMARY & POST-TURN HOOK
# ─────────────────────────────────────────────────────────────────────────

def summarize_conversation(turns: list) -> str:
    """Pure, no DB access. `turns` is a list of {"role", "content"} dicts
    (the same shape server.py's `conversations[sid]` already uses).
    Naive extractive summary: opener, any facts/preferences touched
    (reusing the extraction patterns), and how it ended."""
    if not turns:
        return ""

    def _role(t):
        return (t.get("role") or t.get("speaker") or "").lower()

    def _content(t):
        return t.get("content") or t.get("text") or t.get("message") or ""

    user_msgs = [_content(t) for t in turns if _role(t) == "user"]
    assistant_msgs = [_content(t) for t in turns if _role(t) in ("assistant", "vanta")]

    parts = [f"Conversation with {len(turns)} turn(s)."]
    if user_msgs:
        opener = user_msgs[0].strip().replace("\n", " ")
        suffix = "..." if len(opener) > 140 else ""
        parts.append(f'Opened with: "{opener[:140]}{suffix}"')

    topics, seen = [], set()
    for msg in user_msgs:
        for pattern in (_AM_RE, _LIKE_RE, _PREFER_RE):
            for m in pattern.finditer(msg):
                topic = _clean_capture(m.group(1))[:60]
                key = topic.lower()
                if topic and key not in seen:
                    seen.add(key)
                    topics.append(topic)
    if topics:
        parts.append("Touched on: " + "; ".join(topics[:5]) + ".")

    if assistant_msgs:
        closer = assistant_msgs[-1].strip().replace("\n", " ")
        suffix = "..." if len(closer) > 140 else ""
        parts.append(f'Ended with: "{closer[:140]}{suffix}"')

    return " ".join(parts)


def process_turn(user_text: str, assistant_text: str = "", db_path=None) -> list:
    """Post-turn hook: extract from the user text only, and only rewrite
    memory.md when something new was actually learned."""
    ids = []
    if user_text:
        ids += extract_memories(user_text, source="user_turn", db_path=db_path)
    if ids:
        write_memory_md(db_path=db_path)
    return ids


def stats(db_path=None) -> dict:
    """Counts by kind (active only), totals, and the key memory_meta
    pointers (last extraction, last consolidation)."""
    path = _resolve_path(db_path)
    with _Conn(path) as conn:
        counts = {
            row["kind"]: row["n"]
            for row in conn.execute(
                "SELECT kind, COUNT(*) as n FROM memory_entries WHERE consolidated=0 GROUP BY kind"
            ).fetchall()
        }
        total = conn.execute("SELECT COUNT(*) as n FROM memory_entries").fetchone()["n"]
        active = conn.execute("SELECT COUNT(*) as n FROM memory_entries WHERE consolidated=0").fetchone()["n"]
        return {
            "counts_by_kind": counts,
            "total_entries": total,
            "active_entries": active,
            "consolidated_entries": total - active,
            "last_extraction_id": _get_meta(conn, "last_extraction_id"),
            "last_extraction_time": _get_meta(conn, "last_extraction_time"),
            "last_consolidation_time": _get_meta(conn, "last_consolidation_time"),
            "fts5_available": _FTS_AVAILABLE,
            "db_path": str(path),
        }


# ─────────────────────────────────────────────────────────────────────────
# ██  SELF-TEST — python vanta_knowledge/memory.py
# ─────────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    stamp = datetime.now().strftime("%Y%m%d%H%M%S%f")
    tmp_dir = Path.cwd() / f"_vanta_memory_selftest_{stamp}"
    tmp_dir.mkdir(parents=True, exist_ok=True)
    tmp_db = tmp_dir / "vanta_memory.db"
    tmp_md = tmp_dir / "memory.md"
    tmp_report = tmp_dir / "memory_consolidation_report.md"

    print(f"[selftest] temp dir: {tmp_dir}")

    print("\n[1] init_db")
    init_db(tmp_db)
    print(f"    ok -> {tmp_db}")

    print("\n[2] add_memory (direct)")
    id1 = add_memory("fact", "Works on Vanta, a personal AI assistant.", "selftest", 0.95)
    print(f"    inserted id {id1}")

    print("\n[3] extract_memories (regex)")
    sample_text = (
        "My name is Akeem. I am a solo developer building AI products. "
        "I like jollof rice and I prefer working at night."
    )
    ids = extract_memories(sample_text, source="selftest")
    print(f"    inserted ids {ids}")

    print("\n[4] extract_memories again on the SAME text (dedup check)")
    ids_dup = extract_memories(sample_text, source="selftest")
    print(f"    inserted ids on repeat pass (expect []): {ids_dup}")

    print("\n[5] extract_memories (explicit list)")
    ids_explicit = extract_memories("", explicit=[
        {"kind": "skill", "content": "Comfortable with Flask and Socket.IO.", "confidence": 1.0},
        "Building a forex bot called Sentinel.",
    ], source="selftest")
    print(f"    inserted ids {ids_explicit}")

    print("\n[6] search_memories (FTS5 if available, else LIKE fallback)")
    for q in ("jollof", "developer", "sentinel", "nonexistentxyz"):
        results = search_memories(q, top_k=3)
        print(f"    query={q!r:16} -> {[r['content'] for r in results]}")

    print("\n[7] get_profile")
    print("    " + get_profile().replace("\n", "\n    "))

    print("\n[8] write_memory_md")
    write_memory_md(tmp_md)
    print(f"    wrote {tmp_md} ({tmp_md.stat().st_size} bytes)")

    print("\n[9] process_turn (should only touch memory.md because it's new info)")
    new_ids = process_turn("I prefer dark mode in every app I use.",
                            "Noted — I'll keep that in mind.")
    print(f"    new ids from process_turn: {new_ids}")

    print("\n[10] summarize_conversation")
    fake_turns = [
        {"role": "user", "content": "I like minimalist UIs."},
        {"role": "assistant", "content": "Got it — minimal it is."},
    ]
    print(f"    {summarize_conversation(fake_turns)!r}")

    print("\n[11] consolidate (forced, so it runs even on a fresh DB)")
    # High token overlap with id1's "Works on Vanta, a personal AI assistant."
    # so this cluster actually merges — demonstrates the threshold firing,
    # not just running.
    add_memory("fact", "Works on Vanta, a personal assistant.", "selftest", 0.5)
    summary = consolidate(threshold_days=30, force=True, report_path=tmp_report)
    print(f"    summary: {summary}")
    print(f"    report appended at: {tmp_report}")

    print("\n[12] consolidate again immediately WITHOUT force (should skip — threshold gate)")
    summary2 = consolidate(threshold_days=30, report_path=tmp_report)
    print(f"    summary: {summary2}")

    print("\n[13] stats")
    for k, v in stats().items():
        print(f"    {k}: {v}")

    print(f"\n[selftest] all steps completed OK. Inspect/delete {tmp_dir} at your leisure.")
