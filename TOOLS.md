# Agent tools

Everything the agent can do, grouped. Anything that changes things or runs something asks you first (unless you chose Auto mode, and even then these never auto-run: background commands, git copies, schedules).

| Group | Tools |
|---|---|
| Look | `list_files` (find by pattern), `grep`, `read_file`, `code_intel` (outline, find definition, find uses, syntax check), `web_search`, `web_fetch` |
| Change | `edit_file`, `write_file`, `notebook_edit` (all undoable with one click) |
| Run | `run_command`, `bg_start` / `bg_output` / `bg_stop` (long-running, max 3, all killed when the run ends) |
| Plan | `enter_plan_mode` / `exit_plan_mode` (you approve the plan), `task_create` / `task_update` / `task_list` |
| Safe copy | `enter_worktree` / `exit_worktree` (separate git branch and folder; original untouched) |
| Helpers | `subagent` (read-only helper with its own clean context) |
| Later | `schedule_create` / `schedule_list` / `schedule_delete` ("daily 08:00", "every 30m", "in 2h", "weekdays 09:30", "mon 07:00"). Scheduled runs are read-only and report back as a note. |
| Know-how | `skill` loads a saved how-to. Put your own in `~/.vanta/skills/*.md` or `<project>/.vanta/skills/`. Starters in `skills/`: website-build, code-review, security-review, debugging. |
| Talk | `note` (remember), `ask_user`, `notify` |

Not built (no use in VANTA's app): LSP server, PowerShell tool, MCP resources, SendMessage between helpers, feedback/onboarding tools. File sending to you needs a download card in the UI first.
