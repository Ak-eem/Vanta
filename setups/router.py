"""Pick which model answers, based on the current setup. Offline never touches the internet."""
from __future__ import annotations

from typing import Callable, Optional, Tuple

LLM = Callable[[list], str]


class Unavailable(Exception):
    pass


def messages_to_prompt(messages: list) -> str:
    parts = []
    for m in messages:
        who = {"system": "Instructions", "user": "User", "assistant": "Assistant"}.get(m["role"], m["role"])
        parts.append(f"{who}: {m['content']}")
    return "\n\n".join(parts) + "\n\nAssistant:"


class Router:
    def __init__(self, store, strong_cloud: LLM, fast_cloud: LLM, local: Optional[object] = None) -> None:
        self.store, self.strong_cloud, self.fast_cloud, self.local = store, strong_cloud, fast_cloud, local

    def local_ready(self) -> bool:
        return bool(self.local and self.local.available())

    def _local_llm(self) -> LLM:
        if not self.local_ready():
            raise Unavailable("No local model is running. Install Ollama (ollama.com), run: ollama pull qwen2.5:3b, then try again.")
        return lambda msgs: self.local.generate(messages_to_prompt(msgs))

    def pair(self) -> Tuple[LLM, LLM]:
        """(strong, fast) for the current setup."""
        prof = self.store.profile
        if not prof["cloud"]:
            local = self._local_llm()
            return local, local
        if self.store.data["builder_fast"] == "local" and self.local_ready():
            return self.strong_cloud, self._local_llm()
        return self.strong_cloud, self.fast_cloud

    def strong(self) -> LLM:
        return self.pair()[0]

    def fast(self) -> LLM:
        return self.pair()[1]
