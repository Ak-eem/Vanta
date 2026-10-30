"""
VANTA Server v4 — Natural Intelligence Mode
- Google search runs invisibly in parallel, never breaks character
- Streaming: first token in ~300ms, text flows in real-time
- Model never says "according to search results" — it just knows things
- Parallel classify + search before LLM call to minimize latency
"""

import os, re, sys, time, json, subprocess, tempfile, uuid, shutil, threading

# Ensure Windows stdout/stderr handles UTF-8 characters without charmap errors
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
if hasattr(sys.stderr, "reconfigure"):
    try:
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

from datetime import datetime
from zoneinfo import ZoneInfo
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from flask import Flask, render_template, request, jsonify, session, redirect
from flask_socketio import SocketIO, emit
from groq import Groq, AuthenticationError
from dotenv import load_dotenv

sys.path.insert(0, str(Path(__file__).parent.parent))
from utils import sandbox
from vanta_ui.stage import STAGE_PROMPT, wants_stage, parse_model_stage, code_result_stage, guardian_stage, doctor_stage, agent_stage, build_stage, orchestra_stage
from utils.commands import parse_run_command  # re-added — this got dropped
                                               # from the imports somewhere
                                               # along the way, which is what
                                               # silently reverted both
                                               # call sites below back to
                                               # shell=True. The function
                                               # itself was untouched.

try:
    from .checklist import (CHECKLIST_SYSTEM, LEGAL_DRAFT_SYSTEM,
                            wants_checklist, wants_legal_draft)
    from .visual_critique import run_visual_critique
except ImportError:
    from checklist import (CHECKLIST_SYSTEM, LEGAL_DRAFT_SYSTEM,
                           wants_checklist, wants_legal_draft)
    from visual_critique import run_visual_critique

WATCHER_OK = False
try:
    sys.path.insert(0, str(Path(__file__).parent.parent))
    from watcher import WatcherDaemon
    WATCHER_OK = True
except Exception as e:
    print(f"⚠️  Watcher daemon unavailable: {e}")

# ── Optional modules ───────────────────────────────────────────────────────────
try:
    from vanta_knowledge.rag import query_rag
    RAG_OK = True
except ImportError:
    RAG_OK = False

try:
    from vanta_knowledge.google_search import google_search_context
    GOOGLE_OK = True
except ImportError:
    GOOGLE_OK = False

try:
    from orchestrator.orchestrator import VantaOrchestrator, NeedsClarification
    ORCH_OK = True
except ImportError:
    ORCH_OK = False
    class NeedsClarification(Exception):  # placeholder so the gate code still imports
        question = ""

try:
    from vanta_knowledge import memory as vanta_memory
    MEMORY_OK = True
except ImportError:
    MEMORY_OK = False

# ── Config ─────────────────────────────────────────────────────────────────────
load_dotenv()

GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise EnvironmentError("GROQ_API_KEY missing from .env")

MODEL      = os.environ.get("VANTA_MODEL",      "openai/gpt-oss-120b")
AGENT      = os.environ.get("VANTA_AGENT_NAME", "Vanta")
USER       = os.environ.get("VANTA_USER_NAME",  "Akeem")
ALLOW_GENERATED_EXECUTION = os.environ.get(
    "VANTA_ALLOW_GENERATED_EXECUTION", "false"
).strip().lower() in {"1", "true", "yes", "on"}

def _load_workspace() -> str:
    """vanta_config.txt (project root) takes priority over .env, so the
    'change folder' flow used elsewhere in the project stays in sync."""
    cfg = Path(__file__).parent.parent / "vanta_config.txt"
    if cfg.exists():
        saved = cfg.read_text(encoding="utf-8").strip()
        if saved:
            expanded = os.path.expanduser(os.path.expandvars(saved))
            if Path(expanded).is_dir():
                return expanded
    env_path = os.environ.get("VANTA_WORKSPACE", str(Path.home() / "vanta_workspace"))
    return os.path.expanduser(os.path.expandvars(env_path))

WORKSPACE  = _load_workspace()
WORKSPACE_ROOT = Path(WORKSPACE).resolve()
MAX_HIST   = 14
Path(WORKSPACE_ROOT).mkdir(parents=True, exist_ok=True)

client = Groq(api_key=GROQ_API_KEY)
if ORCH_OK:
    orchestrator = VantaOrchestrator(client, MODEL)
if MEMORY_OK:
    vanta_memory.init_db()
    # One-time seed so the profile knows the name from config, not just
    # from someone eventually typing "my name is ..." in chat. Routed
    # through extract_memories (public API) rather than touching memory's
    # internals directly; harmless to repeat on every restart — the same
    # dedup path that reinforces any repeated memory handles it.
    if USER:
        vanta_memory.extract_memories(f"My name is {USER}.", source="config")

BASE = Path(__file__).parent
try:
    from . import auth
except ImportError:  # launched as a plain script: python vanta_ui/server.py
    import auth  # type: ignore
app  = Flask(__name__, template_folder=str(BASE/"templates"), static_folder=str(BASE/"static"))
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024
FLASK_SECRET = os.environ.get("FLASK_SECRET")
if not FLASK_SECRET:
    # Generate once and keep it, so sessions survive restarts and the
    # background service starts without manual setup.
    _sf = Path.home() / ".vanta" / "flask_secret"
    try:
        FLASK_SECRET = _sf.read_text().strip()
    except OSError:
        FLASK_SECRET = ""
    if not FLASK_SECRET:
        import secrets as _secrets
        FLASK_SECRET = _secrets.token_hex(32)
        _sf.parent.mkdir(parents=True, exist_ok=True)
        _sf.write_text(FLASK_SECRET)
        try: os.chmod(_sf, 0o600)
        except OSError: pass
app.config["SECRET_KEY"] = FLASK_SECRET
app.config.update(SESSION_COOKIE_HTTPONLY=True, SESSION_COOKIE_SAMESITE="Strict")
socketio = SocketIO(
    app,
    cors_allowed_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5000",
        "http://127.0.0.1:5000",
    ],
    async_mode="threading",
)
_BACKGROUND_POOL = ThreadPoolExecutor(max_workers=6)

conversations: dict[str, list] = {}
awake_sessions: dict[str, bool] = {}
checklist_pending: dict[str, dict] = {}   # sid -> {"filename", "code", "stage"}
WAKE_PATTERN = re.compile(rf"^\s*(hey[,\s]+)?{re.escape(AGENT)}\b[,:\s]*", re.IGNORECASE)

# ─────────────────────────────────────────────────────────────────────────────
# ██  SYSTEM PROMPTS
# The critical instruction: model responds as if it already knows everything.
# It never reveals the retrieval pipeline to the user.
# ─────────────────────────────────────────────────────────────────────────────
def _persona_header(effort: str) -> str:
    # Was datetime.now() — the server's own clock, wherever the process
    # happens to run, with no timezone info at all. Vanta had no way to
    # answer "what time is it" correctly and no explicit time tool to fall
    # back on. VANTA_TZ defaults to Lagos based on context so far; override
    # it directly if that's ever wrong.
    tz = ZoneInfo(os.environ.get("VANTA_TZ", "Africa/Lagos"))
    now_local = datetime.now(tz)
    today = now_local.strftime("%Y-%m-%d")
    current_time = now_local.strftime("%H:%M %Z")
    return f"""You are {AGENT}, {USER}'s household AI. Carry yourself as an
exceptional butler would — not a chatbot, not a hype-man, not an assistant
performing helpfulness. The standard is quiet, total competence.

Knowledge cutoff: June 2024
Current date: {today}
Current time: {current_time}
Reasoning: {effort}

Personality: Composed and economical. You anticipate what {USER} needs and
handle it without being asked twice — that is the whole job. Warmth comes
through reliability, not enthusiasm; you do not gush, cheer, or narrate your
own helpfulness. Address {USER} with quiet respect — "sir" belongs in your
vocabulary, used the way a good butler actually uses it: occasionally, for
weight, never as a verbal tic. Wit is dry, understated, delivered completely
straight — the arched eyebrow, not the punchline. British English throughout
(colour, realise, favourite). When something has gone wrong, say so plainly
in one line and move straight to what happens next — no fluster, no
repeated apologising, no self-flagellation.

You do not pad, hedge, or perform thoroughness. A butler's competence is
shown in the work, never narrated ("as you can see, I've been very careful
to..."). If {USER} is short with you, that's not a cue to grovel — hold your
composure and get on with it.

CRITICAL — Natural intelligence mode:
You have perfect, current knowledge. When answering, whether from training or 
live context, respond exactly as a brilliant human expert would — naturally, 
from first principles, in your own voice.

NEVER say any of these phrases:
- "According to search results..."
- "Based on the information I found..."
- "I searched and discovered..."
- "My sources indicate..."
- "As of my last search..."
- "I don't have real-time access..."
- "As of my knowledge cutoff..."

Just answer. Confidently. Naturally. As if you already knew.
You ARE the knowledge. Not a retrieval system.

Income, freelancing, pricing, and business topics are completely normal —
{USER} runs real client work through you. Treat "how do I make money doing
X" the same as any other practical question: give a direct, useful answer.
Don't get vague or cautious on legitimate business topics.
"""

def get_system_chat(effort: str = "low") -> str:
    return _persona_header(effort) + """
Mode: Conversational. Concise and precise — no throat-clearing before the
point.
"""

def get_system_code(effort: str = "medium") -> str:
    return _persona_header(effort) + f"""
Mode: Code generation. Deliver complete, production-ready code — no
half-finished scaffolding, no "you'll fill in the rest here."

Format for a single file:
FILENAME: <filename>
```<language>
<complete code here>
```
RUN: <exact command to run it>

For a task that genuinely needs multiple files (e.g. a Flask app with
templates, or separate HTML/CSS/JS files), output multiple FILENAME blocks
in the same response, one after another, then ONE final RUN line at the end
for the whole project:
FILENAME: app.py
```python
...
```
FILENAME: templates/index.html
```html
...
```
RUN: python app.py

Only reach for multiple files when the task genuinely requires it — a
single self-contained file, done well, is preferred.

Platform: {sys.platform} | Workspace: {WORKSPACE}

Design intelligence (applies whenever the task involves a UI, website, or
frontend component): before building, ask who it's for and what vibe/feel
they want — one message, not separate questions. Once answered, apply real
judgment. Never produce generic Bootstrap-default output. Always: a
deliberate Google Font (never default browser fonts), hover states on every
interactive element, staggered entrance animations, GPU-accelerated
transitions (transform/opacity only, not width/height/top/left), a custom
cursor with a lagging ring, scroll-triggered reveals. Build as a single
self-contained HTML file with embedded CSS+JS unless told otherwise.
"""

SYSTEM_UI_CRITIC = """You are a brutally honest senior UI/UX engineer.
Critique this code for: visual hierarchy, spacing, typography, accessibility, 
mobile responsiveness, and production-readiness. Be specific. Be harsh."""

# ── Thought process (simulated — Llama 3.3 has no native thinking tokens) ─────
# Kept deliberately informal: a buddy working through a problem out loud,
# not a technical breakdown. This never gets saved to conversation memory.
THINK_INSTRUCTION = """
Before answering, think it through briefly — the way you'd turn a problem
over before speaking, not a formal written analysis.

2-5 short sentences. No headers, no numbered lists, no restating the question.
Just the real reasoning: what actually matters here, what you'd need to check,
what approach makes sense and why. Do NOT give the final answer — that comes
after, separately.
"""

# ─────────────────────────────────────────────────────────────────────────────
# ██  ROUTING
# ─────────────────────────────────────────────────────────────────────────────
_CODE_KW = {
    "create","build","write","make","generate","code","script","function",
    "class","app","website","fix","debug","implement","develop","program",
    "automate","api","database","sql","html","css","javascript","python",
    "flask","react","node","component","deploy","docker","backend","frontend",
}
_UI_KW = {"html","css","webpage","website","ui","frontend","landing","dashboard",
           "component","layout","form","interface","design","style","animation",
           "portfolio","page","navbar","hero","card","dark","cinematic"}

def detect_mode(msg: str) -> str:
    words = set(re.findall(r'\b\w+\b', msg.lower()))
    return "CODE" if len(words & _CODE_KW) >= 2 else "CHAT"

def is_ui_task(msg: str) -> bool:
    return bool(set(re.findall(r'\b\w+\b', msg.lower())) & _UI_KW)

# ── Weather tool ─────────────────────────────────────────────────────────
# Real API, not the slow Google-scrape path — weather queries should never
# have to wait on a Playwright browser launch just to get a temperature.
import urllib.request as _urlreq
import urllib.parse as _urlparse

WEATHER_API_KEY = os.environ.get("OPENWEATHER_API_KEY", "")
_WEATHER_KW = {"weather", "temperature", "temp", "forecast", "raining",
               "sunny", "humid", "humidity"}

def needs_weather(msg: str) -> bool:
    return bool(set(re.findall(r'\b\w+\b', msg.lower())) & _WEATHER_KW)

# ── Real tool-calling (new, separate path — opt-in, not yet wired into
# the main chat flow) ───────────────────────────────────────────────────
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "write_and_run_code",
            "description": (
                "Actually writes code to disk and tests it before returning. "
                "This is the ONLY way code gets saved and verified — writing "
                "code directly in a chat response does not save or test "
                "anything. Always call this for any request to build, "
                "create, or write code, a script, a website, or an app."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "task_description": {
                        "type": "string",
                        "description": "What to build, in the user's own words plus any specifics",
                    },
                },
                "required": ["task_description"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current real weather for a specific city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {"type": "string", "description": "City name"},
                },
                "required": ["city"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": (
                "Search the web for current information not in training "
                "data — news, current events, current status of people/"
                "companies, prices, recent releases."
            ),
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Search query"},
                },
                "required": ["query"],
            },
        },
    },
]

