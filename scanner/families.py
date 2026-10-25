"""Name the kind of malware from what was found, and say in plain words what it does and how to deal with it."""
from __future__ import annotations

# family -> (finding ids that point to it with weight, what it does, what VANTA does, what you should do)
FAMILIES: dict[str, dict] = {
    "ransomware": {"ids": {"shadow_del": 5, "ransom_note": 5, "eicar": 0}, "does": "Locks your files and demands payment to unlock them.",
                   "vanta": "Stops it at once and quarantines it.", "you": "Disconnect from Wi-Fi, don't pay, and check your backups. Tell me and I'll list which files changed."},
    "cryptominer": {"ids": {"miner": 6}, "does": "Secretly uses your processor to mine cryptocurrency for someone else.",
                    "vanta": "Ends it and quarantines it.", "you": "Nothing urgent. If the laptop was hot or slow, it should settle now."},
    "keylogger": {"ids": {"keylog": 6}, "does": "Records what you type, including passwords.",
                  "vanta": "Ends it and quarantines it.", "you": "Change important passwords (email, bank) from a different device, and turn on two-step login."},
    "infostealer": {"ids": {"stealer": 6}, "does": "Copies saved passwords, cookies and crypto wallets from your browser.",
                    "vanta": "Ends it and quarantines it.", "you": "Sign out everywhere, change passwords from another device, and move any wallet funds to a new wallet."},
    "dropper": {"ids": {"download_exec": 4, "tiny_packed": 4, "double_ext": 3, "ext_mismatch": 3, "zip_exec": 2, "ps_encoded": 2}, "does": "A small starter file whose job is to download and install the real malware.",
                "vanta": "Quarantines it before it can fetch anything.", "you": "If you opened it, tell me and I'll look for files that appeared afterwards."},
    "backdoor": {"ids": {"tor_c2": 5, "persist": 2, "anti_vm": 2}, "does": "Gives someone remote control of your computer and hides how it reaches them.",
                 "vanta": "Ends it and quarantines it.", "you": "Change passwords from another device and watch for unfamiliar programs starting with Windows."},
    "injector": {"ids": {"inject": 5, "hidden_imports": 2}, "does": "Hides inside other programs so antivirus doesn't notice it.",
                 "vanta": "Ends it and quarantines it.", "you": "Restart the computer after it is quarantined so the hidden copy is cleared."},
    "defense-evasion": {"ids": {"defender_off": 5}, "does": "Switches off your antivirus and firewall so other malware can get in.",
                        "vanta": "Quarantines it.", "you": "Open Windows Security and make sure protection is back on."},
    "spyware": {"ids": {"screen_cap": 3}, "does": "Takes screenshots of what you do.", "vanta": "Quarantines it.", "you": "Be careful with sensitive screens until it is cleaned."},
    "obfuscated-script": {"ids": {"obf_eval": 4, "packed": 1, "zip_encrypted": 3}, "does": "A script or program that hides its real purpose, which honest software rarely does.",
                          "vanta": "Quarantines it.", "you": "Don't run it again. If you know where it came from, tell me."},
    "test-file": {"ids": {"eicar": 9}, "does": "The standard antivirus test file. It is harmless.", "vanta": "Flagged it, which proves detection works.", "you": "Nothing."},
}
FAST = {"ransomware", "keylogger", "infostealer", "backdoor", "injector"}     # families where waiting is the dangerous choice


def classify(findings: list[dict]) -> dict | None:
    ids = {f["id"] for f in findings if f["points"] > 0}
    best, best_score = None, 0
    for name, fam in FAMILIES.items():
        sc = sum(w for i, w in fam["ids"].items() if i in ids)
        if sc > best_score:
            best, best_score = name, sc
    if not best or best_score < 2:
        return None
    f = FAMILIES[best]
    return {"family": best, "does": f["does"], "vanta": f["vanta"], "you": f["you"], "fast": best in FAST}
