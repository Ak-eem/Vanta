# Guardian and projects

**Guardian** (Phase 6). When the process watcher flags something, VANTA proposes what it could do and waits.
- *End program*: asks the program to stop (then forces it after 5 seconds). Refused for Windows/OS core programs, VANTA itself, and any process id that no longer matches the program that was flagged.
- *Quarantine file*: moves the file to `~/.vanta/quarantine/` under an inert name. Nothing is ever deleted; **Settings > Safety > Put it back** restores it. System folders are refused.
- Requests expire after an hour. Everything (asked, approved, denied, done, failed) goes to `~/.vanta/audit.db`, a hash-chained log; Settings > Safety shows whether it has been tampered with.
- VANTA never acts without a button press. Blocking network connections needs administrator rights, so it is not included.

**Projects**: Settings > Projects. Add a name and folder; VANTA reads the folder (git branch, unsaved changes, last commit) and
uses it when you ask about that project. Projects sync to the phone (read-only there).

## Autopilot (opt-in)
Settings > Safety > "Let VANTA act on its own". When on, VANTA still shows the finding, then waits 30 seconds (press **Stop** to cancel)
and carries out the same two actions itself. Limits: at most 3 automatic actions an hour (extras are left for you), the same
safety refusals as manual mode, never deletes, programs you pressed "Always trust" on are skipped, and every action is logged as "VANTA (auto)".
Switching it off before the timer ends holds the action.
