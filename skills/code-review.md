---
name: code-review
description: Use when asked to review, audit, or double-check code (yours or someone else's).
---
1. Read the whole change first. State in one line what it is meant to do.
2. Check in this order: does it do that (logic and edge cases), can it be abused (input validation, auth, secrets, injection), does it fail safely (errors, timeouts), is it testable.
3. Run the tests and the program if you can. Do not claim something works without running it.
4. Report findings most serious first. For each: where, what goes wrong, a concrete fix. Skip style nitpicks unless asked.
5. Say plainly what you did not check.