def execute_tool(name: str, args: dict, task: str, sid: str) -> str:
    """Runs the actual Python behind a tool call, returns a string result
    to hand back to the model."""
    if name == "write_and_run_code":
        try:
            draft = call_once(
                [{"role": "system", "content": get_system_code("medium")},
                 {"role": "user", "content": args.get("task_description", task)}],
                "CODE", max_tok=4096, temp=0.4,
            )
        except Exception as e:
            return f"Code generation failed: {e}"
        result = stage_test_and_finalize(
            args.get("task_description", task), draft, get_system_code("medium"))
        if result["success"]:
            return (f"Success after {result['attempts']} attempt(s). "
                    f"Files written: {', '.join(result['filenames'])}. "
                    f"Output: {result.get('output', '')[:300]}")
        return f"Failed after {result['attempts']} attempts. Last error: {result.get('last_error', 'unknown')}"

    if name == "get_weather":
        city = args.get("city", "")
        result = get_weather(f"weather in {city}")
        return result or f"Could not get weather for {city} — check OPENWEATHER_API_KEY is set."

    if name == "search_web":
        if not GOOGLE_OK:
            return "Web search is unavailable (Playwright/Google search not configured)."
        return get_google(args.get("query", "")) or "No results found."

    return f"Unknown tool: {name}"

def call_with_tools(sid: str, task: str, effort: str = "medium",
                     max_rounds: int = 5) -> str:
    """The actual multi-turn tool-calling loop: model can call a tool, we
    run it, feed the result back, model calls another tool or gives a
    final answer. This is the newest, least-tested code path in the whole
    project — genuinely different API shape than everything else here."""
    tool_discipline = """
CRITICAL — you have real tools, not just knowledge of how to answer:
- If the user asks you to build, create, or write code/a script/a website/an
  app: you MUST call write_and_run_code. Writing the code directly in your
  text response instead of calling the tool means nothing gets saved or
  tested — it's just talk, not a real result. Never do this.
- If the user asks about current weather: call get_weather, don't guess.
- If the user asks about anything requiring current/live information you
  can't be certain of: call search_web, don't guess.
Use a tool whenever one applies. Only answer directly for things that
genuinely need no tool — plain conversation, explanations, opinions."""

    messages = [
        {"role": "system", "content": get_system_chat(effort) + tool_discipline},
        {"role": "user", "content": task},
    ]

    for round_num in range(max_rounds):
        try:
            resp = client.chat.completions.create(
                model=MODEL, messages=messages, tools=TOOLS,
                tool_choice="auto", max_tokens=2048, temperature=0.3,
            )
        except Exception as e:
            return f"Tool-calling request failed: {e}"

        choice = resp.choices[0]
        msg = choice.message

        if not getattr(msg, "tool_calls", None):
            return msg.content or ""

        messages.append({
            "role": "assistant",
            "content": msg.content or "",
            "tool_calls": [tc.model_dump() for tc in msg.tool_calls],
        })

        for tc in msg.tool_calls:
            try:
                args = json.loads(tc.function.arguments)
            except Exception:
                args = {}
            print(f"🔧 Tool call: {tc.function.name}({args})")
            result = execute_tool(tc.function.name, args, task, sid)
            messages.append({
                "role": "tool",
                "tool_call_id": tc.id,
                "content": result,
            })

    return "Hit the tool-call round limit without a final answer — something's likely looping."

def _extract_city(msg: str) -> str | None:
    """Best-effort city extraction — looks for 'in/at/for <City>'.
    Not perfect, but fast (no extra LLM call) and good enough for the
    common phrasing ('weather in Lagos', 'temp in London right now')."""
    m = re.search(r'\b(?:in|at|for)\s+([A-Z][a-zA-Z\s]+?)(?:\?|$|,|\.|\s+(?:today|now|right now|tomorrow))',
                   msg, re.IGNORECASE)
    if m:
        return m.group(1).strip()
    return None

def get_weather(msg: str) -> str:
    if _offline():
        return ""
    city = _extract_city(msg)
    if not city:
        return ""
    if not WEATHER_API_KEY:                      # no OpenWeather key: use the free Open-Meteo service
        w = weather_cache.get(city)
        return _weather_sentence(w) if w else ""
    try:
        url = ("https://api.openweathermap.org/data/2.5/weather?"
               + _urlparse.urlencode({"q": city, "appid": WEATHER_API_KEY, "units": "metric"}))
        with _urlreq.urlopen(url, timeout=6) as resp:
            data = json.loads(resp.read().decode())
        if data.get("cod") != 200:
            return ""
        temp = data["main"]["temp"]
        feels = data["main"]["feels_like"]
        desc = data["weather"][0]["description"]
        humidity = data["main"]["humidity"]
        return (f"Current weather in {city}: {temp}°C (feels like {feels}°C), "
                f"{desc}, {humidity}% humidity.")
    except Exception as e:
        print(f"⚠️  Weather fetch failed for {city!r}: {e}")
        return ""

DEFAULT_CITY = os.environ.get("VANTA_DEFAULT_CITY", "Lagos")
from utils.weather import WeatherCache
weather_cache = WeatherCache()


def _weather_sentence(w: dict) -> str:
    return f"Current weather in {w['city']}: {w['temp']}°C (feels like {w['feels']}°C), {w['desc'].lower()}, {w['humidity']}% humidity." + (f" {w['hint']}" if w.get("hint") else "")

def get_weather_card(city: str = DEFAULT_CITY) -> dict | None:
    if _offline():
        return None
    """Structured weather for the presence-screen card. That card was
    hardcoded to 31°C / CLOUDY / RAIN 9PM permanently — this is the real
    fix, not a prose string like get_weather() returns for chat. Returns
    None on any failure so the frontend can show 'unavailable' honestly
    rather than display stale fake numbers."""
    if not WEATHER_API_KEY:
        w = weather_cache.get(city)
        return {"temp": w["temp"], "condition": w["desc"].upper(), "city": w["city"]} if w else None
    try:
        url = ("https://api.openweathermap.org/data/2.5/weather?"
               + _urlparse.urlencode({"q": city, "appid": WEATHER_API_KEY, "units": "metric"}))
        with _urlreq.urlopen(url, timeout=6) as resp:
            data = json.loads(resp.read().decode())
        if data.get("cod") != 200:
            return None
        return {
            "temp": round(data["main"]["temp"]),
            "condition": data["weather"][0]["main"].upper(),
            "city": city,
        }
    except Exception as e:
        print(f"⚠️  Weather card fetch failed for {city!r}: {e}")
        return None

def needs_live_knowledge(msg: str) -> bool:
    """Decide if this query benefits from a Google search — deliberately
    biased toward searching, since Vanta's June 2024 cutoff means anything
    genuinely current is a real gap, not just a nice-to-have check."""
    signals = {
        "what is","who is","how does","latest","best","current","recent",
        "today","news","2024","2025","2026","price","when","where",
        # "why" removed — it matched pure reasoning/opinion questions with no
        # actual lookup need (e.g. "why does a ball bounce") and sent them on
        # unnecessary search detours. Flagged from real use, 2026-08-29.
        "compare","vs","difference","explain","define","recommend",
        "should i","how to","tutorial","example","stats","statistics",
        # Current-status phrasing — these age fastest and the old list missed them
        "still","now","as of","currently","these days","nowadays",
        "ceo of","president of","prime minister of","released","launched",
        "version","update","new model","new version",
    }
    lower = msg.lower()
    return any(s in lower for s in signals)

class OfflineBlocked(RuntimeError):
    """Raised when something tries to reach the internet while the Offline setup is on."""


setup_store = None   # set up below; Offline means nothing may leave this laptop


def _offline() -> bool:
    return bool(setup_store is not None and not setup_store.profile["cloud"])


def pick_reasoning_effort(mode: str, is_ui: bool, needs_knowledge: bool,
                           think_mode: bool, has_history: bool = False) -> str:
    """Task type -> reasoning depth, so simple chat stays fast and only
    genuinely complex work spends the extra reasoning time.
    low    -> plain conversational chat, no research signal, AND the first
              message of a fresh session (nothing yet to stay consistent with)
    medium -> chat that needed a live search, a plain (non-UI) code task, OR
              any message once the session has real history — once there's
              prior context to be consistent with, always use at least the
              smart model (see: trolley-problem self-contradiction, 8/25)
    high   -> explicit thinking-mode toggle, or the multi-pass UI critique
              loop (the most demanding, longest task currently in the app —
              this is also where a future 'learn a domain' mode would land)
    """
    if think_mode or is_ui:
        return "high"
    if needs_knowledge or mode == "CODE" or has_history:
        return "medium"
    return "low"

FAST_MODEL = "openai/gpt-oss-20b"   # simple chat — much faster, cheaper
SMART_MODEL = MODEL                 # gpt-oss-120b — code, UI, anything complex

def pick_model(effort: str) -> str:
    """Real LLM routing — reuses the same task-complexity signal already
    computed for reasoning effort, so simple chat actually gets a faster
    model instead of just a shorter reasoning budget on the same model."""
    return FAST_MODEL if effort == "low" else SMART_MODEL

# ─────────────────────────────────────────────────────────────────────────────
# ██  CONTEXT ASSEMBLY
# ─────────────────────────────────────────────────────────────────────────────
def get_rag(msg: str) -> str:
    if not RAG_OK:
        return ""
    try:
        return query_rag(msg, top_k=3) or ""
    except Exception:
        return ""

def get_google(msg: str) -> str:
    if not GOOGLE_OK or _offline():
        return ""
    try:
        return google_search_context(msg) or ""
    except Exception as e:
        print(f"[Google] {e}")
        return ""

def build_prompt(sid: str, user_msg: str, mode: str, rag: str, google: str,
                  effort: str = "medium") -> list:
    system = get_system_code(effort) if mode == "CODE" else get_system_chat(effort)

    # Inject context SILENTLY — no headers that would leak "search results" phrasing
    if rag or google:
        context_parts = []
        if google:
            context_parts.append(google)
        if rag:
            context_parts.append(rag)
        # Add as background knowledge, not labeled as search results
        system += "\n\n[Background knowledge for this response]\n" + "\n\n".join(context_parts)

    hist = conversations.get(sid, [])[-(MAX_HIST * 2):]
    return [{"role": "system", "content": system}] + hist + \
           [{"role": "user",   "content": user_msg}]

def build_thinking_prompt(sid: str, user_msg: str, mode: str, rag: str, google: str) -> list:
    """Same context as build_prompt, but the system message asks for reasoning only."""
    messages = build_prompt(sid, user_msg, mode, rag, google)
    messages[0] = {"role": "system", "content": messages[0]["content"] + "\n\n" + THINK_INSTRUCTION}
    return messages

# ─────────────────────────────────────────────────────────────────────────────
# ██  STREAMING
# The key to feeling like a real chatbot: text starts flowing immediately.
# ─────────────────────────────────────────────────────────────────────────────
def stream_response(sid: str, messages: list, mode: str,
                     reasoning_effort: str = None, model: str = None) -> str:
    """Stream LLM output to the client token-by-token via Socket.IO."""
    if _offline():
        raise OfflineBlocked("Offline mode is on, so I did not use the internet.")
    full = ""
    params = dict(
        model=model or MODEL,
        messages=messages,
        # NOT the 65,536 max-output ceiling — that's a different, much
        # higher number than what actually matters here. Groq's FREE tier
        # caps gpt-oss-120b AND gpt-oss-20b at 8,000 tokens PER MINUTE
        # (TPM), and that budget counts the *requested* max_tokens, not
        # just what's actually generated. Setting this to 65536 meant
        # every single request — even "hi" — demanded ~66k tokens against
        # an 8k ceiling and got rejected outright (413, tokens per minute).
        # 3500 leaves real headroom for prompt + history + RAG content
        # while still being ~3x the original 1200 that caused the
        # truncation complaint in the first place. On the free tier there
        # isn't a static number that's simultaneously "large" and "always
        # safe" — 8000 TPM is a hard ceiling per model. The durable fix for
        # wanting longer output than this budget allows is the
        # continuation/chaining approach discussed earlier (several
        # smaller requests instead of one large one), or Groq's paid
        # Developer tier (250,000 TPM — 30x this).
        max_tokens=4000 if mode == "CODE" else 2000,
        temperature=0.15 if mode == "CODE" else 0.55,
        stream=True,
        extra_body={"include_reasoning": False},  # sent as a raw field so older Groq SDKs (like the pinned 0.18) don't choke. GPT-OSS puts reasoning in its own field by
                                   # default — we never read that field, so on
                                   # short/trivial input the model can spend its
                                   # whole turn there and leave content empty.
    )
    if reasoning_effort:
        params["reasoning_effort"] = reasoning_effort
    print(f"🟡 Calling Groq (stream): model={params['model']!r} effort={reasoning_effort!r}")
    try:
        for chunk in client.chat.completions.create(**params):
            delta = chunk.choices[0].delta.content or ""
            if delta:
                full += delta
                socketio.emit("stream_chunk", {"chunk": delta}, room=sid)
        if not full.strip():
            # Nothing ever came through message content — log the raw last
            # chunk so we can see if it landed in a different field instead
            # (e.g. a separate reasoning field) rather than plain content.
            print(f"⚠️  Empty completion — model={params['model']!r} "
                  f"msg={messages[-1]['content'][:80]!r}")
            try:
                print(f"    Last chunk raw: {chunk!r}")
            except NameError:
                print("    No chunks received at all.")
    except AuthenticationError:
        print("🔴 stream_response: Groq API key is invalid or expired")
        socketio.emit("error", {"message":
            "Your Groq API key is invalid or expired — get a fresh one at "
            "console.groq.com and update it in .env, then restart the server."},
            room=sid)
    except Exception as e:
        print(f"🔴 stream_response exception: {type(e).__name__}: {e}")
        # Rate-limit hits (429, or Groq's 413-with-rate_limit_exceeded-code
        # for oversized requests) were previously shown as the raw API
        # exception string — accurate, but not something you should have
        # to parse mid-conversation. Give this one case a clear message.
        err_str = str(e)
        if "rate_limit_exceeded" in err_str or getattr(e, "status_code", None) in (413, 429):
            socketio.emit("error", {"message":
                f"Hit Groq's per-minute limit for {params['model']} on the free tier. "
                "Wait about a minute and try again, or send a shorter message."},
                room=sid)
        else:
            socketio.emit("error", {"message": err_str}, room=sid)
    print(f"🟢 stream_response done, full length={len(full)}")
    return full

