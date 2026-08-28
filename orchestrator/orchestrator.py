"""orchestrator.py
The brain of multi-model orchestration.
Breaks a task into sub-tasks, routes each to the best model,
executes via OpenRouter by default (or opt-in browser automation),
and merges all results.
"""

import logging
import os
import threading
from typing import Any, Callable, Optional

from .task_analyzer import analyze_task, should_orchestrate
from .model_router import get_model_list, get_model_info
from .openrouter_router import OpenRouterClient, OpenRouterError


logger = logging.getLogger(__name__)

BROWSER_AUTOMATION = os.getenv("BROWSER_AUTOMATION", "manual").strip().lower() in {
    "auto",
    "on",
}

if BROWSER_AUTOMATION:
    try:
        from .browser_agent import BrowserAgentSync, RateLimitError

        BROWSER_OK = True
    except Exception:
        BrowserAgentSync = None
        RateLimitError = None
        BROWSER_OK = False
else:
    BrowserAgentSync = None
    RateLimitError = None
    BROWSER_OK = False


_EXPECTED_PROVIDER_ERRORS = (
    OpenRouterError,
    RuntimeError,
    TimeoutError,
    ConnectionError,
)
if RateLimitError is not None:
    _EXPECTED_PROVIDER_ERRORS += (RateLimitError,)


MERGE_PROMPT = """
You are merging outputs from multiple specialized AI models into one cohesive, production-ready result.

Original user request: {task}

Sub-task results:
{results}

Instructions:
- Combine all outputs into a single, coherent, complete response
- Remove duplications
- Ensure consistency (naming, style, interfaces)
- If multiple code files were produced, organize them clearly with FILENAME: headers
- The merged result should be complete and immediately usable
"""


