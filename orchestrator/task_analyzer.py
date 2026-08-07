"""
task_analyzer.py
Analyzes a user's request and breaks it into typed sub-tasks.
Uses Groq (fast + cheap) for the analysis call.
"""

import json, re

TASK_TYPES = {
    "ui":       {"desc": "Frontend / UI design / CSS / HTML / components"},
    "auth":     {"desc": "Authentication, login, OAuth, JWT, sessions"},
    "database": {"desc": "Database schema, SQL, ORMs, migrations, queries"},
    "security": {"desc": "Security review, XSS, CSRF, encryption, hardening"},
    "backend":  {"desc": "APIs, server logic, endpoints, middleware"},
    "research": {"desc": "Research, documentation, best practices, comparisons"},
    "code":     {"desc": "General programming, debugging, algorithms"},
    "devops":   {"desc": "Docker, CI/CD, deployment, infrastructure"},
    "other":    {"desc": "Anything else"},
}

ANALYSIS_PROMPT = """
Analyze the following task and decompose it into sub-tasks.

Available task types:
{types}

Return ONLY a valid JSON object. No preamble, no markdown:
{{
    "complexity": "simple" | "moderate" | "complex",
    "needs_orchestration": true | false,
    "overview": "one sentence summary",
    "subtasks": [
        {{
            "id": 1,
            "type": "one of the types above",
            "description": "what this sub-task needs to accomplish",
            "depends_on": [],
            "priority": 1
        }}
    ]
}}

Rules:
- Set needs_orchestration=true if complexity is "complex" OR if the task clearly benefits
  from multiple specialized models (e.g., has both UI + security + database components).
- Order subtasks by logical dependency (foundation first).
- Keep descriptions concrete and actionable.

Task: {task}
"""


def analyze_task(task: str, groq_client, model: str) -> dict:
    """
    Returns a dict describing the task's complexity and sub-tasks.
    Falls back to a simple structure on any error.
    """
    types_text = "\n".join(f"  - {k}: {v['desc']}" for k, v in TASK_TYPES.items())
    prompt     = ANALYSIS_PROMPT.format(types=types_text, task=task)

    try:
        resp = groq_client.chat.completions.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=800,
            temperature=0.1,
        )
        raw  = resp.choices[0].message.content.strip()
        # Strip markdown fences if present
        raw  = re.sub(r"^```(?:json)?\s*|\s*```$", "", raw, flags=re.MULTILINE).strip()
        return json.loads(raw)

    except Exception as e:
        print(f"[TaskAnalyzer] Analysis failed ({e}), using simple fallback")
        return {
            "complexity": "simple",
            "needs_orchestration": False,
            "overview": task[:80],
            "subtasks": [{"id": 1, "type": "code", "description": task, "depends_on": [], "priority": 1}],
        }


def should_orchestrate(analysis: dict) -> bool:
    """Decide whether the task warrants multi-model orchestration."""
    if analysis.get("needs_orchestration"):
        return True
    subtasks = analysis.get("subtasks", [])
    types    = {s["type"] for s in subtasks}
    # Orchestrate if there are 3+ distinct task types
    return len(types) >= 3