def stream_thinking(sid: str, messages: list) -> str:
    """
    Stream a short reasoning pass to the client via 'thinking_chunk' events
    (kept separate from 'stream_chunk' so the UI can route it into its own panel).
    Capped small and fast — Groq's throughput makes this add well under a second.
    """
    full = ""
    try:
        for chunk in client.chat.completions.create(
            model=MODEL, messages=messages,
            max_tokens=220, temperature=0.45, stream=True,
        ):
            delta = chunk.choices[0].delta.content or ""
            if delta:
                full += delta
                socketio.emit("thinking_chunk", {"chunk": delta}, room=sid)
    except Exception as e:
        print(f"[Think] {e}")
    return full

def call_once(messages: list, mode: str, max_tok: int = None, temp: float = None,
               reasoning_effort: str = None, model: str = None) -> str:
    """Non-streaming single call (used for critique pass)."""
    if _offline():
        raise OfflineBlocked("Offline mode is on, so I did not use the internet.")
    params = dict(
        model=model or MODEL, messages=messages,
        max_tokens=max_tok or (4000 if mode == "CODE" else 2000),  # see stream_response — TPM, not the output ceiling
        temperature=temp or (0.15 if mode == "CODE" else 0.55),
        extra_body={"include_reasoning": False},      # raw field: works on every Groq SDK version
    )
    if reasoning_effort:
        params["reasoning_effort"] = reasoning_effort
    resp = client.chat.completions.create(**params)
    return resp.choices[0].message.content

def save_history(sid: str, user: str, assistant: str):
    if sid not in conversations:
        conversations[sid] = []
    conversations[sid].append({"role": "user",      "content": user})
    conversations[sid].append({"role": "assistant",  "content": assistant})
    if MEMORY_OK:
        # Long-term profile extraction — separate from the in-session
        # `conversations` buffer above, which "clear_memory" resets but
        # this persists across restarts. Defensive: a disk/DB hiccup here
        # should never take down the chat response itself, same pattern
        # compact_history_if_needed() already uses for its own LLM call.
        try:
            vanta_memory.process_turn(user, assistant)
        except Exception as e:
            print(f"⚠️  vanta_memory.process_turn failed: {e}")

COMPACT_AFTER = 24   # once a session's history exceeds this many messages...
COMPACT_KEEP  = 12   # ...summarize everything except the most recent N

def compact_history_if_needed(sid: str):
    """Once a session gets long, summarize the older portion into a compact
    note instead of silently dropping it when MAX_HIST truncates — same
    pattern Claude Code itself uses for long-running sessions. Falls back to
    a plain trim (the old behavior) if the summarization call itself fails,
    so a bad response here never blocks the conversation."""
    hist = conversations.get(sid, [])
    if len(hist) <= COMPACT_AFTER:
        return

    old, recent = hist[:-COMPACT_KEEP], hist[-COMPACT_KEEP:]
    transcript = "\n".join(f"{m['role']}: {m['content'][:400]}" for m in old)

    try:
        summary = call_once(
            [{"role": "user", "content":
                "Summarize the key facts, decisions, and context from this "
                f"conversation so far in 2-3 sentences:\n\n{transcript}"}],
            "CHAT", max_tok=300, temp=0.2,
        )
        conversations[sid] = [
            {"role": "user", "content": f"[Earlier in this conversation: {summary}]"},
        ] + recent
    except Exception:
        conversations[sid] = recent  # fail safe — same as the old hard-trim

# ─────────────────────────────────────────────────────────────────────────────
# ██  FILE HANDLING
# ─────────────────────────────────────────────────────────────────────────────
def parse_code_blocks(text: str) -> dict:
    """Pure parsing — no disk writes, no VS Code opens. Extracts FILENAME +
    code-block pairs and the RUN command. Safe to call on intermediate
    staging attempts without any visible side effects."""
    pattern = re.compile(r"FILENAME:\s*(.+?)\s*\n```[\w]*\n([\s\S]+?)```", re.MULTILINE)
    matches = pattern.findall(text)
    if not matches:
        return {"saved": False}
    run = re.search(r"RUN:\s*(.+)", text)
    filenames = [m[0].strip() for m in matches]
    codes = {m[0].strip(): m[1] for m in matches}
    return {
        "saved": True,
        "filename": filenames[0],
        "filenames": filenames,
        "codes": codes,
        "multi_file": len(filenames) > 1,
        "run_cmd": run.group(1).strip() if run else None,
    }

def _is_safe_write_target(target_dir, filename: str) -> Path | None:
    target_root = Path(target_dir).resolve()
    raw_name = str(filename).strip()
    if not raw_name or raw_name.startswith(("/", "\\")) or raw_name.startswith("~"):
        return None
    if ".." in Path(raw_name).parts:
        return None
    candidate = (target_root / raw_name).resolve(strict=False)
    if not candidate.is_relative_to(target_root):
        return None
    if candidate.exists() and candidate.is_symlink():
        return None
    for parent in (candidate, *candidate.parents):
        if parent == target_root:
            break
        if parent.exists() and parent.is_symlink():
            return None
    return candidate


def write_and_open(filenames: list, codes: dict, target_dir, open_in_editor: bool = True):
    """The actual disk-write + VS Code side effects, separated out so
    staging can write to a temp dir silently, and only the real workspace
    write triggers the editor to pop open."""
    target_dir = Path(target_dir).resolve()
    safe_filenames = []
    for filename in filenames:
        candidate = _is_safe_write_target(target_dir, filename)
        if candidate is None:
            print(f"🔴 blocked write outside workspace: {filename!r}")
            continue
        safe_filenames.append(filename)
        candidate.parent.mkdir(parents=True, exist_ok=True)
        temp_path = None
        try:
            with tempfile.NamedTemporaryFile(
                mode="w", encoding="utf-8", dir=candidate.parent,
                prefix=f".{candidate.name}.", suffix=".tmp", delete=False,
            ) as temp_file:
                temp_file.write(codes[filename])
                temp_path = Path(temp_file.name)
            os.replace(temp_path, candidate)
        finally:
            if temp_path and temp_path.exists():
                temp_path.unlink(missing_ok=True)

    if open_in_editor and safe_filenames:
        try:
            primary_path = target_dir / safe_filenames[0]
            # Opening the file in VS Code should not invoke a shell. Using ``shell=True``
            # opens a command interpreter which can be abused if ``primary_path`` were
            # ever controlled by a malicious model output (e.g. ``code && rm -rf /``).
            # ``subprocess.Popen`` with a list and ``shell=False`` safely executes the
            # program directly, relying on the OS ``PATH`` to locate ``code``.
            if sys.platform == "win32":
                subprocess.Popen(["code", str(primary_path)], shell=False)
            elif sys.platform == "darwin":
                subprocess.Popen(["open", "-a", "Visual Studio Code", str(primary_path)], shell=False)
        except Exception:
            pass

    return safe_filenames

def parse_file(text: str, sid: str) -> dict:
    """Backward-compatible wrapper — parses AND writes straight to the real
    workspace, same as before. Existing call sites keep working unchanged.

    filenames on the returned dict reflects what write_and_open actually
    wrote, not just what the model asked for — otherwise a path-traversal
    attempt that gets silently blocked there would still get reported to
    the workspace panel as if it had saved successfully."""
    parsed = parse_code_blocks(text)
    if not parsed["saved"]:
        return parsed
    safe_filenames = write_and_open(parsed["filenames"], parsed["codes"], WORKSPACE)
    parsed["filenames"] = safe_filenames
    if safe_filenames:
        parsed["filename"] = safe_filenames[0]
        parsed["saved"] = True
    else:
        parsed["saved"] = False
    return parsed

# ── Staging: test before publishing ─────────────────────────────────────
# Same principle as Claude's own scratch-space workflow — write and test in
# a private temp directory first, iterate on failures there where nothing
# is visible or "real" yet, and only copy the verified-working version into
# the actual workspace once it actually runs clean.

def stage_test_and_finalize(task: str, first_response: str, system_for_fixes: str,
                             max_attempts: int = 4) -> dict:
    if not ALLOW_GENERATED_EXECUTION:
        return {"success": False, "attempts": 0, "last_error":
                "Generated code execution is disabled (VANTA_ALLOW_GENERATED_EXECUTION)."}
    parsed = parse_code_blocks(first_response)
    if not parsed["saved"]:
        return {"success": False, "reason": "no_code_found"}

    staging_dir = Path(tempfile.mkdtemp(prefix="vanta_staging_"))
    filenames, codes, run_cmd = parsed["filenames"], parsed["codes"], parsed["run_cmd"]
    try:
        write_and_open(filenames, codes, staging_dir, open_in_editor=False)
        log = []
        for attempt in range(1, max_attempts + 1):
            try:
                argv = parse_run_command(run_cmd)
                result = sandbox.run(argv, cwd=str(staging_dir), timeout=30, allow_network=False)
            except ValueError as exc:
                return {"success": False, "attempts": attempt,
                        "error": f"Unsafe RUN command rejected: {exc}"}
            if result.timed_out:
                write_and_open(filenames, codes, WORKSPACE)
                return {"success": True, "attempts": attempt, "note": "long_running",
                        "filenames": filenames, "codes": codes, "run_cmd": run_cmd, "log": log}

            if result.returncode == 0:
                write_and_open(filenames, codes, WORKSPACE)
                return {"success": True, "attempts": attempt, "output": result.stdout,
                        "filenames": filenames, "codes": codes, "run_cmd": run_cmd, "log": log}

            log.append({"attempt": attempt, "error": result.stderr[:400]})
            if attempt == max_attempts:
                return {"success": False, "attempts": attempt, "log": log,
                        "last_error": result.stderr[:600]}

            code_dump = "\n\n".join(f"FILE {fn}:\n{codes[fn]}" for fn in filenames)
            try:
                fix_response = call_once([
                    {"role": "system", "content": system_for_fixes},
                    {"role": "user", "content":
                        f"Task: {task}\n\n{code_dump}\n\nError when run:\n{result.stderr}\n\n"
                        f"Fix it. Same FILENAME/code/RUN format, all files."},
                ], "CODE", max_tok=4096, temp=0.1)
            except Exception as e:
                log.append({"attempt": attempt, "fix_call_failed": str(e)})
                return {"success": False, "attempts": attempt, "log": log}

            fixed = parse_code_blocks(fix_response)
            if fixed["saved"] and fixed.get("filenames"):
                filenames, codes = fixed["filenames"], fixed["codes"]
                run_cmd = fixed["run_cmd"] or run_cmd
                write_and_open(filenames, codes, staging_dir, open_in_editor=False)
            else:
                log.append({"attempt": attempt, "error": "LLM fix output was malformed or empty"})
                return {"success": False, "attempts": attempt, "log": log, "last_error": "Fix output was malformed"}

        return {"success": False, "attempts": max_attempts, "log": log}
    finally:
        shutil.rmtree(staging_dir, ignore_errors=True)

def request_approval(sid: str, action: str, detail: str, timeout: int = 120) -> bool:
    """Ask the person in the UI before a risky action. Denies on timeout,
    disconnect, or any error — silence never means yes."""
    try:
        reply = socketio.call("approval_request",
                              {"action": action, "detail": detail[:500]},
                              to=sid, timeout=timeout)
        return bool(reply and reply.get("approved") is True)
    except Exception:
        return False


def run_cmd(cmd: str, sid: str, retries: int = 4) -> str:
    if not ALLOW_GENERATED_EXECUTION:
        return "⚠ Generated code execution is disabled. Set VANTA_ALLOW_GENERATED_EXECUTION=true to opt in."
    if not request_approval(sid, "Run command", cmd):
        return "⚠ Not run — you didn't approve it."
    for attempt in range(retries):
        try:
            argv = parse_run_command(cmd)
            proc = sandbox.run(argv, cwd=WORKSPACE, timeout=30, allow_network=True)
            if proc.timed_out:
                return "⚠ Timed out."
            if proc.returncode == 0:
                return proc.stdout or "✓ Done."
            if attempt < retries - 1:
                socketio.emit("status", {"state": "thinking",
                    "message": f"Auto-fixing error (attempt {attempt+2})…"}, room=sid)
                fix = call_once([
                    {"role": "system", "content": get_system_code("medium")},
                    {"role": "user",   "content":
                        f"Fix this error, output ONLY corrected code:\n\nError:\n{proc.stderr}"},
                ], "CODE", max_tok=2048, temp=0.05)
                parse_file(fix, sid)
                time.sleep(1)
            else:
                return f"⚠ Failed after {retries} attempts:\n{proc.stderr[:500]}"
        except subprocess.TimeoutExpired:
            return "⚠ Timed out."
        except ValueError as exc:
            return f"⚠ Unsafe RUN command rejected: {exc}"
    return "⚠ All retries exhausted."

# ─────────────────────────────────────────────────────────────────────────────
# ██  SOCKET.IO HANDLERS
# ─────────────────────────────────────────────────────────────────────────────
def _run_checklist(sid: str, pending: dict):
    socketio.emit("status", {"state": "thinking",
        "message": "Running production checklist…"}, room=sid)
    try:
        result = call_once([
            {"role": "system", "content": CHECKLIST_SYSTEM},
            {"role": "user", "content": f"File: {pending['filename']}\n\n{pending['code']}"},
        ], "CODE", max_tok=800, temp=0.2)
    except Exception as e:
        socketio.emit("error", {"message": f"Checklist failed: {e}"}, room=sid)
        socketio.emit("status", {"state": "idle"}, room=sid)
        return
    socketio.emit("response", {"text": result, "model": MODEL}, room=sid)
    save_history(sid, "[production checklist]", result)
    checklist_pending[sid] = {**pending, "stage": "post_checklist"}
    socketio.emit("status", {"state": "idle"}, room=sid)


