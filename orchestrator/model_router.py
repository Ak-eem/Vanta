"""
model_router.py
Maps task types to the best AI model priority list.
Models are used via browser automation (no API keys).
If the top model is rate-limited, the next one takes over.
"""

# ━━━ Model registry ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Each entry: chat URL, selector map, rate-limit signatures
MODELS = {
    "claude": {
        "url":    "https://claude.ai/new",
        "name":   "Claude",
        "input_sel":    'div[contenteditable="true"].ProseMirror',
        "send_sel":     'button[aria-label="Send message"]',
        "response_sel": '.font-claude-message',
        "rate_limit_texts": [
            "reached your usage limit",
            "too many messages",
            "upgrade your plan",
            "Claude is unavailable",
            "usage cap",
        ],
    },
    "chatgpt": {
        "url":    "https://chatgpt.com/",
        "name":   "ChatGPT",
        "input_sel":    'textarea[placeholder]',
        "send_sel":     'button[data-testid="send-button"]',
        "response_sel": '[data-message-author-role="assistant"] .markdown',
        "rate_limit_texts": [
            "reached the GPT-4o limit",
            "sending messages too quickly",
            "at capacity",
            "rate limited",
            "daily limit",
        ],
    },
    "gemini": {
        "url":    "https://gemini.google.com/app",
        "name":   "Gemini",
        "input_sel":    'rich-textarea div[contenteditable="true"]',
        "send_sel":     'button[aria-label="Send message"]',
        "response_sel": '.model-response .response-content',
        "rate_limit_texts": [
            "rate limit",
            "too many requests",
            "quota exceeded",
            "try again later",
        ],
    },
    "deepseek": {
        "url":    "https://chat.deepseek.com/",
        "name":   "DeepSeek",
        "input_sel":    'textarea',
        "send_sel":     'button[type="submit"]',
        "response_sel": '.ds-markdown',
        "rate_limit_texts": [
            "rate limit",
            "server is busy",
            "too many requests",
            "overloaded",
        ],
    },
    "perplexity": {
        "url":    "https://www.perplexity.ai/",
        "name":   "Perplexity",
        "input_sel":    'textarea[placeholder]',
        "send_sel":     'button[aria-label="Submit"]',
        "response_sel": '.prose',
        "rate_limit_texts": [
            "rate limit",
            "too many requests",
            "upgrade",
        ],
    },
}

# ━━━ Priority routing table ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Best model first — orchestrator tries them in order on rate-limit failover
PRIORITIES: dict[str, list[str]] = {
    "ui":         ["claude",     "chatgpt",  "gemini"],
    "auth":       ["claude",     "chatgpt",  "deepseek"],
    "database":   ["chatgpt",    "deepseek", "claude"],
    "security":   ["claude",     "perplexity", "chatgpt"],
    "backend":    ["deepseek",   "chatgpt",  "claude"],
    "research":   ["perplexity", "gemini",   "claude"],
    "code":       ["deepseek",   "chatgpt",  "claude"],
    "devops":     ["chatgpt",    "deepseek", "claude"],
    "other":      ["claude",     "chatgpt",  "gemini"],
}

# Free OpenRouter models used for default subtask execution.
FREE_MODEL_PRIORITIES: dict[str, list[str]] = {
    "ui":         ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "auth":       ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "database":   ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "security":   ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "backend":    ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "research":   ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "code":       ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "devops":     ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
    "other":      ["poolside/laguna-s-2.1:free", "google/gemini-2.0-flash-exp:free"],
}


def get_model_list(task_type: str) -> list[str]:
    """Return the priority-ordered model list for a task type."""
    return PRIORITIES.get(task_type, PRIORITIES["other"])


def get_model_info(model_key: str) -> dict:
    """Return all metadata for a model."""
    return MODELS.get(model_key, MODELS["chatgpt"])


def is_rate_limited(page_text: str, model_key: str) -> bool:
    """Check if the page text signals a rate limit for this model."""
    model = MODELS.get(model_key, {})
    sigs  = model.get("rate_limit_texts", [])
    lower = page_text.lower()
    return any(sig.lower() in lower for sig in sigs)
