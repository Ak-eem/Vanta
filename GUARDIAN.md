# Guardian and projects

**Guardian** (Phase 6). When a watcher or scan flags something, VANTA explains the evidence and proposes actions for you to review.
- *End program*: only happens after you press its Stage button; Autopilot never ends processes. It asks the program to stop (then forces it after 5 seconds). Refused for Windows/OS core programs, VANTA itself, and any process id that no longer matches the program that was flagged.
- *Quarantine file*: moves the file to `~/.vanta/quarantine/` under an inert name. Nothing is ever deleted; **Settings > Safety > Put it back** restores it. System folders are refused.
- Requests expire after an hour. Everything (asked, approved, denied, done, failed) goes to `~/.vanta/audit.db`, a hash-chained log; Settings > Safety shows whether it has been tampered with.
- Process termination always needs a button press. Blocking network connections needs administrator rights, so it is not included.

**Projects**: Settings > Projects. Add a name and folder; VANTA reads the folder (git branch, unsaved changes, last commit) and
uses it when you ask about that project. Projects sync to the phone (read-only there).

## Autopilot (opt-in)
Settings > Safety > "Let VANTA act on its own". When on, eligible non-process actions still wait 30 seconds (press **Stop** to cancel).
Process termination always requires your explicit Stage-button approval, regardless of Autopilot. Limits: at most 3 automatic actions an hour
(extras are left for you), the same safety refusals as manual mode, never deletes, programs you pressed "Always trust" on are skipped, and every
automatic action is logged as "VANTA (auto)". Switching it off before the timer ends holds the action.

## Scanner (what VANTA checks before it acts)
- **Downloads**: every finished download in `~/Downloads` (set `VANTA_SCAN_FOLDERS` for more, separated by `;` on Windows) is inspected in the background, never run.
- **Running programs**: every program file behind a running process is checked once per version (system folders skipped).
- **What it reads**: file type vs name (`invoice.pdf.exe`), digital signature (Windows), packed/scrambled code, archives holding programs, and the
  contents of scripts and binaries for strings associated with hidden PowerShell, code injection, keylogging, miners, wallet/browser access, switching off antivirus, and deleting backups.
  It reads code as text and strings; it doesn't decompile real programs or prove that a program performs the behavior named by a string match.
- **What it is for**: a short plain explanation written from the findings plus a web look-up of the program's name and publisher.
- **Reputation (optional)**: add a free `VT_API_KEY` and VANTA also asks VirusTotal about the file's fingerprint (SHA-256). The file itself never leaves the laptop.
- **Verdicts**: safe / unknown / suspicious / dangerous. A valid signature is shown as evidence and lowers the heuristic score, but is not proof that a file is safe.
  "Unknown" is never treated as safe. A scan verdict is not, by itself, confirmation of malware.
- Results: Settings > Safety > Recent scans. You can also paste a path there to scan a file on demand.

## Malware indicators and emergency monitoring
Scans may suggest a possible type (ransomware, cryptominer, keylogger, infostealer, dropper, backdoor, injector, defense-evasion, spyware, or obfuscated script).
These are leads from static indicators, not a malware confirmation; review the evidence before acting.

**Emergency monitoring** (on by default; Settings > Safety) watches Documents, Desktop, Pictures and Downloads using decoy files (`!_vanta_do_not_touch.*`).
Multiple signals—such as a touched decoy plus a burst of file changes, mass renames, or ransom notes—create a high-priority alert and a proposed process-stop action.
VANTA does not stop a process automatically, including when a scan is marked dangerous or ransomware-like behavior is detected. You must review and approve
the process-stop action in Stage. Autopilot cannot approve process termination. When Autopilot is explicitly enabled, eligible file-only quarantine proposals
may run after their countdown. Quarantined files can be restored in Settings > Safety; permanent deletion requires you to press **Delete for good**.

## Project doctor (test and fix)
Settings > Projects > **Test and fix**, or say "test my Mira project and fix any bugs". VANTA copies the project, runs its tests in the sandbox
(no network), reads any failure, asks the model for small fixes, applies them to the copy and re-tests (up to 10 rounds, and it stops early if a fix changes nothing). It never edits your tests
and never leaves the project folder. If it fixes something you see the exact changes and press **Apply to my project**; originals are saved to
`~/.vanta/doctor_backups`. Supports Python (pytest), Node (`npm test` with an existing `node_modules`) and Go. It tells you plainly when it can't fix something.

## Agent (work like Claude Code)
Type `/agent <what you want>` in chat. VANTA looks around, plans, edits files, runs checks, and repeats until it can confirm the result.
- **Permissions** (Settings → Agent permissions): Look only / Ask me / Edit freely / Auto.
- **Undo**: every file it changes is saved first; "Undo my changes" puts them back.
- **Memory**: put standing rules in `VANTA.md` (in `~/.vanta` or the project). The agent also keeps its own notes.
- Secret files (.env, keys) are blocked. Commands run in the sandbox with no network, and destructive ones are refused.
- File contents it reads are sent to your chosen AI provider.
