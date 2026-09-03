"""Vanta RAG Module — Keyword Matching (no downloads, works offline)
Drop-in replacement for the chromadb version: same import path
(vanta_knowledge.rag), same query_rag(msg, top_k) signature expected
by server.py, so nothing else needs to change.

Why keyword matching instead of chromadb embeddings: chromadb's default
embedder downloads a 79MB ONNX model on first run, which kept timing out
on a slow connection. This has zero downloads and works immediately.
"""

import logging
import re
import threading
from pathlib import Path


KNOWLEDGE_DIR = Path(__file__).parent
MAX_KNOWLEDGE_FILES = 500
MAX_KNOWLEDGE_FILE_SIZE = 2 * 1024 * 1024
logger = logging.getLogger(__name__)
_CACHE_LOCK = threading.RLock()
_CACHED_CHUNKS = None
_CACHED_SIGNATURE = None
_CACHE_UNAVAILABLE = False


def chunk_markdown(text: str, chunk_size: int = 600) -> list:
    sections = re.split(r'\n(?=\#{1,3} )', text)
    chunks = []
    for section in sections:
        if len(section.strip()) < 50:
            continue
        if len(section) <= chunk_size:
            chunks.append(section.strip())
        else:
            paragraphs = section.split('\n\n')
            current, current_len = [], 0
            for para in paragraphs:
                current.append(para)
                current_len += len(para)
                if current_len >= chunk_size:
                    chunks.append('\n\n'.join(current).strip())
                    current, current_len = [], 0
            if current:
                chunks.append('\n\n'.join(current).strip())
    return chunks


def _knowledge_files() -> tuple[list, bool]:
    """Return safe, bounded markdown files beneath KNOWLEDGE_DIR and scan failure flag."""
    knowledge_root = KNOWLEDGE_DIR.resolve()
    files = []
    scanned = 0
    scan_failed = False

    try:
        for filepath in KNOWLEDGE_DIR.rglob("*.md"):
            if scanned >= MAX_KNOWLEDGE_FILES:
                logger.warning(
                    "Knowledge scan capped at %d files under %s",
                    MAX_KNOWLEDGE_FILES,
                    knowledge_root,
                )
                break
            scanned += 1

            if filepath.is_symlink():
                logger.warning("Skipping symlink in knowledge directory: %s", filepath)
                continue

            try:
                resolved_path = filepath.resolve(strict=True)
                resolved_path.relative_to(knowledge_root)
                if not resolved_path.is_file():
                    continue
                if resolved_path.stat().st_size > MAX_KNOWLEDGE_FILE_SIZE:
                    logger.warning(
                        "Skipping oversized knowledge file (%d byte limit): %s",
                        MAX_KNOWLEDGE_FILE_SIZE,
                        resolved_path,
                    )
                    continue
            except ValueError:
                logger.warning(
                    "Skipping knowledge file outside KNOWLEDGE_DIR: %s", filepath
                )
                continue
            except (OSError, RuntimeError) as exc:
                logger.warning(
                    "Unable to validate knowledge file %s: %s",
                    filepath,
                    exc,
                    exc_info=True,
                )
                continue

            files.append(resolved_path)
    except OSError as exc:
        logger.warning(
            "Unable to complete knowledge directory scan under %s: %s",
            knowledge_root,
            exc,
            exc_info=True,
        )
        scan_failed = True

    return files, scan_failed


def load_knowledge_base() -> list:
    global _CACHED_CHUNKS, _CACHED_SIGNATURE, _CACHE_UNAVAILABLE
    files, scan_failed = _knowledge_files()
    if scan_failed:
        with _CACHE_LOCK:
            _CACHE_UNAVAILABLE = True
        return []
    signature = []
    try:
        signature = [(str(filepath), filepath.stat().st_mtime_ns, filepath.stat().st_size)
                     for filepath in files]
    except OSError as exc:
        logger.warning("Unable to inspect knowledge files: %s", exc)
        with _CACHE_LOCK:
            _CACHE_UNAVAILABLE = True
            _CACHED_CHUNKS = []
            _CACHED_SIGNATURE = None
        return []

    with _CACHE_LOCK:
        if _CACHED_CHUNKS is not None and _CACHED_SIGNATURE == signature:
            return _CACHED_CHUNKS

    chunks = []
    read_failed = False
    knowledge_root = KNOWLEDGE_DIR.resolve()
    for filepath in files:
        try:
            text = filepath.read_text(encoding='utf-8')
            for chunk in chunk_markdown(text):
                chunks.append({
                    "text": chunk,
                    "source": filepath.relative_to(knowledge_root).as_posix(),
                    "category": filepath.parent.name,
                })
        except (OSError, UnicodeDecodeError) as exc:
            read_failed = True
            logger.warning(
                "Unable to read knowledge file %s: %s",
                filepath,
                exc,
                exc_info=True,
            )
    with _CACHE_LOCK:
        _CACHED_CHUNKS = chunks
        _CACHED_SIGNATURE = signature
        _CACHE_UNAVAILABLE = read_failed
        return _CACHED_CHUNKS


