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

## Malware types and emergency stop
Scans now name the **type**: ransomware, cryptominer, keylogger, infostealer, dropper, backdoor, injector, defense-evasion (antivirus killer),
spyware, obfuscated script. Each comes with a plain explanation of what it does and what *you* should do (e.g. change passwords after a keylogger).

**Emergency stop** (on by default; Settings > Safety). No waiting and no asking, for the cases where a delay is what does the damage:
- A file scan finds ransomware, a keylogger, a password stealer, a backdoor or an injector with a *dangerous* verdict: it is quarantined immediately.
- **Ransomware behaviour watch**: VANTA hides decoy files (`!_vanta_do_not_touch.*`) in Documents, Desktop, Pictures and Downloads and watches those folders.
  Two different signals trigger it: a decoy touched, many files changed across many folders in seconds, many files renamed to the same new ending, or ransom notes
  appearing in several folders. It then ends the program writing the most data, plus everything that program started, and quarantines it.
  If it can't tell which program, or the program is a verified signed app, or you marked it trusted, it only alerts you.
- Tested with a ransomware simulator: stopped in under a second, 25 of 320 files affected.
Not included: running files inside a virtual machine (needs Windows Pro sandbox/Hyper-V and admin rights) and permanent deletion without you:
files are always quarantined first; **Delete for good** in Settings > Safety removes one permanently when you press it.

## Update: any confirmed malware is stopped automatically
With Emergency stop on, a **dangerous** verdict on any file (downloaded or already running) means: every running copy is ended (with what it started) and the file is
quarantined, immediately, with no question and no countdown. Only **suspicious** or **unknown** files wait for you, and verified apps or ones you trust are never touched.
Afterwards VANTA reports what it did; it only adds advice for the things it cannot do itself (e.g. changing passwords after a password stealer).
