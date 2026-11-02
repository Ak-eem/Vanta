---
name: security-review
description: Use when checking the security of the user's OWN code or a site/app they have written permission to test.
---
Only the user's own projects or targets with written authorization (a bug-bounty scope). Never attack anything else, never write exploits for third parties.
1. Map the surface: routes, inputs, auth, file uploads, third-party calls, secrets.
2. Check the usual failures: missing auth/ownership checks, injection (SQL/command/template), XSS, hard-coded keys, weak sessions, open CORS, debug on, outdated dependencies.
3. For each issue: how it could be abused in one sentence, severity, and the smallest fix.
4. For a bug-bounty write-up: title, impact, steps to reproduce, proof, suggested fix. Stay inside the program's rules and scope.
