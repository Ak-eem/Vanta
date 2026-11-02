# Setups: switch how VANTA works, any time

Pick a setup from the small chip at the bottom-left (top-left on a phone), from Settings > General, or just say it in chat:
"switch to think mode", "go offline", "/setup builder", "switch to everyday".
Your choice is remembered after a restart.

| Setup | What it does |
|---|---|
| **Everyday** | Normal VANTA. A fast model for chat, a smarter one for hard things. |
| **Think with me** | Always the strongest model with deep thinking. It restates your idea, asks sharp questions, argues against it, gives options and a recommendation. Say "save decision: ..." and the decision goes into your notes. |
| **Builder** | Two brains build things with `/build`. See below. |
| **Offline** | Only the model on this laptop (Ollama). Web search, weather, voice typing, cloud models and long-term memory extraction are all switched off. Nothing leaves the computer. |

## /build (two brains)
`/build a one page website for a Lagos hair salon`
1. The **strong** model writes a short blueprint: files, design and security rules.
2. The **fast** model writes the files, several at once.
3. The strong model reviews them against a checklist (logins, injection, secrets, permissions, payments, errors, phones, placeholders) and answers with small patches only, never a rewrite.
4. Automatic checks run (pages well formed, links exist, no secret keys). Failures go back to the strong model for fixes, up to 3 rounds, and it stops early if nothing changes.
5. Everything is written under `<workspace>/builds/<name>`. **Undo the build** removes or restores every file. Stop works at any time.

Invented details (phone numbers, addresses, prices) are marked PLACEHOLDER. Replace them before showing a client.

In Settings you can choose where the fast brain runs: free cloud providers (quicker) or this laptop (private, slower).
Small models are kept honest by strict JSON answers that are checked and retried.

## Speed test
Say "speed test" (or run `python -m setups.probe`). It measures disk, memory and processor speed and estimates how fast
different model sizes would run on this computer. The numbers are estimates.

## Limits
- Free providers rate-limit; builds wait and retry instead of failing.
- Prompts sent to cloud providers can be seen by them. Use Offline for private work.
- Offline answers are only as good as the small local model.


## Orchestra (manager and workers)
Switch with "switch to team mode". `/team <goal>` (or, in this setup, just "fix ...", "add ...", "review ...") makes the strong model split the goal into at most 6 small jobs. Small fast agents do each job with the real tools (read-only jobs run in plan mode), the manager checks each result and can send one job back once, then writes the summary. Each worker only sees its job and the results it depends on, so small models stay focused and use fewer tokens. Same approvals as the normal agent; one click undoes every file the team changed.