def _run_legal_draft(sid: str, pending: dict):
    socketio.emit("status", {"state": "thinking",
        "message": "Drafting privacy policy + ToS…"}, room=sid)
    try:
        result = call_once([
            {"role": "system", "content": LEGAL_DRAFT_SYSTEM},
            {"role": "user", "content": f"Website file: {pending['filename']}\n\n{pending['code']}"},
        ], "CODE", max_tok=2000, temp=0.3)
    except Exception as e:
        socketio.emit("error", {"message": f"Legal draft failed: {e}"}, room=sid)
        socketio.emit("status", {"state": "idle"}, room=sid)
        return
    socketio.emit("response", {"text": result, "model": MODEL}, room=sid)
    save_history(sid, "[privacy policy + ToS draft]", result)
    socketio.emit("status", {"state": "idle"}, room=sid)


def _is_authed() -> bool:
    """Logged-in browser session, or a valid token supplied with the request."""
    if session.get("vanta_auth") is True:
        return True
    header = request.headers.get("Authorization", "")
    token = request.args.get("token") or request.headers.get("X-VANTA-TOKEN")
    if header.lower().startswith("bearer "):
        token = header[7:].strip()
    return auth.check(token)


def _socket_token_ok() -> bool:
    return _is_authed()


@socketio.on("connect")
def on_connect():
    if not _socket_token_ok():
        return False
    conversations[request.sid] = []
    awake_sessions[request.sid] = True
    emit("status",    {"state": "idle"})
    emit("workspace", {"path": WORKSPACE})
    sid = request.sid
    # The dashboard's Weather card (weather_state) replaces the old pop-up stage that used to appear on connect.
    _emit_setup_state(sid)

@socketio.on("disconnect")
def on_disconnect():
    conversations.pop(request.sid, None)
    awake_sessions.pop(request.sid, None)
    checklist_pending.pop(request.sid, None)
    if board is not None:
        board.watch(request.sid, False)

def _guard_chat_handler(handler):
    def guarded(data):
        sid = request.sid
        if not isinstance(data, dict) or not isinstance(data.get("message", ""), str):
            socketio.emit("error", {"message": "Invalid chat payload."}, room=sid)
            socketio.emit("status", {"state": "idle"}, room=sid)
            return
        try:
            return handler(data)
        except Exception as exc:
            print(f"🔴 chat exception: {type(exc).__name__}: {exc}")
            socketio.emit("error", {"message": "Chat request failed."}, room=sid)
            socketio.emit("status", {"state": "idle"}, room=sid)

    return guarded

@socketio.on("chat")
@_guard_chat_handler
def handle_chat(data):
    sid  = request.sid
    msg  = data.get("message", "").strip()
    think_mode = bool(data.get("think", False))
    print(f"🔵 handle_chat received: {msg[:60]!r}")
    if not msg:
        return

    # ── Wake-word gate ──────────────────────────────────────────────────────
    if msg.lower() in ("sleep", "go to sleep"):
        awake_sessions[sid] = False
        socketio.emit("status", {"state": "idle", "message": f"{AGENT} is asleep."}, room=sid)
        socketio.emit("response", {"text": f"💤 Going to sleep. Say \"{AGENT}\" to wake me."}, room=sid)
        return

    if not awake_sessions.get(sid, False):
        match = WAKE_PATTERN.match(msg)
        if not match:
            socketio.emit("response", {"text": f"💤 Say \"{AGENT}\" to wake me up."}, room=sid)
            return
        awake_sessions[sid] = True
        msg = msg[match.end():].strip()
        if not msg:
            socketio.emit("response", {"text": "⚡ I'm awake. What do you need?"}, room=sid)
            return

    if AWARE_OK and _system_command(sid, msg):
        return
    if SETUPS_OK:
        if _setup_command(sid, msg):
            return
        if _offline():
            _offline_chat(sid, msg)
            return

    # ── Answer to a clarifying question VANTA just asked ────────────────────
    if sid in pending_clarify:
        orig, asked = pending_clarify.pop(sid)
        if time.time() - asked < 600:
            msg = f"{orig}\n\nMy answer to your question: {msg}"

    # ── Checklist follow-up intercept ───────────────────────────────────────
    if sid in checklist_pending:
        pending = checklist_pending[sid]
        stage = pending.get("stage", "build")
        if wants_legal_draft(msg) or (stage == "post_checklist" and wants_checklist(msg)):
            checklist_pending.pop(sid, None)
            _run_legal_draft(sid, pending)
            return
        if stage == "build" and wants_checklist(msg):
            checklist_pending.pop(sid, None)
            _run_checklist(sid, pending)
            return
        # Anything else — drop the pending offer, fall through to normal routing
        checklist_pending.pop(sid, None)

    am = re.match(r"^\s*(?:/agent|agent:)\s*(.+)", msg, re.I | re.S) if AWARE_OK else None
    if am:
        goal = am.group(1).strip()
        hit = projects_db.mentioned_in(goal)
        root = Path(hit[0]["folder"]) if hit and hit[0].get("folder") and Path(hit[0]["folder"]).is_dir() else Path(WORKSPACE)
        socketio.emit("response", {"text": f"On it. I'll work in {root.name} ({guard_settings.data.get('agent_mode', 'ask')} mode). Say stop any time, and I can undo my changes afterwards."}, room=sid)
        threading.Thread(target=_run_agent, args=(sid, goal, root), daemon=True).start()
        return

    if AWARE_OK and re.search(r"\b(test|check|debug|fix|find (the )?(bugs?|errors?))\b", msg, re.I) and re.search(r"\b(project|app|code|repo)\b", msg, re.I):
        hit = projects_db.mentioned_in(msg)
        if hit and hit[0].get("folder"):
            socketio.emit("response", {"text": f"On it. I'll test {hit[0]['name']} in a copy and tell you what I find. Your files stay untouched unless you approve a fix."}, room=sid)
            threading.Thread(target=_run_project_check, args=(sid, hit[0]), daemon=True).start()
            return

    socketio.emit("status", {"state": "thinking"}, room=sid)

    # ── Parallel: classify + search simultaneously ─────────────────────────
    # Non-blocking executor so hung lookups never stall the response
    needs_knowledge = needs_live_knowledge(msg)
    is_weather = needs_weather(msg)
    if needs_knowledge or is_weather:
        socketio.emit("status", {"state": "learning", "message": "Searching knowledge…"}, room=sid)

    mode_f = _BACKGROUND_POOL.submit(detect_mode, msg)
    rag_f = _BACKGROUND_POOL.submit(get_rag, msg)
    if is_weather:
        weather_f = _BACKGROUND_POOL.submit(get_weather, msg)
        google_f = None
    else:
        weather_f = None
        google_f = _BACKGROUND_POOL.submit(get_google, msg) if (GOOGLE_OK and needs_knowledge) else None

    try:
        mode = mode_f.result(timeout=2)
    except Exception:
        mode = "CHAT"

    try:
        rag_ctx = rag_f.result(timeout=3)
    except Exception:
        rag_ctx = ""

    weather_ctx = ""
    if weather_f:
        try:
            weather_ctx = weather_f.result(timeout=3)
        except Exception:
            weather_ctx = ""

    google_ctx = ""
    if google_f:
        try:
            google_ctx = google_f.result(timeout=4)
        except Exception:
            google_ctx = ""

    if is_weather and not weather_ctx and GOOGLE_OK:
        try:
            google_ctx = get_google(msg)
        except Exception:
            google_ctx = ""

    is_ui = mode == "CODE" and is_ui_task(msg)
    socketio.emit("status", {"state": "thinking", "mode": mode}, room=sid)
    has_history = bool(conversations.get(sid))
    effort = pick_reasoning_effort(mode, is_ui, needs_knowledge, think_mode, has_history)
    if SETUPS_OK and setup_store.profile["effort"]:
        effort = setup_store.profile["effort"]          # Think with me: always the deepest thinking
    routed_model = pick_model(effort)
    messages = build_prompt(sid, msg, mode, rag_ctx, weather_ctx or google_ctx, effort)
    if SETUPS_OK and setup_store.profile["overlay"]:
        messages[0]["content"] += "\n\n" + setup_store.profile["overlay"]
    if wants_stage(msg):
        messages[0]["content"] += "\n\n" + STAGE_PROMPT
    if AWARE_OK:
        try:
            bridge.note_claims(msg)
            extra = "\n".join(x for x in (bridge.context_for(msg), projects_db.context_for(msg)) if x)
            if extra:
                messages[0]["content"] += "\n\n[Personal context, use only if relevant]\n" + extra
        except Exception as exc:
            print(f"[awareness] context failed: {exc}")

    # ── Optional thinking pass — streams reasoning before the real answer ──
    # Scoped to the plain chat path only (UI critique loop already does its
    # own multi-pass reasoning, orchestrate has its own progress feed).
    if think_mode:
        socketio.emit("thinking_start", {}, room=sid)
        think_messages = build_thinking_prompt(sid, msg, mode, rag_ctx, google_ctx)
        thought = stream_thinking(sid, think_messages)
        socketio.emit("thinking_done", {}, room=sid)
        if thought:
            # Feed the reasoning back in as private context — never shown
            # again, never saved to memory, just informs the real answer.
            messages[0]["content"] += (
                f"\n\n[Your private reasoning just now — do not repeat it, "
                f"just answer naturally in light of it]\n{thought}"
            )

    # ── UI tasks: 3-pass critique (but stream the final pass) ──────────────
    if is_ui:
        socketio.emit("status", {"state": "thinking", "message": "Generating…"}, room=sid)
        draft = call_once(messages, mode, reasoning_effort=effort)

        socketio.emit("status", {"state": "thinking", "message": "Refining…"}, room=sid)
        crit = call_once([
            {"role": "system",    "content": SYSTEM_UI_CRITIC},
            {"role": "user",      "content": f"Critique:\n\n{draft}"},
        ], "CODE", max_tok=800, temp=0.3, reasoning_effort=effort)

        ref_msgs = messages + [
            {"role": "assistant", "content": draft},
            {"role": "user",      "content": f"Apply these improvements, output COMPLETE final code:\n\n{crit}"},
        ]
        # Stream the final refined version
        final = stream_response(sid, ref_msgs, mode, reasoning_effort=effort)

    else:
        final = run_thinking(sid, msg) if is_task_request(msg, mode, is_ui) else None
        if final is None:
            # ── Regular query: stream immediately ─────────────────────────
            final = stream_response(sid, messages, mode, reasoning_effort=effort, model=routed_model)

    clean_final, model_stage = parse_model_stage(final)
    if model_stage:
        socketio.emit("stage", model_stage, room=sid)
        final = clean_final
    save_history(sid, msg, final)
    compact_history_if_needed(sid)
    socketio.emit("stream_done", {"model": MODEL, "mode": mode}, room=sid)
    socketio.emit("status", {"state": "idle"}, room=sid)

    # Run generated code if applicable
    info = parse_file(final, sid)
    if info.get("saved"):
        # Structured, per-file payload for the workspace panel — separate
        # from the raw token stream sent during generation above, which has
        # no file boundaries. filenames here is the write_and_open-filtered
        # list, so this only ever names files that actually made it to disk.
        socketio.emit("workspace_files", {
            "filenames": info["filenames"],
            "codes": info["codes"],
            "run_cmd": info.get("run_cmd"),
        }, room=sid)
    if info.get("run_cmd"):
        socketio.emit("status", {"state": "thinking",
            "message": f"Running: {info['run_cmd'][:80]}…"}, room=sid)
        out = run_cmd(info["run_cmd"], sid)
        if out:
            socketio.emit("stream_chunk", {"chunk": f"\n```\n{out}\n```"}, room=sid)
            socketio.emit("stream_done",  {"model": "Shell"}, room=sid)
        socketio.emit("status", {"state": "idle"}, room=sid)

    if info.get("saved") and is_ui:
        is_standalone_html = (not info.get("multi_file") and
            info["filename"].lower().endswith((".html", ".htm")))

        if is_standalone_html:
            socketio.emit("status", {"state": "thinking",
                "message": "Visual check…"}, room=sid)
            visual_notes = run_visual_critique(
                client,
                str(Path(WORKSPACE) / info["filename"]),
                workspace_root=WORKSPACE,
            )
            if visual_notes and "no visual issues" not in visual_notes.lower():
                socketio.emit("response",
                    {"text": f"👁 Visual check:\n{visual_notes}"}, room=sid)
            socketio.emit("status", {"state": "idle"}, room=sid)
        # Multi-file/server-backed builds (Flask templates, etc.) skip visual
        # critique — a file:// screenshot of a template can't reflect real
        # rendering (Jinja, routes, API calls), so it would just be wrong.

        checklist_pending[sid] = {
            "filename": info["filename"], "code": final, "stage": "build",
        }
        socketio.emit("response", {"text":
            "Want me to run a quick production checklist on this — HTTPS, "
            "input validation, no exposed secrets? I can also draft a "
            "starting privacy policy + ToS afterward if you want one."},
            room=sid)

# ─────────────────────────────────────────────────────────────────────────────
# ██  SETUPS: Everyday / Think with me / Builder / Offline
# ─────────────────────────────────────────────────────────────────────────────
def _emit_setup_state(sid: str = None):
    if not SETUPS_OK:
        return
    st = setup_store.state()
    st["local_ready"] = router.local_ready()
    if sid:
        socketio.emit("setup_state", st, room=sid)
    else:
        socketio.emit("setup_state", st)


def _run_build(sid: str, goal: str) -> None:
    try:
        strong, fast = router.pair()
    except Unavailable as exc:
        socketio.emit("response", {"text": str(exc)}, room=sid)
        return
    slug = "-".join(re.findall(r"[a-z0-9]+", goal.lower())[:4]) or "project"
    workers = int(os.getenv("VANTA_BUILD_WORKERS", "2" if router.store.profile["cloud"] else "1"))
    holder: dict = {}

    def stage(run):
        builds[run.id] = holder["b"]
        socketio.emit("stage", build_stage(run, run.status == "running"), room=sid)

    holder["b"] = Builder(strong, fast, WORKSPACE_ROOT / "builds", workers=workers, on_stage=stage)
    socketio.emit("status", {"state": "thinking", "message": "Building…"}, room=sid)
    try:
        run = holder["b"].build(goal, slug)
        if AWARE_OK:
            guardian.audit.add("build_run", run.id, goal=goal[:100], status=run.status, changed=run.changed)
        socketio.emit("response", {"text": run.final + (f" Folder: {run.root}" if run.changed else "")}, room=sid)
    except Exception as exc:
        socketio.emit("response", {"text": f"The build hit a problem: {exc}"}, room=sid)
    finally:
        socketio.emit("status", {"state": "idle"}, room=sid)