def reload_knowledge_base() -> list:
    """Invalidate and rebuild the in-memory knowledge cache."""
    global _CACHED_CHUNKS, _CACHED_SIGNATURE
    with _CACHE_LOCK:
        _CACHED_CHUNKS = None
        _CACHED_SIGNATURE = None
    return load_knowledge_base()


def knowledge_status() -> str:
    """Return READY, EMPTY, or UNAVAILABLE based on the actual RAG state."""
    load_knowledge_base()
    if _CACHE_UNAVAILABLE:
        return "UNAVAILABLE"
    return "READY" if _CACHED_CHUNKS else "EMPTY"


def score_chunk(chunk: str, query_words: list) -> float:
    chunk_lower = chunk.lower()
    return sum(len(w) * chunk_lower.count(w) for w in query_words if w in chunk_lower)


def _categories_for_query(query_lower: str) -> set[str]:
    def matches(signal: str) -> bool:
        pattern = r"\b" + r"\s+".join(re.escape(part) for part in signal.split()) + r"\b"
        return re.search(pattern, query_lower) is not None

    signals = {
        'deployment': ('deploy', 'deployment', 'hosting', 'host', 'vercel', 'supabase',
                       'domain', 'dns', 'ssl', 'go live', 'production', 'launch',
                       'env variable', 'environment variable'),
        'ecommerce': ('cart', 'checkout', 'product grid', 'product card', 'e-commerce',
                      'ecommerce', 'online store', 'variant', 'size selector',
                      'add to cart', 'wishlist'),
        'webdev': ('website', 'ui', 'frontend', 'html', 'css', 'design', 'landing',
                   'portfolio', 'animation', 'layout', 'navbar', 'hero', 'card', 'dark',
                   'cinematic', 'glassmorphism', 'cursor', 'accessibility', 'a11y',
                   'alt text', 'screen reader', 'contrast', 'keyboard nav', 'aria',
                   'focus state', 'restaurant', 'menu', 'reservation', 'school',
                   'enrollment', 'tuition', 'repair shop', 'salon', 'clinic', 'booking',
                   'appointment', 'local business', 'small business', 'gym', 'fitness',
                   'law firm', 'lawyer', 'attorney', 'dentist', 'doctor',
                   'medical practice', 'photographer', 'photography', 'real estate',
                   'contractor', 'plumber', 'electrician', 'event planner', 'bakery',
                   'cafe', 'hotel', 'spa', 'non-profit', 'church', 'service business'),
        'security': ('security', 'vulnerability', 'xss', 'injection', 'auth', 'login',
                     'password', 'token', 'sanitize', 'secure', 'encrypt', 'cors', 'csrf'),
        'databases': ('database', 'db', 'sql', 'postgres', 'sqlite', 'firebase', 'schema',
                      'query', 'migration', 'table', 'index', 'orm'),
    }
    return {category for category, category_signals in signals.items()
            if any(matches(signal) for signal in category_signals)}


def query_rag(query: str, top_k: int = 3) -> str:
    """Main entry point — matches the signature server.py already imports."""
    if type(top_k) is not int:
        raise TypeError("top_k must be a non-negative int")
    if top_k < 0:
        raise ValueError("top_k must be a non-negative int")

    all_chunks = load_knowledge_base()
    if not all_chunks:
        return ""

    categories = _categories_for_query(query.lower())
    pool = [c for c in all_chunks if c["category"] in categories] if categories else all_chunks
    if categories and not pool:
        pool = all_chunks

    stopwords = {'a','an','the','and','or','but','in','on','at','to','for','of',
                 'with','by','from','is','it','me','my','build','make','create',
                 'write','i'}
    query_words = [w for w in re.findall(r'\w+', query.lower())
                   if len(w) > 2 and w not in stopwords]
    if not query_words:
        return ""

    scored = [(c, score_chunk(c["text"], query_words)) for c in pool]
    scored = [(c, s) for c, s in scored if s > 0]
    scored.sort(key=lambda x: x[1], reverse=True)
    top = scored[:top_k]
    if not top:
        return ""

    return "\n\n---\n\n".join(f"[From: {c['source']}]\n{c['text']}" for c, _ in top)


# Kept for compatibility with the terminal agent (agent_v10_1.py), which
# calls this name directly instead of query_rag.
def get_context_for_task(task: str) -> str:
    return query_rag(task, top_k=4)


def index_knowledge_base(force_reindex: bool = False):
    """No-op for keyword matching — nothing to pre-index. Kept so any code
    that calls this on startup (both server.py and agent_v10_1.py do) doesn't break."""
    chunks = load_knowledge_base()
    n_files = len({chunk["source"] for chunk in chunks})
    if chunks:
        print(f"🧠 Knowledge base loaded: {len(chunks)} chunks from {n_files} files.")
    else:
        print("⚠️  No knowledge base files found.")


if __name__ == "__main__":
    index_knowledge_base()
    print(query_rag("dark cinematic portfolio animations", top_k=2))
