"""Make small, flaky models dependable: ask for strict JSON, check it, and send the mistake back for a retry."""
from __future__ import annotations

import json
import re
from typing import Any, Callable, Optional


class GuardError(Exception):
    pass


def strip_fences(text: str) -> str:
    t = text.strip()
    m = re.match(r"^```[a-zA-Z0-9_+-]*\n(.*?)\n?```\s*$", t, re.S)
    return m.group(1) if m else t


def extract_json(text: str) -> Optional[Any]:
    """Find the first complete JSON object or array in a reply, even inside prose or code fences."""
    for m in re.finditer(r"[\{\[]", text):
        open_c = text[m.start()]
        close_c = "}" if open_c == "{" else "]"
        depth, in_str, esc = 0, False, False
        for i in range(m.start(), len(text)):
            c = text[i]
            if in_str:
                if esc:
                    esc = False
                elif c == "\\":
                    esc = True
                elif c == '"':
                    in_str = False
                continue
            if c == '"':
                in_str = True
            elif c == open_c:
                depth += 1
            elif c == close_c:
                depth -= 1
                if depth == 0:
                    try:
                        return json.loads(text[m.start():i + 1])
                    except Exception:
                        break
    return None


def ask_json(llm: Callable[[list], str], messages: list, validate: Callable[[Any], Optional[str]], retries: int = 3) -> Any:
    """Call the model until it returns JSON that `validate` accepts (validate returns None if fine, else a reason)."""
    msgs = list(messages)
    last = "no reply"
    for _ in range(retries):
        reply = llm(msgs) or ""
        data = extract_json(reply)
        problem = "I could not find any JSON in that reply." if data is None else validate(data)
        if problem is None:
            return data
        last = problem
        msgs += [{"role": "assistant", "content": reply[:3000]},
                 {"role": "user", "content": f"That did not work: {problem} Reply again with ONLY the corrected JSON."}]
    raise GuardError(f"The model could not give a usable answer after {retries} tries ({last})")