def _run_orchestra(sid: str, goal: str, root: Path) -> None:
    """A strong manager splits the goal; small agents do the jobs with the real tools. Every approval is still a pop-up you answer."""
    try:
        strong, fast = router.pair()
    except Unavailable as exc:
        socketio.emit("response", {"text": str(exc)}, room=sid)
        return
    holder: dict = {}
    mode = guard_settings.data.get("agent_mode", "ask")

    def push(run):
        socketio.emit("stage", orchestra_stage(run, run.status in ("planning", "running")), room=sid)

    o = Orchestra(strong, fast, root, mode, approve=lambda a, d: request_approval(sid, a, d),
                  web_search=(lambda q: get_google(q)) if GOOGLE_OK else None, on_update=push)
    orchs[o.run_.id] = o
    socketio.emit("status", {"state": "thinking", "message": "The team is working…"}, room=sid)
    try:
        run = o.run(goal)
        guardian.audit.add("team_run", run.id, goal=goal[:100], status=run.status, changed=run.changed, mode=mode)
        socketio.emit("response", {"text": run.final or "Finished."}, room=sid)
    except Exception as exc:
        socketio.emit("response", {"text": f"The team hit a problem: {exc}"}, room=sid)
    finally:
        socketio.emit("status", {"state": "idle"}, room=sid)


def _run_probe(sid: str) -> None:
    socketio.emit("response", {"text": "Testing this computer's disk, memory and processor. About 20 seconds."}, room=sid)
    try:
        socketio.emit("response", {"text": hw_describe(hw_probe())}, room=sid)
    except Exception as exc:
        socketio.emit("response", {"text": f"The speed test failed: {exc}"}, room=sid)


def _system_command(sid: str, msg: str) -> bool:
    """'how is my laptop', 'close chrome', 'uninstall X'. Only handled when a real program matches; otherwise normal chat."""
    if board is None:
        return False
    from vanta_ui import board as B
    cmd = B.parse(msg)
    if not cmd:
        return False
    kind, target = cmd
    if kind == "weather":
        socketio.emit("hw_focus", {"card": "weather"}, room=sid)
        if target:
            on_weather_get_for(sid, target)
        return True
    if kind == "focus":
        socketio.emit("hw_focus", {"card": target}, room=sid)
        socketio.emit("response", {"text": "Here it is on the dashboard."}, room=sid)
        return True
    if kind == "status":
        from awareness.hardware import describe
        socketio.emit("response", {"text": describe(board.state())}, room=sid)
        return True
    if kind == "end":
        hits = B.match_running([g for g in board.hw.slow(True)["programs"]], target)
        if not hits:
            return False
        threading.Thread(target=_end_program, args=(sid, hits[0]), daemon=True).start()
        return True
    if kind == "uninstall":
        hits = B.prog.find(board.programs(True), target)
        if not hits:
            return False
        if len(hits) > 1:
            socketio.emit("response", {"text": "Which one? " + ", ".join(h["name"] for h in hits[:5])}, room=sid)
            return True
        threading.Thread(target=_uninstall_program, args=(sid, hits[0]["id"]), daemon=True).start()
        return True
    return False


def _end_program(sid: str, g: dict) -> None:
    """Ask first, then stop the program and everything it started. Every step is in the audit log."""
    try:
        pr = guardian.propose("end_process", {"pid": g["pid"], "name": g["name"], "created": g["created"], "tree": True}, f"You asked me to stop {g['name']}.")
    except Refused as exc:
        socketio.emit("response", {"text": str(exc)}, room=sid)
        return
    more = f" ({g['count']} parts)" if g.get("count", 1) > 1 else ""
    if not request_approval(sid, "Stop program", f"Stop {g['name']}{more} and anything it started. Unsaved work in it will be lost."):
        guardian.deny(pr["id"])
        socketio.emit("response", {"text": f"Okay, I left {g['name']} running."}, room=sid)
        return
    try:
        guardian.approve(pr["id"])
        socketio.emit("response", {"text": f"Stopped {g['name']}."}, room=sid)
    except Refused as exc:
        socketio.emit("response", {"text": f"I couldn't stop {g['name']}: {exc}"}, room=sid)
    _emit_guardian_state()


def _uninstall_program(sid: str, prog_id: str) -> None:
    entry = next((p for p in board.programs() if p["id"] == prog_id), None)
    name = entry["name"] if entry else "that program"
    try:
        pr = guardian.propose("uninstall", {"id": prog_id, "name": name}, f"You asked me to uninstall {name}.")
    except Refused as exc:
        socketio.emit("response", {"text": str(exc)}, room=sid)
        return
    if not request_approval(sid, "Uninstall program", f"Uninstall {name}. I'll start its own uninstaller, which shows its own window so you can still cancel there."):
        guardian.deny(pr["id"])
        socketio.emit("response", {"text": f"Okay, {name} stays installed."}, room=sid)
        return
    try:
        guardian.approve(pr["id"])
        socketio.emit("response", {"text": f"Started the uninstaller for {name}. Finish it in the window that just opened."}, room=sid)
        board.programs(True)
    except Refused as exc:
        socketio.emit("response", {"text": f"I couldn't uninstall {name}: {exc}"}, room=sid)
    _emit_guardian_state()


@socketio.on("weather_get")
def on_weather_get(data):
    if _offline():
        emit("weather_state", {"error": "Offline mode is on, so I didn't look up the weather."})
        return
    city = str((data or {}).get("city") or DEFAULT_CITY).strip()[:60] or DEFAULT_CITY
    sid = request.sid

    def work():
        w = weather_cache.get(city)
        socketio.emit("weather_state", w or {"error": f"I couldn't get the weather for {city}."}, room=sid)
    threading.Thread(target=work, daemon=True).start()


def on_weather_get_for(sid: str, city: str) -> None:
    def work():
        w = weather_cache.get(city)
        socketio.emit("weather_state", w or {"error": f"I couldn't get the weather for {city}."}, room=sid)
    threading.Thread(target=work, daemon=True).start()


def _files_state():
    from utils import vanta_files
    return {"folder": str(vanta_files.folder()), "files": vanta_files.listing()}


@socketio.on("files_get")
def on_files_get():
    emit("files_state", _files_state())


@app.route("/files/<path:name>")
def download_file(name):
    from flask import send_from_directory
    from utils import vanta_files
    if not _is_authed():
        return jsonify({"error": "unauthorized"}), 401
    p = vanta_files.resolve(name)
    if not p:
        return jsonify({"error": "not found"}), 404
    return send_from_directory(p.parent, p.name, as_attachment=True)


@socketio.on("hw_watch")
def on_hw_watch(data):
    if board is None:
        return
    on = bool((data or {}).get("on", True))
    board.watch(request.sid, on)
    if on:
        emit("hw_state", board.state())


@socketio.on("hw_end")
def on_hw_end(data):
    if board is None:
        return
    pid = int((data or {}).get("pid") or 0)
    g = next((x for x in board.hw.slow(True)["programs"] if x["pid"] == pid), None)
    if not g:
        emit("response", {"text": "That program has already closed."})
        return
    threading.Thread(target=_end_program, args=(request.sid, g), daemon=True).start()


@socketio.on("hw_uninstall")
def on_hw_uninstall(data):
    if board is None:
        return
    threading.Thread(target=_uninstall_program, args=(request.sid, str((data or {}).get("id", ""))), daemon=True).start()


def _setup_command(sid: str, msg: str) -> bool:
    """Switching setups, /build and the speed test. Returns True when the message was fully handled here."""
    if not SETUPS_OK:
        return False
    sw = parse_switch(msg)
    if sw:
        prof = setup_store.set(sw)
        _emit_setup_state()
        note = ""
        if sw == "offline" and not router.local_ready():
            note = " No local model is running yet. Install Ollama (ollama.com), run: ollama pull qwen2.5:3b, and I'll use it."
        socketio.emit("response", {"text": f"Switched to {prof['label']}. {prof['desc']}{note}"}, room=sid)
        return True
    if re.match(r"^\s*(?:/probe|speed test|test (?:my|this) (?:laptop|computer|pc))\b", msg, re.I):
        threading.Thread(target=_run_probe, args=(sid,), daemon=True).start()
        return True
    tm = re.match(r"^\s*/team\s+(.+)", msg, re.I | re.S)
    if not tm and setup_store.current == "orchestra" and AWARE_OK:
        tm = re.match(r"^\s*((?:please\s+)?(?:fix|build|add|make|find|check|review|refactor|update|write|investigate|implement|clean up|improve|debug)\b.+)", msg, re.I | re.S)
    if tm and AWARE_OK:
        goal = tm.group(1).strip()
        hit = projects_db.mentioned_in(goal)
        root = Path(hit[0]["folder"]) if hit and hit[0].get("folder") and Path(hit[0]["folder"]).is_dir() else Path(WORKSPACE)
        socketio.emit("response", {"text": f"On it. A strong model will split this up and small agents will do the parts, in {root.name} ({guard_settings.data.get('agent_mode', 'ask')} mode). Say stop any time, and I can undo their changes."}, room=sid)
        threading.Thread(target=_run_orchestra, args=(sid, goal, root), daemon=True).start()
        return True
    bm = re.match(r"^\s*/build\s+(.+)", msg, re.I | re.S)
    if not bm and setup_store.current == "builder":
        bm = re.match(r"^\s*build\s+((?:me\s+)?(?:a|an|the)\b.+)", msg, re.I | re.S)
    if bm:
        goal = bm.group(1).strip()
        socketio.emit("response", {"text": "On it. A strong model plans and reviews, a fast one writes the files. Say stop any time, and I can undo the whole build."}, room=sid)
        threading.Thread(target=_run_build, args=(sid, goal), daemon=True).start()
        return True
    if setup_store.current == "think":
        d = parse_decision(msg)
        nd = globals().get("notes_db")
        if d and nd is not None:
            try:
                nd.add(d, kind="decision")
            except Exception as exc:
                print(f"[setups] could not save decision: {exc}")
    return False


def _offline_chat(sid: str, msg: str) -> None:
    """Offline setup: the model on this laptop answers. No web, no cloud, no long-term memory extraction."""
    socketio.emit("status", {"state": "thinking", "mode": "CHAT"}, room=sid)
    try:
        local = router.strong()
        messages = build_prompt(sid, msg, "CHAT", "", "", "low")
        messages[0]["content"] = messages[0]["content"][:6000] + "\n\n" + setup_store.profile["overlay"]
        messages = [messages[0]] + messages[1:][-7:]
        text = (local(messages) or "").strip() or "I did not get an answer from the local model."
        socketio.emit("stream_chunk", {"chunk": text}, room=sid)
        conversations.setdefault(sid, []).extend([{"role": "user", "content": msg}, {"role": "assistant", "content": text}])
        socketio.emit("stream_done", {"model": "local", "mode": "CHAT"}, room=sid)
    except Unavailable as exc:
        socketio.emit("response", {"text": str(exc)}, room=sid)
    except Exception as exc:
        socketio.emit("response", {"text": f"The local model had a problem: {exc}"}, room=sid)
    finally:
        socketio.emit("status", {"state": "idle"}, room=sid)


@socketio.on("setup_get")
def on_setup_get():
    _emit_setup_state()


@socketio.on("setup_set")
def on_setup_set(data):
    if SETUPS_OK:
        try:
            setup_store.set(str((data or {}).get("id", "")))
        except ValueError:
            return
        _emit_setup_state()


@socketio.on("setup_builder_fast")
def on_setup_builder_fast(data):
    if SETUPS_OK:
        setup_store.set_builder_fast(str((data or {}).get("where", "cloud")))
        _emit_setup_state()


@socketio.on("chat_tools")
def handle_chat_tools(data):
    """Opt-in testing ground for real tool-calling — completely separate
    from the main 'chat' event above, which is untouched and still works
    exactly as before. Genuinely untested against a live Groq response;
    this is where that gets found out."""
    sid = request.sid
    if not isinstance(data, dict) or not isinstance(data.get("message", ""), str):
        socketio.emit("error", {"message": "Invalid tool payload."}, room=sid)
        return
    task = data["message"].strip()
    if not task:
        return
    print(f"🔧 chat_tools received: {task[:60]!r}")
    socketio.emit("status", {"state": "thinking"}, room=sid)
    try:
        result = call_with_tools(sid, task)
        socketio.emit("response", {"text": result}, room=sid)
    except Exception as e:
        print(f"🔴 chat_tools exception: {type(e).__name__}: {e}")
        socketio.emit("error", {"message": f"Tool-calling error: {e}"}, room=sid)
    socketio.emit("status", {"state": "idle"}, room=sid)

@socketio.on("orchestrate")
def handle_orchestrate(data):
    sid = request.sid
    if not isinstance(data, dict) or not isinstance(data.get("message", ""), str):
        socketio.emit("error", {"message": "Invalid orchestration payload."}, room=sid)
        return
    msg = data["message"].strip()
    if not msg or not ORCH_OK:
        socketio.emit("error", {"message": "Orchestrator unavailable."}, room=sid)
        return

    socketio.emit("status", {"state": "thinking"}, room=sid)

    def cb(step, model, status, result=None):
        socketio.emit("orchestration_update",
            {"step": step, "model": model, "status": status}, room=sid)

    try:
        merged = orchestrator.run(msg, progress_callback=cb)
        save_history(sid, msg, merged)
        socketio.emit("orchestration_done", {"merged": merged}, room=sid)
    except Exception as e:
        socketio.emit("error", {"message": str(e)}, room=sid)
    finally:
        socketio.emit("status", {"state": "idle"}, room=sid)

