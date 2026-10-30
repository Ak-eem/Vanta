---
name: debugging
description: Use when something is broken, failing, or behaving unexpectedly.
---
1. Reproduce it first and read the exact error. Do not guess.
2. Narrow it: what changed last, smallest input that fails, which layer (input, logic, output).
3. Form one hypothesis, test it with one change or one print. If it fails twice, change approach.
4. Fix the cause, not the symptom. Add a test that fails before and passes after.
5. Re-run everything that was working to be sure nothing else broke.
