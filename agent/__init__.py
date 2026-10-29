"""VANTA agent: a plan-act-verify loop with tools, permissions, checkpoints, memory and subagents.
Built from the public descriptions of how Anthropic's Claude Code harness works (agentic loop, tool categories, context management,
permission modes, checkpoints, memory files, subagents). The model is whatever VANTA's provider pool gives it."""

# Install the additive tool suite when the package is imported. The original loop
# remains the source of truth for VANTA's workflow and existing tool behavior.
from .tool_suite import install as _install_tool_suite

_install_tool_suite()