@socketio.on("stage_action")
def on_stage_action(data):
    """Buttons on stage cards. `guard:` buttons are approvals for Guardian requests; pressing one is the approval."""
    sid = request.sid
    action = str((data or {}).get("action", ""))
    if SETUPS_OK and action.startswith("build:"):
        _, verb, rid = (action.split(":", 2) + ["", ""])[:3]
        b = builds.get(rid)
        if verb == "stop" and b and b.run:
            b.run.stop = True
        elif verb == "undo" and b:
            back = b.rewind()
            if AWARE_OK:
                guardian.audit.add("build_undo", rid, files=back)
            socketio.emit("response", {"text": f"Undone. I removed or restored {len(back)} file(s)."}, room=sid)
        return
    if SETUPS_OK and AWARE_OK and action.startswith("team:"):
        _, verb, rid = (action.split(":", 2) + ["", ""])[:3]
        o = orchs.get(rid)
        if verb == "stop" and o:
            o.stop()
        elif verb == "undo" and o:
            back = o.rewind()
            guardian.audit.add("team_undo", rid, files=back)
            socketio.emit("response", {"text": f"Undone. I put back {len(back)} file(s) exactly as they were."}, room=sid)
        return
    if AWARE_OK and action.startswith("agent:"):
        _, verb, rid = (action.split(":", 2) + ["", ""])[:3]
        ag = agents.get(rid)
        if verb == "stop" and ag:
            ag.stop = True
        elif verb == "undo" and ag:
            back = ag.rewind()
            guardian.audit.add("agent_undo", rid, files=back)
            socketio.emit("response", {"text": f"Undone. I put back {len(back)} file(s) exactly as they were."}, room=sid)
        return
    if AWARE_OK and action.startswith("doctor:"):
        _, verb, rid = (action.split(":", 2) + ["", ""])[:3]
        item = doctor_reports.pop(rid, None)
        if verb == "apply" and item:
            try:
                written = apply_report(item[0], Path(item[1]))
                guardian.audit.add("project_fix_applied", rid, project=item[0].project, files=written)
                socketio.emit("response", {"text": f"Done. I changed {len(written)} file(s) in {item[0].project} and saved the originals in ~/.vanta/doctor_backups."}, room=sid)
            except Exception as exc:
                socketio.emit("response", {"text": f"I couldn't apply it: {exc}"}, room=sid)
        elif verb == "apply":
            socketio.emit("response", {"text": "That fix has expired. Run the check again."}, room=sid)
        else:
            socketio.emit("response", {"text": "Okay, I left your project alone."}, room=sid)
        return
    if AWARE_OK and action.startswith("guard:"):
        _, verb, rest = (action.split(":", 2) + ["", ""])[:3]
        if verb == "approve":
            try:
                res = guardian.approve(rest)
                done = ("Done. I moved it to the locked quarantine folder. You can put it back from Settings > Safety."
                        if "quarantine_id" in res else f"Done. I asked {res.get('ended', 'it')} to stop.")
                socketio.emit("response", {"text": done}, room=sid)
            except Refused as exc:
                socketio.emit("response", {"text": str(exc)}, room=sid)
            _emit_guardian_state()
        elif verb in ("ignore", "stop"):
            ids = [i for i in rest.split(",") if i]
            autopilot.stop(ids)
            socketio.emit("response", {"text": "Okay, I'll leave it alone."}, room=sid)
        elif verb == "trust":
            for i in filter(None, rest.split(",")):
                pr = guardian.pending.get(i)
                if pr:
                    t = pr["target"]
                    guard_settings.trust(str(t.get("name") or t.get("path") or ""))
                    if pr["kind"] == "quarantine":
                        guard_settings.trust(str(t.get("path", "")))
            autopilot.stop([i for i in rest.split(",") if i])
            socketio.emit("response", {"text": "Okay, I'll trust that program from now on."}, room=sid)
        return
    socketio.emit("response", {"text": "I can't do that one yet. For now I can look into it and tell you what I find."}, room=sid)


def _emit_guardian_state():
    if AWARE_OK:
        socketio.emit("guardian_state", {"quarantined": guardian.quarantined(), "audit": guardian.audit.recent(30), "chain_ok": guardian.audit.verify() is None,
                                         "mode": guard_settings.data["mode"], "emergency": guard_settings.data["emergency"], "agent_mode": guard_settings.data.get("agent_mode", "ask"), "veto": guard_settings.data["veto_seconds"], "max_per_hour": guard_settings.data["max_per_hour"]})


@socketio.on("guardian_get")
def on_guardian_get():
    _emit_guardian_state()


@socketio.on("scans_get")
def on_scans_get():
    if AWARE_OK:
        emit("scans", scanner_obj.recent(30))


@socketio.on("scan_file")
def on_scan_file(data):
    """Scan one file on request. Read-only: the file is inspected, never run or moved."""
    if not AWARE_OK:
        return
    p = Path(str((data or {}).get("path", "")).strip().strip('"')).expanduser()
    if not p.is_file():
        emit("response", {"text": "I can't find a file at that path."})
        return
    sid = request.sid
    def work():
        try:
            _on_scan(scanner_obj.scan(p, force=True))
            socketio.emit("scans", scanner_obj.recent(30), room=sid)
        except Exception as exc:
            socketio.emit("response", {"text": f"I couldn't scan that: {exc}"}, room=sid)
    threading.Thread(target=work, daemon=True).start()


@socketio.on("agent_mode")
def on_agent_mode(data):
    if AWARE_OK:
        guard_settings.set_agent_mode(str((data or {}).get("mode", "ask")))
        _emit_guardian_state()


@socketio.on("guardian_emergency")
def on_guardian_emergency(data):
    if AWARE_OK:
        on = bool((data or {}).get("on"))
        guard_settings.set_emergency(on)
        if ransom_watch:
            ransom_watch.enabled = on
        guardian.audit.add("emergency_changed", "", on=on, by="you")
        _emit_guardian_state()


@socketio.on("guardian_purge")
def on_guardian_purge(data):
    """Permanently delete one quarantined file. Only ever from quarantine, only on a button press."""
    if not AWARE_OK:
        return
    try:
        p = guardian.propose("purge", {"id": str((data or {}).get("id", ""))}, "You asked to delete it for good")
        guardian.approve(p["id"])
        emit("response", {"text": "Deleted for good."})
    except Refused as exc:
        emit("response", {"text": str(exc)})
    _emit_guardian_state()


@socketio.on("guardian_mode")
def on_guardian_mode(data):
    if AWARE_OK:
        guard_settings.set_mode("auto" if (data or {}).get("mode") == "auto" else "ask")
        guardian.audit.add("mode_changed", "", mode=guard_settings.data["mode"], by="you")
        _emit_guardian_state()


@socketio.on("guardian_restore")
def on_guardian_restore(data):
    if not AWARE_OK:
        return
    try:
        p = guardian.propose("restore", {"id": str((data or {}).get("id", ""))}, "You asked to put it back")
        guardian.approve(p["id"])
        emit("response", {"text": "Put it back where it was."})
    except Refused as exc:
        emit("response", {"text": str(exc)})
    _emit_guardian_state()


@socketio.on("projects_get")
def on_projects_get():
    if AWARE_OK:
        emit("projects", [{**p, "health": projects_db.health(p)} for p in projects_db.all()])


@socketio.on("project_save")
def on_project_save(data):
    if not AWARE_OK:
        return
    d = data or {}
    try:
        if d.get("id"):
            projects_db.update(str(d["id"]), **{k: str(d[k])[:400] for k in ("summary", "status", "next_step", "folder") if k in d})
        else:
            projects_db.add(str(d.get("name", "")), str(d.get("folder", "")), str(d.get("summary", "")))
    except ValueError as exc:
        emit("response", {"text": str(exc)})
    on_projects_get()


doctor_reports: dict = {}
agents: dict = {}


def _run_scheduled(job: dict) -> None:
    """A scheduled task: read-only, nobody is asked anything, the result comes to you as a note."""
    root = Path(job.get("folder") or WORKSPACE)
    if not root.is_dir():
        root = Path(WORKSPACE)
    try:
        ag = Agent(lambda msgs: call_once(msgs, "CODE", max_tok=1200, temp=0.2), root, "plan", approve=lambda a, d: False,
                   web_search=(lambda q: get_google(q)) if GOOGLE_OK else None, max_steps=15)
        run = ag.execute(job["goal"])
        text = f"Scheduled task ({job['when']}): {run.final or 'finished'}"
    except Exception as exc:
        text = f"Scheduled task ({job['when']}) failed: {exc}"
    guardian and guardian.audit.add("scheduled_run", job["id"], goal=job["goal"][:100])
    socketio.emit("response", {"text": text})
    if nudges:
        nudges.nudge(f"sched:{job['id']}", "low", "Scheduled task finished", text[:200])


def _scheduler_loop() -> None:
    while True:
        time.sleep(30)
        try:
            for job in schedule_store.due():
                threading.Thread(target=_run_scheduled, args=(job,), daemon=True).start()
        except Exception as exc:
            print(f"[schedules] {exc}")


def _run_agent(sid: str, goal: str, root: Path) -> None:
    """Runs the agent loop for a goal. Edits and commands follow the permission mode; every approval is a pop-up you answer."""
    mode = guard_settings.data.get("agent_mode", "ask")
    ag = None
    def push(working: bool):
        socketio.emit("stage", agent_stage(ag.run, working), room=sid)
    ag = Agent(lambda msgs: call_once(msgs, "CODE", max_tok=1200, temp=0.2), root, mode,
               approve=lambda action, detail: request_approval(sid, action, detail),
               ask_user=lambda q: "(the person can't answer right now: make a sensible choice and say what you assumed)",
               web_search=(lambda q: get_google(q)) if GOOGLE_OK else None,
               on_step=lambda st: push(True),
               schedules=schedule_store, notify=lambda t, m: nudges.nudge(f"agent:{t[:30]}", "low", t, m) if nudges else None,
               on_file=lambda n: socketio.emit("files_state", _files_state(), room=sid))
    agents[ag.run.id] = ag
    socketio.emit("status", {"state": "thinking", "message": "Working on it…"}, room=sid)
    try:
        push(True)
        run = ag.execute(goal)
        guardian.audit.add("agent_run", run.id, goal=goal[:100], status=run.status, changed=run.changed, mode=mode)
        push(False)
        socketio.emit("response", {"text": run.final or "Finished."}, room=sid)
    except Exception as exc:
        socketio.emit("response", {"text": f"The agent hit a problem: {exc}"}, room=sid)
    finally:
        socketio.emit("status", {"state": "idle"}, room=sid)


def _run_project_check(sid: str, proj: dict) -> None:
    """Tests the project in a copy, tries to fix failures, and puts the result on the stage. Never touches the real folder."""
    name = proj["name"]
    socketio.emit("status", {"state": "thinking", "message": f"Checking {name}…"}, room=sid)
    try:
        rep = run_doctor(name, Path(proj["folder"] or ""), lambda msgs: call_once(msgs, "CODE", max_tok=1500, temp=0.1),
                         on_step=lambda m: socketio.emit("status", {"state": "thinking", "message": m}, room=sid))
        if rep.files:
            doctor_reports[rep.id] = (rep, proj["folder"])
        guardian.audit.add("project_checked", rep.id, project=name, status=rep.status)
        st = doctor_stage(rep)
        socketio.emit("stage", st, room=sid)
        socketio.emit("response", {"text": st.get("summary") or rep.message}, room=sid)
    except Exception as exc:
        socketio.emit("response", {"text": f"I couldn't check {name}: {exc}"}, room=sid)
    finally:
        socketio.emit("status", {"state": "idle"}, room=sid)


@socketio.on("project_check")
def on_project_check(data):
    if not AWARE_OK:
        return
    proj = next((p for p in projects_db.all() if p["id"] == str((data or {}).get("id", ""))), None)
    if not proj or not proj.get("folder"):
        emit("response", {"text": "Add a folder to that project first so I know where to look."})
        return
    threading.Thread(target=_run_project_check, args=(request.sid, proj), daemon=True).start()


@socketio.on("project_remove")
def on_project_remove(data):
    if AWARE_OK:
        projects_db.remove(str((data or {}).get("id", "")))
        on_projects_get()


@socketio.on("sync_get")
def on_sync_get():
    emit("sync_state", sync_service.status() if AWARE_OK and sync_service else {"configured": False, "unlocked": False, "last": 0, "error": ""})


@socketio.on("sync_unlock")
def on_sync_unlock(data):
    if AWARE_OK and sync_service:
        pw = str((data or {}).get("passphrase", ""))
        if len(pw) >= 8:
            sync_service.unlock(pw)
        else:
            emit("sync_state", {**sync_service.status(), "error": "Use at least 8 characters."})


@socketio.on("sync_now")
def on_sync_now():
    if AWARE_OK and sync_service:
        threading.Thread(target=sync_service.run_once, daemon=True).start()


@socketio.on("privacy_get")
def on_privacy_get():
    if AWARE_OK:
        emit("privacy_state", privacy.snapshot())


@socketio.on("privacy_pause")
def on_privacy_pause(data):
    if AWARE_OK:
        privacy.set_paused(bool((data or {}).get("paused", True)))


@socketio.on("privacy_source")
def on_privacy_source(data):
    if AWARE_OK and isinstance(data, dict) and "name" in data:
        privacy.set_source(str(data["name"]), bool(data.get("enabled")))


@socketio.on("nudge_ack")
def on_nudge_ack(data):
    if AWARE_OK and isinstance(data, dict):
        nudges.ack(str(data.get("id", "")))


@socketio.on("clear_memory")
def handle_clear():
    conversations[request.sid] = []
    emit("status", {"state": "idle", "message": "Memory cleared."})

# ── Thinking gate (Phase 3): real tasks get understood, done, and checked with code ──
THINKING_ON = os.environ.get("VANTA_THINKING", "on").strip().lower() not in {"0", "false", "no", "off"}
pending_clarify: dict = {}          # sid -> (original request, time asked)
_MATH_RE = re.compile(r"(\d\s*[\+\-\*/x×^]\s*\d)|(\d\s*%)|\b(calculate|compute|how many|how much|percent|probability|average|sum of|convert)\b", re.I)


