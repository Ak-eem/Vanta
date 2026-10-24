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

## Scanner (what VANTA checks before it acts)
- **Downloads**: every finished download in `~/Downloads` (set `VANTA_SCAN_FOLDERS` for more, separated by `;` on Windows) is inspected in the background, never run.
- **Running programs**: every program file behind a running process is checked once per version (system folders skipped).
- **What it reads**: file type vs name (`invoice.pdf.exe`), digital signature (Windows), packed/scrambled code, archives holding programs, and the
  contents of scripts and binaries for things like hidden PowerShell, code injection, keylogging, miners, wallet/browser theft, switching off antivirus, deleting backups.
  It reads code as text and strings; it doesn't decompile real programs.
- **What it is for**: a short plain explanation written from the findings plus a web look-up of the program's name and publisher.
- **Reputation (optional)**: add a free `VT_API_KEY` and VANTA also asks VirusTotal about the file's fingerprint (SHA-256). The file itself never leaves the laptop.
- **Verdicts**: safe / unknown / suspicious / dangerous. Verified (signed or widely known) apps are left alone and not even flagged. "Unknown" is never treated as safe.
  Autopilot only acts on dangerous (or strongly suspicious) verdicts; anything unknown always waits for you.
- Results: Settings > Safety > Recent scans. You can also paste a path there to scan a file on demand.
