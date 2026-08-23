"""
Optional OpenRouter dual-model API client.

OpenRouter is used for orchestration-only calls (task analysis and result
merging). Browser automation remains in :mod:`browser_agent`: the browser
agent still owns model-page sessions, login state, selectors, and its existing
rate-limit handoff behavior.
"""

from __future__ import annotations

import json
import logging
import os
import urllib.error
import urllib.request
from types import SimpleNamespace
from typing import Any, Mapping, Optional

from .model_router import FREE_MODEL_PRIORITIES


logger = logging.getLogger(__name__)

DEFAULT_FLASH_MODEL = "google/gemini-2.0-flash-exp:free"
DEFAULT_BRAIN_MODEL = "nvidia/nemotron-3-ultra-550b-a55b:free"
DEFAULT_BRAIN_FALLBACK_MODEL = "deepseek/deepseek-r1:free"


class OpenRouterError(RuntimeError):
    """Raised when an OpenRouter request cannot be completed."""

    def __init__(
        self,
        message: str,
        *,
        status_code: Optional[int] = None,
        retryable: bool = False,
    ) -> None:
        super().__init__(message)
        self.status_code = status_code
        self.retryable = retryable


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
    """OpenRouter client with Flash for fast calls and a brain failover path.

    The public ``chat.completions.create`` shape intentionally matches the
    client already used by Vanta, so the API path is additive and does not
    require changes to the browser automation implementation. Brain requests
    transparently retry on the configured fallback for transient provider
    failures; callers continue to receive the same response shape.
    """

    COMPLEX_TASK_TYPES = frozenset(
        {"security", "database", "backend", "devops", "code", "research"}
    )

    def __init__(
        self,
        api_key: str,
        *,
        base_url: str = "https://openrouter.ai/api/v1",
        flash_model: str = DEFAULT_FLASH_MODEL,
        brain_model: str = DEFAULT_BRAIN_MODEL,
        brain_fallback_model: str = DEFAULT_BRAIN_FALLBACK_MODEL,
        timeout: float = 90.0,
        http_referer: str = "http://localhost",
        app_title: str = "Vanta",
    ) -> None:
        self.api_key = api_key.strip()
        self.base_url = base_url.rstrip("/")
        self.flash_model = flash_model
        self.brain_model = brain_model
        self.brain_fallback_model = brain_fallback_model
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
            flash_model=os.getenv("OPENROUTER_FLASH_MODEL", DEFAULT_FLASH_MODEL),
            brain_model=os.getenv("OPENROUTER_BRAIN_MODEL", DEFAULT_BRAIN_MODEL),
            brain_fallback_model=os.getenv(
                "OPENROUTER_BRAIN_FALLBACK_MODEL", DEFAULT_BRAIN_FALLBACK_MODEL
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
        """Choose Flash for routine work and the configured brain for reasoning."""
        if complexity in {"complex", "deep", "hard"}:
            return self.brain_model
        if task_type and task_type.lower() in self.COMPLEX_TASK_TYPES:
            return self.brain_model
        return self.flash_model

    def execute(
        self,
        task_prompt: str,
        task_type: str,
        callback: Optional[Any] = None,
        on_progress: Optional[Any] = None,
    ) -> tuple[str, str]:
        """Execute a subtask through the free OpenRouter priority list.

        Each candidate is sent through the existing ``complete`` path. Network
        errors, timeouts, HTTP 429s, and HTTP 5xx responses are retryable, so
        execution fails over to the next free model. The existing brain to
        brain-fallback behavior remains owned by ``complete``.
        """
        progress = on_progress or callback
        models = FREE_MODEL_PRIORITIES.get(
            task_type, FREE_MODEL_PRIORITIES["other"]
        )
        last_error: Optional[OpenRouterError] = None

        for index, model in enumerate(models):
            if progress:
                progress(model, "trying", None)
            try:
                response = self.complete(
                    model=model,
                    messages=[{"role": "user", "content": task_prompt}],
                )
                content = response.choices[0].message.content
                if progress:
                    progress(model, "done", content)
                return content, model
            except OpenRouterError as exc:
                last_error = exc
                logger.warning(
                    "OpenRouter free model=%s failed (%s/%s): %s",
                    model,
                    index + 1,
                    len(models),
                    exc,
                )
                if progress:
                    progress(model, "error", str(exc))

        raise last_error or OpenRouterError("OpenRouter free model execution failed")

    def complete(
        self,
        *,
        model: str,
        messages: list[Mapping[str, str]],
        max_tokens: int = 4096,
        temperature: Optional[float] = 0.2,
        **extra: Any,
    ) -> SimpleNamespace:
        """Call ``/chat/completions`` with transparent brain failover."""
        models = [model]
        if model == self.brain_model and self.brain_fallback_model != model:
            models.append(self.brain_fallback_model)

        last_error: Optional[OpenRouterError] = None
        for attempt, requested_model in enumerate(models):
            try:
                response = self._complete_once(
                    model=requested_model,
                    messages=messages,
                    max_tokens=max_tokens,
                    temperature=temperature,
                    extra=extra,
                )
                logger.info(
                    "OpenRouter request served by model=%s (requested_model=%s)",
                    requested_model,
                    model,
                )
                return response
            except OpenRouterError as exc:
                last_error = exc
                has_fallback = attempt + 1 < len(models)
                if not (has_fallback and exc.retryable):
                    raise
                logger.warning(
                    "OpenRouter brain model=%s failed with %s; transparently "
                    "failing over to brain fallback model=%s",
                    requested_model,
                    exc,
                    self.brain_fallback_model,
                )

        # The loop always returns or raises, but keep a useful type-safe guard.
        raise last_error or OpenRouterError("OpenRouter request failed")

    def _complete_once(
        self,
        *,
        model: str,
        messages: list[Mapping[str, str]],
        max_tokens: int,
        temperature: Optional[float],
        extra: Mapping[str, Any],
    ) -> SimpleNamespace:
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
            retryable = exc.code == 429 or 500 <= exc.code <= 599
            raise OpenRouterError(
                f"OpenRouter HTTP {exc.code}: {detail[:500]}",
                status_code=exc.code,
                retryable=retryable,
            ) from exc
        except (urllib.error.URLError, TimeoutError, ConnectionError) as exc:
            raise OpenRouterError(
                f"OpenRouter request failed: {exc}", retryable=True
            ) from exc

        try:
            data = json.loads(raw)
            choice = data["choices"][0]
            message = choice["message"]
            content = message.get("content", "")
        except (ValueError, KeyError, IndexError, TypeError) as exc:
            raise OpenRouterError(
                "OpenRouter returned an invalid completion"
            ) from exc

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