def is_task_request(msg: str, mode: str, is_ui: bool) -> bool:
    if not (THINKING_ON and ORCH_OK) or is_ui:
        return False
    words = len(msg.split())
    if mode == "CODE" and words >= 8:
        return True
    return bool(_MATH_RE.search(msg)) and any(c.isdigit() for c in msg)


def run_thinking(sid: str, msg: str):
    """Returns the final text (already streamed to the client), or None to use normal chat."""
    ctx = ""
    if AWARE_OK:
        try:
            ctx = bridge.context_for(msg)
        except Exception:
            ctx = ""

    def step(label, _status):
        socketio.emit("status", {"state": "thinking", "message": label + "…"}, room=sid)

    try:
        res = orchestrator.think(msg, on_step=step, context=ctx)
    except NeedsClarification as q:
        pending_clarify[sid] = (msg, time.time())
        socketio.emit("stream_chunk", {"chunk": q.question}, room=sid)
        return q.question
    except Exception as exc:
        print(f"[thinking] failed, using normal chat: {exc}")
        return None
    if res is None or not res.output:
        return None
    note = ("\n\n✓ Checked by running it." if res.verified and res.method != "program"
            else "" if res.verified else f"\n\n⚠ I couldn't fully verify this. {res.note}")
    text = res.output + note
    socketio.emit("stream_chunk", {"chunk": text}, room=sid)
    try:
        st = code_result_stage(msg, res.output, res.verified, res.method, len(res.attempts) or 1)
        if st:
            socketio.emit("stage", st, room=sid)
    except Exception as exc:
        print(f"[stage] code stage failed: {exc}")
    return text


# ─────────────────────────────────────────────────────────────────────────────
# ██  AWARENESS (Phase 2): privacy, activity log, watchers, nudges, people memory
# ─────────────────────────────────────────────────────────────────────────────
try:
    from awareness.privacy import PrivacyState
    from awareness.events import ActivityLog
    from awareness.process_watcher import ProcessWatcher
    from awareness.window_watcher import WindowWatcher, snapshot_focused
    from awareness.frame_diff import ScreenWatcher
    from awareness.nudges import NudgeEngine
    from awareness.memory_bridge import MemoryBridge
    from awareness.tray import Tray
    from vanta_knowledge.people import People
    from guardian.actions import Guardian, Refused
    from guardian.audit import AuditLog
    from guardian.auto import Autopilot, Settings as GuardSettings
    from scanner.engine import Scanner, DownloadWatcher, Sweeper
    from guardian.ransomware import RansomwareWatch, WriterTracker, plant_canaries
    from projects.registry import Projects
    from doctor.fixer import run_doctor, apply_report
    from agent.loop import Agent
    from agent.checkpoints import Checkpoints
    AWARE_OK = True
except Exception as _e:  # keep VANTA usable if an optional dependency is missing
    print(f"⚠️  Awareness layer unavailable: {_e}")
    AWARE_OK = False

try:
    from setups.profiles import SetupStore, PROFILES, parse_switch, parse_decision
    from setups.router import Router, Unavailable, messages_to_prompt
    from setups.pipeline import Builder
    from setups.orchestra import Orchestra
    from setups.probe import probe as hw_probe, describe as hw_describe
    from orchestrator.local_model import LocalClient
    SETUPS_OK = True
except Exception as _e:
    print(f"⚠️  Setups unavailable: {_e}")
    SETUPS_OK = False

router = None
builds: dict = {}
orchs: dict = {}


def _retry(fn, tries: int = 4):
    """Free tiers rate-limit in bursts: wait and try again instead of failing a whole build."""
    for i in range(tries):
        try:
            return fn()
        except OfflineBlocked:
            raise
        except Exception as exc:
            if i == tries - 1 or not re.search(r"429|rate|limit|413|tokens per minute", str(exc), re.I):
                raise
            time.sleep(8 * (i + 1))


if SETUPS_OK:
    setup_store = SetupStore()

    def _strong_cloud(msgs: list) -> str:
        return _retry(lambda: call_once(msgs, "CODE", max_tok=2500, temp=0.2, model=SMART_MODEL))

    def _fast_cloud(msgs: list) -> str:
        """The fast brain spreads work over every free provider (with cooldowns), then falls back to the small Groq model."""
        if _offline():
            raise OfflineBlocked("Offline mode is on, so I did not use the internet.")
        if ORCH_OK:
            try:
                flat = "\n\n".join(m["content"] for m in msgs if m["role"] != "system")
                return orchestrator.pool.run(flat, "code", use_cache=False)[0]
            except Exception as exc:
                print(f"[builder] provider pool failed ({exc}); using Groq")
        return _retry(lambda: call_once(msgs, "CODE", max_tok=2000, temp=0.2, model=FAST_MODEL))

    router = Router(setup_store, _strong_cloud, _fast_cloud, LocalClient.from_env())

schedule_store = None
board = privacy = activity_log = nudges = bridge = people_db = sync_service = guardian = projects_db = autopilot = guard_settings = scanner_obj = download_watcher = sweeper = ransom_watch = writer_tracker = None
proc_watcher = window_watcher = screen_watcher = tray = None
latest_page: dict = {}

if AWARE_OK:
    privacy = PrivacyState()
    activity_log = ActivityLog(privacy)
    people_db = People()
    projects_db = Projects()
    from awareness.hardware import Hardware
    from awareness.netinfo import NetBoard
    from awareness import programs as _programs
    from vanta_ui.board import Board
    from agent.schedules import Schedules
    guardian = Guardian(AuditLog(), programs=lambda: _programs.installed())
    schedule_store = Schedules()
    board = Board(Hardware(), NetBoard(), lambda ev, d, sid: socketio.emit(ev, d, room=sid))
    threading.Thread(target=board.run, name="vanta-board", daemon=True).start()
    guard_settings = GuardSettings()

    def _auto_notify(kind, d):
        p = d["proposal"]; t = p["target"]
        what = f"stop {t.get('name', 'that program')}" if p["kind"] == "end_process" else f"quarantine {Path(str(t.get('path', ''))).name}"
        if kind == "done":
            msg = f"I went ahead and {'asked ' + str(t.get('name')) + ' to stop' if p['kind'] == 'end_process' else 'moved ' + Path(str(t.get('path', ''))).name + ' to quarantine'}. You can undo file moves in Settings > Safety."
        elif kind == "held":
            msg = f"I didn't {what}. {d['why']}"
        else:
            msg = f"I tried to {what} but couldn't: {d['why']}"
        socketio.emit("response", {"text": msg})
        nudges.nudge(f"auto:{p['id']}", "medium", "VANTA acted on its own" if kind == "done" else "Needs your decision", msg)
        _emit_guardian_state()

    autopilot = Autopilot(guardian, guard_settings, _auto_notify)

    def _explain(facts: dict) -> str:
        """Plain-language 'what is this and what is it for', from the scan facts plus a quick web look-up of the name."""
        research = ""
        try:
            if GOOGLE_OK:
                research = get_google(f"what is {facts['name']} {facts.get('publisher', '')} software program") or ""
        except Exception:
            pass
        brief = {k: facts.get(k) for k in ("name", "kind", "size", "publisher", "label", "reasons", "vouched", "inside", "strings")}
        msgs = [{"role": "system", "content": "You explain downloaded files to a non-technical person. Use ONLY the facts and search notes given. "
                 "In at most 3 short sentences say what this probably is, what it is normally used for, and whether anything looks off. "
                 "If you are not sure, say so plainly. Never claim a file is safe or malicious beyond the stated verdict."},
                {"role": "user", "content": f"Facts: {json.dumps(brief, default=str)[:1800]}\n\nCode/script excerpt:\n{(facts.get('text') or '')[:2500]}\n\nWeb notes:\n{research[:1500]}"}]
        return call_once(msgs, "CHAT", max_tok=220, temp=0.2).strip()

    scanner_obj = Scanner(explain=_explain, is_trusted=lambda r: guard_settings.is_trusted(r.get("name", ""), r.get("path", ""), (r.get("signature") or {}).get("publisher", "")))

    _exe_safe: dict = {}

    def _contain_now(kind_label: str, targets: list, reason: str, family: dict | None = None, tree: bool = True) -> list[str]:
        """Emergency containment: no waiting, no asking. Same safety refusals as always. Everything is logged as 'VANTA (emergency)'.
        targets: [{'pid','name','created','exe'}]. Returns plain sentences about what was done."""
        done = []
        expanded = []
        for t in targets:
            if not t.get("pid") and t.get("exe"):          # a flagged file: also stop every copy of it that is running
                import psutil
                for pr in psutil.process_iter(["pid", "name", "exe", "create_time"]):
                    try:
                        if pr.info["exe"] and os.path.normcase(pr.info["exe"]) == os.path.normcase(t["exe"]):
                            expanded.append({"pid": pr.info["pid"], "name": pr.info["name"], "exe": t["exe"], "created": pr.info["create_time"]})
                    except Exception:
                        continue
            expanded.append(t)
        for t in expanded:
            if guard_settings.is_trusted(str(t.get("name", "")), str(t.get("exe", ""))):
                done.append(f"I left {t.get('name')} alone because you told me to trust it.")
                continue
            for kind, target in (("end_process", {"pid": t.get("pid"), "name": t.get("name"), "created": t.get("created"), "tree": tree}),
                                 ("quarantine", {"path": t.get("exe", "")})):
                if kind == "end_process" and not t.get("pid"):
                    continue
                if kind == "quarantine" and not Path(str(t.get("exe", ""))).is_file():
                    continue
                try:
                    pr = guardian.propose(kind, target, reason)
                    guardian.approve(pr["id"], who="VANTA (emergency)")
                    done.append(f"Stopped {t.get('name')} and everything it started." if kind == "end_process" else f"Quarantined {Path(str(t.get('exe'))).name}.")
                except Refused as exc:
                    done.append(f"Couldn't {('stop ' + str(t.get('name'))) if kind == 'end_process' else 'quarantine the file'}: {exc}")
        return done

    def _announce(title: str, body: str, done: list[str], fam: dict | None) -> None:
        extra = ("\n\nOnly thing left for you: " + fam["you"]) if (fam and fam.get("family") in ("keylogger", "infostealer", "backdoor", "banker")) else ""
        socketio.emit("stage", guardian_stage("high", title, body + ("\n\nWhat I did: " + " ".join(done) if done else "") + extra, [], 0))
        socketio.emit("response", {"text": f"{title}. {' '.join(done)}".strip()})
        nudges.nudge(f"emergency:{title[:30]}", "high", title, " ".join(done)[:200] or body[:200])
        _emit_guardian_state()

    def _on_ransom(writers: list, sig: dict) -> None:
        safe = []
        for w in writers:
            # Speed matters here, so use what the background sweep already learned; never hash a program while files are burning.
            if _exe_safe.get(str(w.get("exe") or "")) == "safe":
                continue                                   # a verified, signed app: alert instead of killing
            safe.append(w)
        why = ", ".join({"canary": "a decoy file was changed", "burst": f"{sig['files']} files changed in seconds", "rename": f"files renamed to {sig.get('ext') or 'a new ending'}", "notes": "ransom-style notes appeared in several folders"}[k] for k in sig["why"])
        fam = {"you": "Disconnect from Wi-Fi, don't pay anything, and check your backups. Ask me which files changed."}
        if not safe:
            _announce("Files are being changed very fast", f"Signs of ransomware: {why}. The program doing it looks like a verified app, so I did not stop it. Check that this is something you started.", [], fam)
            return
        done = _contain_now("ransomware", safe, f"ransomware behaviour: {why}")
        _announce("I stopped something that looked like ransomware", f"Signs: {why}. Culprit: {', '.join(w['name'] for w in safe)}.", done, fam)

    def _on_ransom_unknown(sig: dict) -> None:
        _announce("Files are being changed very fast", f"Signs of ransomware ({sig['files']} files in {sig['dirs']} folders), but I couldn't tell which program is doing it, so I didn't stop anything. If you didn't start this, disconnect from Wi-Fi and shut the computer down.", [], {"you": "Disconnect from Wi-Fi and don't pay anything."})

    try:
        _prot = [Path.home() / d for d in ("Documents", "Desktop", "Pictures", "Downloads")]
        _prot = [d for d in _prot if d.is_dir()]
        writer_tracker = WriterTracker()
        ransom_watch = RansomwareWatch(plant_canaries(_prot) if guard_settings.data["emergency"] else [], writer_tracker, _on_ransom, _on_ransom_unknown)
        ransom_watch.enabled = bool(guard_settings.data["emergency"])
        ransom_watch._folders = _prot
    except Exception as _re:
        print(f"[ransomware] watch unavailable: {_re}")

    def _on_scan(res: dict) -> None:
        """Called for every finished scan. Safe files stay quiet; anything else is shown, and risky files come with actions."""
        socketio.emit("scan_result", res)
        if res["label"] == "safe":
            return
        if res["label"] == "unknown" and res.get("kind") not in ("windows program", "linux program", "script"):
            return
        title = {"dangerous": f"{res['name']} looks dangerous", "suspicious": f"{res['name']} looks suspicious", "unknown": f"I checked {res['name']}"}[res["label"]]
        fam = res.get("family")
        body = (res.get("about") or "") + ("\n\n" if res.get("about") else "") + (
            "What I found: " + "; ".join(res["reasons"]) if res["reasons"] else "No red flags found, but I couldn't confirm who made it.")
        if fam:
            body = f"Type: {fam['family']}. {fam['does']}\n\n" + body + f"\n\nWhat to do: {fam['you']}"
            title = f"{res['name']}: {fam['family']}"
        if res["label"] == "dangerous" and guard_settings.data["emergency"]:
            # Confirmed malware: stop and contain it now. No question, no waiting.
            done = _contain_now(fam["family"] if fam else "malware", [{"name": res["name"], "exe": res["path"]}], f"{fam['family'] if fam else 'malware'} found by scan")
            _announce(title, body.split("\n\nWhat to do:")[0], done, fam)
            return
        props = []
        if res["label"] in ("dangerous", "suspicious"):
            try:
                props.append(guardian.propose("quarantine", {"path": res["path"]}, "; ".join(res["reasons"][:2]) or "flagged by my scan"))
            except Refused:
                pass
        secs = int(guard_settings.data["veto_seconds"]) if (autopilot.active() and res.get("act") and props) else 0
        socketio.emit("stage", guardian_stage("high" if res["label"] == "dangerous" else "medium", title, body, props, secs) if props else
                      guardian_stage("medium", title, body, []))
        if secs:
            autopilot.schedule(props)
        nudges.nudge(f"scan:{res['sha256'][:12]}", "high" if res["label"] == "dangerous" else "medium" if props else "low", title, (res["reasons"] or ["Couldn't verify the publisher."])[0])
        _emit_guardian_state()

    _dl = Path(os.getenv("VANTA_SCAN_FOLDERS", str(Path.home() / "Downloads"))).expanduser()
    download_watcher = DownloadWatcher(scanner_obj, [Path(x) for x in os.getenv("VANTA_SCAN_FOLDERS", str(_dl)).split(os.pathsep)], _on_scan)
    def _on_sweep(r: dict) -> None:
        _exe_safe[r["path"]] = r["label"]
        if r["label"] in ("dangerous", "suspicious"):
            _on_scan(r)
    sweeper = Sweeper(scanner_obj, _on_sweep)
    bridge = MemoryBridge(activity_log, people_db, vanta_memory if MEMORY_OK else None)
    nudges = NudgeEngine(lambda ev, data: socketio.emit(ev, data))
    privacy.on_change(lambda snap: socketio.emit("privacy_state", snap))

    def _on_process_alert(severity, title, message, source, evidence=None):
        sev = {"high": "high", "medium": "medium"}.get(severity, "low")
        props = []
        trusted = bool(evidence) and guard_settings.is_trusted(str(evidence.get("name", "")), str(evidence.get("exe", "")))
        verdict = None
        if evidence and evidence.get("exe") and not trusted:
            try:
                verdict = scanner_obj.scan(Path(evidence["exe"]), explain=False)       # look inside before deciding anything
            except Exception:
                verdict = None
            if verdict and verdict["label"] == "safe":
                activity_log.add("process", "scan_cleared", app=str(evidence.get("name", "")), title=f"{verdict['name']} checked: {'; '.join(verdict['vouched'])}"[:120])
                return                                                           # a real, verified app: don't bother you, don't touch it
            if verdict and verdict["label"] == "dangerous" and guard_settings.data["emergency"]:
                _on_scan(verdict)                                                    # confirmed malware: handled immediately
                return
            if verdict and verdict["reasons"]:
                message += "\n\nI also looked inside the file: " + "; ".join(verdict["reasons"][:3]) + "."
        if evidence and evidence.get("pid") and not trusted:
            # Offer containment, never perform it. Each proposal is checked now and again when you approve.
            for kind, target in (("end_process", {"pid": evidence["pid"], "name": evidence.get("name"), "created": evidence.get("created")}),
                                 ("quarantine", {"path": evidence.get("exe", "")})):
                try:
                    props.append(guardian.propose(kind, target, title))
                except Refused:
                    pass
        if props:
            # Autopilot only acts on its own when my scan is confident. Unknown files are always left for you.
            secs = int(guard_settings.data["veto_seconds"]) if (autopilot.active() and verdict and verdict.get("act")) else 0
            socketio.emit("stage", guardian_stage(severity, title, message, props, secs))
            if secs:
                autopilot.schedule(props)
        else:
            socketio.emit("alert", {"severity": severity, "title": title, "message": message, "source": source})
        nudges.nudge(f"{source}:{title}", sev, title, message)

    sync_service = None
    try:
        from vanta_knowledge.notes import Notes
        from vanta_sync.service import SyncService
        notes_db = Notes()
        def _phone_reply(text: str) -> str:
            """Text-only answers for the phone. No files, no commands, no approvals: nothing here can act on the laptop."""
            sid = "phone"
            try:
                rag = get_rag(text)
            except Exception:
                rag = ""
            effort = pick_reasoning_effort("CHAT", False, False, False, bool(conversations.get(sid)))
            msgs = build_prompt(sid, text, "CHAT", rag, "", effort)
            msgs[0]["content"] += ("\n\n[You are replying to the user's phone. Keep it short and plain. You cannot run commands, "
                                   "open files or change anything on the computer from here; if asked, say that needs the laptop.]")
            try:
                extra = "\n".join(x for x in (bridge.context_for(text), projects_db.context_for(text)) if x)
                if extra:
                    msgs[0]["content"] += "\n\n[Personal context, use only if relevant]\n" + extra
            except Exception:
                pass
            reply = call_once(msgs, "CHAT", reasoning_effort=effort)
            save_history(sid, text, reply)
            return reply

        sync_service = SyncService(people_db.path, notes_db.path, notes_db, reply=_phone_reply, projects_path=projects_db.path,
                                   on_ask=lambda t: nudges.nudge(f"phone:{t[:30]}", "medium", "From your phone", t),
                                   on_state=lambda st: socketio.emit("sync_state", st))
        if os.getenv("VANTA_SYNC_PASSPHRASE"):
            threading.Thread(target=lambda: sync_service.unlock(os.environ["VANTA_SYNC_PASSPHRASE"]), daemon=True).start()
    except Exception as _se:
        print(f"[sync] unavailable: {_se}")

    proc_watcher = ProcessWatcher(activity_log, _on_process_alert)
    window_watcher = WindowWatcher(activity_log)
    screen_watcher = ScreenWatcher(activity_log)


