"""Optional OpenRouter dual-model API client.

OpenRouter is used for orchestration-only calls (task analysis and result
merging). Browser automation remains in :mod:`browser_agent`: the browser
agent still owns model-page sessions, login state, selectors, and its existing
rate-limit handoff behavior.
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request
from types import SimpleNamespace
from typing import Any, Mapping, Optional


class OpenRouterError(RuntimeError):
    """Raised when an OpenRouter request cannot be completed."""


class _Completions:
    """Small OpenAI/Groq-compatible facade used by the existing orchestrator."""

    def __init__(self, client: "OpenRouterClient") -> None:
        self._client = client

    def create(
        self,
        *,
        model: str,
        messages: list[Mapping[str, str]],
        max_tokens: int = 4096,
        temperature: Optional[float] = 0.2,
        **kwargs: Any,
    ) -> SimpleNamespace:
        return self._client.complete(
            model=model,
            messages=messages,
            max_tokens=max_tokens,
            temperature=temperature,
            **kwargs,
        )


class _Chat:
    def __init__(self, client: "OpenRouterClient") -> None:
        self.completions = _Completions(client)


class OpenRouterClient:
    """OpenRouter client with Flash for fast calls and R1 for deep calls.

    The public ``chat.completions.create`` shape intentionally matches the
    client already used by Vanta, so the API path is additive and does not
    require changes to the browser automation implementation.
    """

    COMPLEX_TASK_TYPES = frozenset(
        {"security", "database", "backend", "devops", "code", "research"}
    )

    def __init__(
        self,
        api_key: str,
        *,
        base_url: str = "https://openrouter.ai/api/v1",
        flash_model: str = "google/gemini-2.0-flash-exp:free",
        brain_model: str = "deepseek/deepseek-r1:free",
        timeout: float = 90.0,
        http_referer: str = "http://localhost",
        app_title: str = "Vanta",
    ) -> None:
        self.api_key = api_key.strip()
        self.base_url = base_url.rstrip("/")
        self.flash_model = flash_model
        self.brain_model = brain_model
        self.timeout = timeout
        self.http_referer = http_referer
        self.app_title = app_title
        self.chat = _Chat(self)

    @classmethod
    def from_env(cls) -> Optional["OpenRouterClient"]:
        """Build a client when OpenRouter is configured; otherwise return None."""
        enabled = os.getenv("OPENROUTER_ENABLED", "true").strip().lower()
        api_key = os.getenv("OPENROUTER_API_KEY", "").strip()
        if enabled in {"0", "false", "no", "off"} or not api_key:
            return None
        return cls(
            api_key,
            base_url=os.getenv(
                "OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1"
            ),
            flash_model=os.getenv(
                "OPENROUTER_FLASH_MODEL", "google/gemini-2.0-flash-exp:free"
            ),
            brain_model=os.getenv(
                "OPENROUTER_BRAIN_MODEL", "deepseek/deepseek-r1:free"
            ),
            timeout=float(os.getenv("OPENROUTER_TIMEOUT_SECONDS", "90")),
            http_referer=os.getenv("OPENROUTER_HTTP_REFERER", "http://localhost"),
            app_title=os.getenv("OPENROUTER_APP_TITLE", "Vanta"),
        )

    def model_for(
        self,
        task_type: Optional[str] = None,
        *,
        complexity: Optional[str] = None,
    ) -> str:
        """Choose Flash for routine work and R1 for complex reasoning."""
        if complexity in {"complex", "deep", "hard"}:
            return self.brain_model
        if task_type and task_type.lower() in self.COMPLEX_TASK_TYPES:
            return self.brain_model
        return self.flash_model

    def complete(
        self,
        *,
        model: str,
        messages: list[Mapping[str, str]],
        max_tokens: int = 4096,
        temperature: Optional[float] = 0.2,
        **extra: Any,
    ) -> SimpleNamespace:
        """Call ``/chat/completions`` and return a compatible response object."""
        payload: dict[str, Any] = {
            "model": model,
            "messages": messages,
            "max_tokens": max_tokens,
        }
        if temperature is not None:
            payload["temperature"] = temperature
        payload.update(extra)

        request = urllib.request.Request(
            f"{self.base_url}/chat/completions",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json",
                "HTTP-Referer": self.http_referer,
                "X-Title": self.app_title,
            },
            method="POST",
        )
        try:
            with urllib.request.urlopen(request, timeout=self.timeout) as response:
                raw = response.read().decode("utf-8")
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")
            raise OpenRouterError(
                f"OpenRouter HTTP {exc.code}: {detail[:500]}"
            ) from exc
        except (urllib.error.URLError, TimeoutError) as exc:
            raise OpenRouterError(f"OpenRouter request failed: {exc}") from exc

        try:
            data = json.loads(raw)
            choice = data["choices"][0]
            message = choice["message"]
            content = message.get("content", "")
        except (ValueError, KeyError, IndexError, TypeError) as exc:
            raise OpenRouterError("OpenRouter returned an invalid completion") from exc

        # Keep the response shape consumed by task_analyzer and orchestrator.
        return SimpleNamespace(
            id=data.get("id"),
            model=data.get("model", model),
            choices=[
                SimpleNamespace(
                    message=SimpleNamespace(
                        role=message.get("role", "assistant"), content=content
                    ),
                    finish_reason=choice.get("finish_reason"),
                )
            ],
            usage=data.get("usage"),
        )


# Descriptive alias for callers that want to name the routing responsibility.
OpenRouterModelRouter = OpenRouterClient


def get_openrouter_client() -> Optional[OpenRouterClient]:
    """Return the configured client, or None to retain the legacy provider."""
    return OpenRouterClient.from_env()