class VantaOrchestrator:
    def __init__(self, groq_client, model: str):
        self.groq = groq_client
        self.model = model
        self._agent: Optional["BrowserAgentSync"] = None
        self._agent_lock = threading.Lock()
        self._closed = False

        # OpenRouter is an optional API path for orchestration calls only.
        # BrowserAgentSync below remains responsible for browser automation.
        self.openrouter = OpenRouterClient.from_env()
        if self.openrouter is not None:
            self.analysis_client = self.openrouter
            self.analysis_model = self.openrouter.flash_model
            self.merge_client = self.openrouter
            # OpenRouter owns transparent Nemotron -> DeepSeek R1 failover;
            # keep the existing analysis/merge wiring unchanged.
            self.merge_model = self.openrouter.brain_model
        else:
            self.analysis_client = groq_client
            self.analysis_model = model
            self.merge_client = groq_client
            self.merge_model = model

    def _get_agent(self) -> "BrowserAgentSync":
        """Lazily start one browser agent, safely when called by many threads."""
        if not BROWSER_OK or BrowserAgentSync is None:
            raise ImportError(
                "playwright not installed. Run: pip install playwright "
                "&& playwright install chromium"
            )

        with self._agent_lock:
            if self._closed:
                raise RuntimeError("VantaOrchestrator is closed")
            if self._agent is None:
                agent = BrowserAgentSync()
                agent.start()
                self._agent = agent
                print("[Orchestrator] Browser agent started.")
            return self._agent

    def close(self) -> None:
        """Stop the browser agent and release its resources; safe to call repeatedly."""
        with self._agent_lock:
            if self._closed:
                return
            self._closed = True
            agent = self._agent
            self._agent = None

        if agent is not None:
            try:
                agent.stop()
            except Exception:
                logger.exception("Unexpected error while stopping the browser agent")

    def stop(self) -> None:
        """Public alias for :meth:`close` for application shutdown hooks."""
        self.close()

    @staticmethod
    def _validate_analysis(analysis: Any) -> list[dict[str, Any]]:
        """Validate and normalize the analyzer contract before orchestration."""
        if not isinstance(analysis, dict):
            raise ValueError("task analyzer returned a non-object result")

        subtasks = analysis.get("subtasks")
        if not isinstance(subtasks, list) or not subtasks:
            raise ValueError("task analyzer returned no valid subtasks")

        validated: list[dict[str, Any]] = []
        for index, subtask in enumerate(subtasks, start=1):
            if not isinstance(subtask, dict):
                raise ValueError(f"subtask {index} is not an object")

            task_type = subtask.get("type")
            description = subtask.get("description")
            if not isinstance(task_type, str) or not task_type.strip():
                raise ValueError(f"subtask {index} has no valid type")
            if not isinstance(description, str) or not description.strip():
                raise ValueError(f"subtask {index} has no valid description")

            priority = subtask.get("priority", 99)
            if isinstance(priority, bool) or not isinstance(priority, (int, float)):
                priority = 99

            normalized = dict(subtask)
            normalized["type"] = task_type.strip()
            normalized["description"] = description.strip()
            normalized["priority"] = priority
            validated.append(normalized)

        return validated

    def run(
        self,
        task: str,
        progress_callback: Optional[Callable] = None,
    ) -> str:
        """Run the complete orchestration pipeline."""

        def emit(step, model, status, result=None):
            if progress_callback:
                progress_callback(step, model, status, result)

        try:
            analysis = analyze_task(
                task, self.analysis_client, self.analysis_model
            )
            subtasks = self._validate_analysis(analysis)
        except Exception as exc:
            logger.exception("Task analyzer returned invalid output; using local fallback")
            emit(f"Task analysis failed: {exc}", "Vanta", "error")
            return self._local_fallback(task)

        emit(f"Found {len(subtasks)} sub-tasks", "Vanta", "done")

        # If it's simple or orchestration isn't needed, handle it directly.
        if not should_orchestrate(analysis):
            emit("Simple task — handling locally", "Vanta", "done")
            return self._local_fallback(task)

        # Browser automation is opt-in and is imported/started only when enabled.
        agent = None
        if BROWSER_AUTOMATION:
            try:
                agent = self._get_agent()
            except ImportError as exc:
                emit(str(exc), "System", "error")
                # Fall through to OpenRouter or the per-subtask local fallback.

        results = []
        for subtask in sorted(subtasks, key=lambda item: item.get("priority", 99)):
            task_type = subtask["type"]
            description = subtask["description"]
            model_list = get_model_list(task_type)
            best_model = get_model_info(model_list[0])["name"]

            emit(
                f"Sub-task: {task_type} — {description[:50]}...",
                best_model,
                "thinking",
            )

            prompt = (
                f"You are working on a specific part of a larger project.\n\n"
                f"Overall project: {task}\n\n"
                f"Your specific task ({task_type}): {description}\n\n"
                f"Produce a complete, production-ready solution for your part only. "
                f"Be thorough and include all necessary code."
            )

            try:
                if agent is not None:
                    response, model_used = agent.send_with_failover(
                        model_priority=model_list,
                        prompt=prompt,
                        on_progress=lambda step, model_name, status, result=None: emit(
                            step, model_name, status, result
                        ),
                    )
                elif self.openrouter is not None:
                    response, model_used = self.openrouter.execute(
                        prompt,
                        task_type,
                        on_progress=lambda model_name, status, result=None: emit(
                            f"Sub-task: {task_type}", model_name, status, result
                        ),
                    )
                else:
                    raise OpenRouterError("OpenRouter is not configured")
            except _EXPECTED_PROVIDER_ERRORS as exc:
                # A provider failure belongs to this sub-task only. Keep completed
                # results intact and use the legacy provider for this one task.
                logger.warning(
                    "Provider failed for sub-task type=%s; using local fallback: %s",
                    task_type,
                    exc,
                )
                response = self._local_fallback(description)
                model_used = "local-fallback"

            results.append(
                {
                    "type": task_type,
                    "desc": description,
                    "model": model_used,
                    "response": response,
                }
            )
            emit(
                f"✓ {task_type} done (via {model_used})",
                model_used,
                "done",
            )

        emit("Merging all results...", "Vanta", "thinking")
        merged = self._merge(task, results)
        emit("Merge complete.", "Vanta", "done")
        return merged

    def _merge(self, task: str, results: list[dict]) -> str:
        """Merge results with the configured brain model and a safe fallback."""
        result_text = "\n\n".join(
            f"[{result.get('type', 'unknown').upper()} — via "
            f"{result.get('model', 'unknown')}]\n"
            f"{result.get('response', '')}"
            for result in results
        )
        prompt = MERGE_PROMPT.format(task=task, results=result_text)

        try:
            resp = self.merge_client.chat.completions.create(
                model=self.merge_model,
                messages=[{"role": "user", "content": prompt}],
                max_tokens=4096,
                temperature=0.2,
            )
            return resp.choices[0].message.content
        except Exception:
            # Merging is best-effort: never discard successful sub-task output.
            logger.exception(
                "Unexpected merge error; returning unmerged sub-task results"
            )
            parts = [
                f"### {result.get('type', 'unknown').upper()} "
                f"(via {result.get('model', 'unknown')})\n"
                f"{result.get('response', '')}"
                for result in results
            ]
            return "\n\n---\n\n".join(parts)

    def _local_fallback(self, task: str) -> str:
        """Handle simple tasks directly through the legacy provider."""
        resp = self.groq.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": "You are Vanta, a premium AI coding assistant.",
                },
                {"role": "user", "content": task},
            ],
            max_tokens=4096,
            temperature=0.2,
        )
        return resp.choices[0].message.content