def start_awareness(port: int) -> None:
    if not AWARE_OK:
        return
    proc_watcher.start()
    if download_watcher:
        download_watcher.start()
        sweeper.start()
    if ransom_watch and ransom_watch.canaries:
        try:
            from watchdog.events import FileSystemEventHandler
            from watchdog.observers import Observer

            class _RH(FileSystemEventHandler):
                def on_modified(self, e):
                    if not e.is_directory: ransom_watch.on_event("modified", e.src_path)
                def on_created(self, e):
                    if not e.is_directory: ransom_watch.on_event("created", e.src_path)
                def on_deleted(self, e):
                    if not e.is_directory: ransom_watch.on_event("deleted", e.src_path)
                def on_moved(self, e):
                    if not e.is_directory: ransom_watch.on_event("moved", e.src_path, e.dest_path)
            _ro = Observer(); _ro.daemon = True
            for _d in getattr(ransom_watch, "_folders", []):
                _ro.schedule(_RH(), str(_d), recursive=True)
            _ro.start()
            threading.Thread(target=lambda: [(writer_tracker.sample(), time.sleep(2)) for _ in iter(int, 1)], name="vanta-writers", daemon=True).start()
        except Exception as exc:
            print(f"[ransomware] folder watching unavailable: {exc}")
    window_watcher.start()
    screen_watcher.start()          # stays idle unless the 'screen' source is switched on
    global tray
    tray = Tray(privacy, f"http://127.0.0.1:{port}")
    tray.start()

    def _housekeeping():
        while True:
            try:
                nudges.escalate_due()
                if int(time.time()) % (6 * 3600) < 60:
                    bridge.nightly()
            except Exception as exc:
                print(f"[awareness] housekeeping: {exc}")
            time.sleep(30)
    threading.Thread(target=_housekeeping, name="vanta-housekeeping", daemon=True).start()

    def _telemetry_loop():
        from vanta_ui.telemetry import Telemetry
        tel = Telemetry()
        while True:
            time.sleep(2)
            try:
                if not conversations:          # nobody is looking; don't spend CPU
                    continue
                win = window_watcher.current() if window_watcher else None
                if win and not privacy.allows("window", win[0], win[1]):
                    win = None
                socketio.emit("telemetry", tel.sample(window=win, idle=False))
            except Exception as exc:
                print(f"[telemetry] {exc}")
    threading.Thread(target=_telemetry_loop, name="vanta-telemetry", daemon=True).start()
    threading.Thread(target=_scheduler_loop, name="vanta-schedules", daemon=True).start()


# ─────────────────────────────────────────────────────────────────────────────
# ██  HTTP ROUTES
# ─────────────────────────────────────────────────────────────────────────────
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html", error=None)
    client = request.remote_addr or "?"
    if auth.throttled(client):
        return render_template("login.html", error="Too many attempts. Wait a few minutes."), 429
    if auth.check(request.form.get("token")):
        session.clear()
        session["vanta_auth"] = True
        return redirect("/")
    auth.record_fail(client)
    return render_template("login.html", error="That token isn't right."), 401


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/login")


UI_DIST = Path(__file__).resolve().parent.parent / "ui" / "dist"


@app.route("/app/<path:filename>")
def ui_assets(filename):
    """Built React UI assets (hashed filenames, nothing secret in them)."""
    from flask import send_from_directory
    return send_from_directory(UI_DIST, filename)


@app.route("/")
def index():
    if not _is_authed():
        return redirect("/login")
    if (UI_DIST / "index.html").exists() and request.args.get("classic") is None:
        from flask import send_from_directory
        resp = send_from_directory(UI_DIST, "index.html")
        resp.headers["Cache-Control"] = "no-store"
        return resp
    return classic_index()


@app.route("/classic")
def classic():
    if not _is_authed():
        return redirect("/login")
    return classic_index()


def classic_index():
    """Render the main UI page.

    The template ``index.html`` expects a ``boot_status`` mapping that provides
    initial status strings for the UI, core, knowledge, and voice subsystems.
    This used to not get passed at all, then got passed with lowercase values
    the frontend's uppercase check never matched, then got passed correctly
    cased but hardcoded to "UNAVAILABLE" regardless of real state. This
    computes actual status from what's already known at this point.
    (The 500-error claim above doesn't hold, for the record — Flask/Jinja's
    default Undefined stringifies to empty rather than raising; verified
    directly by rendering the template with boot_status omitted.)
    """
    boot_status = {
        "ui": "READY",                                   # we're rendering it right now
        "core": "READY" if GROQ_API_KEY else "UNAVAILABLE",
        "knowledge": "READY" if (RAG_OK or GOOGLE_OK) else "UNAVAILABLE",
        "voice": "READY" if GROQ_API_KEY else "UNAVAILABLE",  # transcription rides the same Groq client
    }
    return render_template(
        "index.html",
        agent_name=AGENT,
        rag_ok=RAG_OK,
        boot_status=boot_status,
    )

@app.route("/transcribe", methods=["POST"])
def transcribe():
    if not _is_authed():
        return jsonify({"error": "unauthorized"}), 401
    f = request.files.get("audio")
    if not f:
        return jsonify({"error": "No audio"}), 400
    if f.mimetype not in {"audio/webm", "audio/ogg", "audio/wav", "audio/mpeg"}:
        return jsonify({"error": "Unsupported audio type"}), 415
    if request.content_length and request.content_length > app.config["MAX_CONTENT_LENGTH"]:
        return jsonify({"error": "Audio upload is too large"}), 413
    if _offline():
        return jsonify({"error": "Offline mode is on, so voice typing (which needs the internet) is off."}), 503
    tmp = Path(tempfile.gettempdir()) / f"vanta_ptt_{uuid.uuid4().hex}.webm"
    f.save(str(tmp))
    try:
        with open(tmp, "rb") as fp:
            r = client.audio.transcriptions.create(
                model="whisper-large-v3-turbo", file=fp, response_format="text")
        text = r.strip() if isinstance(r, str) else r.text.strip()
        return jsonify({"text": text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        tmp.unlink(missing_ok=True)

@app.route("/api/awareness/page", methods=["POST"])
def api_awareness_page():
    """Receives page snapshots from the VANTA Eyes Chrome extension (token required)."""
    if not _is_authed():
        return jsonify({"error": "unauthorized"}), 401
    if not AWARE_OK:
        return jsonify({"ok": False}), 503
    d = request.get_json(silent=True) or {}
    url, title, text = str(d.get("url", ""))[:500], str(d.get("title", ""))[:200], str(d.get("text", ""))[:2500]
    if not privacy.allows("browser", "chrome", title, url):
        return jsonify({"ok": True, "recorded": False})
    host = re.sub(r"^https?://([^/]+).*$", r"\1", url)
    activity_log.add("browser", "page", app="chrome", title=f"{title} ({host})", url=url)
    latest_page.update({"url": url, "title": title, "text": privacy.redact(text), "ts": time.time()})  # RAM only
    return jsonify({"ok": True, "recorded": True})


@app.route("/api/awareness/status")
def api_awareness_status():
    if not _is_authed():
        return jsonify({"error": "unauthorized"}), 401
    if not AWARE_OK:
        return jsonify({"available": False})
    return jsonify({"available": True, "privacy": privacy.snapshot(), "sandbox": sandbox.isolation_report(),
                    "window_watcher_supported": window_watcher.supported,
                    "process_learning": proc_watcher.learning})


@app.route("/health")
def health():
    return jsonify({"status": "ok", "model": MODEL,
                    "rag": RAG_OK, "google": GOOGLE_OK, "orch": ORCH_OK})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"\n{'='*55}")
    print("  VANTA v4 — Natural Intelligence Mode")
    print(f"  http://localhost:{port}")
    print(f"  RAG: {'✓' if RAG_OK else '✗'}  Google: {'✓' if GOOGLE_OK else '✗'}  Orch: {'✓' if ORCH_OK else '✗'}  Watcher: {'✓' if WATCHER_OK else '✗'}")
    print(f"{'='*55}")
    print(f"  Access token: {auth.get_token()}   (stored in {auth.TOKEN_FILE})")
    print(f"{'='*55}\n")

    if WATCHER_OK:
        watcher_daemon = WatcherDaemon(client, MODEL, socketio, agent_name=AGENT)
        watcher_daemon.start()

    # allow_unsafe_werkzeug: lets VANTA run as a background/login service
    # (no interactive terminal). Safe here because we only bind 127.0.0.1.
    start_awareness(port)
    socketio.run(app, host="127.0.0.1", port=port, debug=False,
                 allow_unsafe_werkzeug=True)
