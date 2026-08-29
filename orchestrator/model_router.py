"""
model_router.py
Maps task types to the best AI model priority list.
Models are used via browser automation (no API keys).
If the top model is rate-limited, the next one takes over.
"""

# ━━━ Model registry ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Each entry: chat URL, selector map, rate-limit signatures
MODELS = {
    "claude": {
        "url":     "https://claude.ai/new",
        "name":    "Claude",
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
        "url":     "https://chatgpt.com/",
        "name":    "ChatGPT",
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
        "url":     "https://gemini.google.com/app",
        "name":    "Gemini",
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
        "url":     "https://chat.deepseek.com/",
        "name":    "DeepSeek",
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
        "url":     "https://www.perplexity.ai/",
        "name":    "Perplexity",
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

# ━━━ Priority routing table ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Best model first — orchestrator tries them in order on rate-limit failover
PRIORITIES: dict[str, list[str]] = {
    "ui":          ["claude",     "chatgpt",  "gemini"],
    "auth":        ["claude",     "chatgpt",  "deepseek"],
    "database":    ["chatgpt",    "deepseek", "claude"],
    "security":    ["claude",     "perplexity", "chatgpt"],
    "backend":     ["deepseek",   "chatgpt",  "claude"],
    "research":    ["perplexity", "gemini",   "claude"],
    "code":        ["deepseek",   "chatgpt",  "claude"],
    "devops":      ["chatgpt",     "deepseek", "claude"],
    "other":       ["claude",     "chatgpt",  "gemini"],
}

# Free OpenRouter models used for default subtask execution.
FREE_MODEL_PRIORITIES: dict[str, list[str]] = {
    "security": ["nvidia/nemotron-3-ultra-550b-a55b:free", "z-ai/glm-5.2:free"],
    "database": ["nvidia/nemotron-3-ultra-550b-a55b:free", "nvidia/nemotron-3-super-120b-a12b:free"],
    "backend": ["z-ai/glm-5.2:free", "nvidia/nemotron-3-super-120b-a12b:free"],
    "devops": ["nvidia/nemotron-3-ultra-550b-a55b:free", "z-ai/glm-5.2:free"],
    "code": ["z-ai/glm-5.2:free", "nvidia/nemotron-3-super-120b-a12b:free"],
    "research": ["nvidia/nemotron-3-ultra-550b-a55b:free", "z-ai/glm-5.2:free"],
    "ui": ["google/gemma-4-26b-a4b-it:free", "nvidia/nemotron-3.5-lightning:free"],
    "auth": ["nvidia/nemotron-3-super-120b-a12b:free", "z-ai/glm-5.2:free"],
    "other": ["google/gemma-4-26b-a4b-it:free", "nvidia/nemotron-3-ultra-550b-a55b:free"],
}

# Vision-capable OpenRouter models used for visual UI critique.
VISION_MODEL_PRIORITIES: dict[str, list[str]] = {
    "ui_critique": ["thinkingmachines/inkling:free", "nvidia/nemotron-nano-12b-v2-vl:free"],
    "text_heavy_ui": ["nvidia/nemotron-nano-12b-v2-vl:free", "thinkingmachines/inkling:free"],
    "structured_critique": ["google/gemma-4-26b-a4b-it:free", "thinkingmachines/inkling:free"],
    "multimodal_perception": ["nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free", "dots-studio/dots-3-note-preview:free"],
    "document_rerank": ["nvidia/llama-nemotron-rerank-vl-1b-v2:free"],
    "long_document": ["dots-studio/dots-3-note-preview:free", "thinkingmachines/inkling:free"],
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
    sigs = model.get("rate_limit_texts", [])
    lower = page_text.lower()
    return any(sig.lower() in lower for sig in sigs)