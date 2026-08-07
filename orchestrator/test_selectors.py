"""
Selector diagnostic — checks whether each model's CSS selectors in
model_router.py actually match something on the real, live page.

Run this once, log in when prompted (browser stays open, one-time per
model — sessions get saved and reused after that), and it tells you
exactly which selectors are broken instead of you hunting through
devtools by hand.

Usage:
    python orchestrator/test_selectors.py
    python orchestrator/test_selectors.py claude          # just one model
"""

import asyncio
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from orchestrator.browser_agent import BrowserAgent
from orchestrator.model_router import MODELS


async def check_model(agent: BrowserAgent, model_key: str):
    info = MODELS[model_key]
    print(f"\n{'='*50}")
    print(f"  {info['name']}  ({info['url']})")
    print(f"{'='*50}")

    try:
        page = await agent._get_page(model_key)  # handles login prompt if needed
    except Exception as e:
        print(f"❌ Could not open page at all: {e}")
        return

    results = {}
    for label, sel in [
        ("input_sel", info["input_sel"]),
        ("send_sel", info["send_sel"]),
        ("response_sel", info["response_sel"]),
    ]:
        try:
            el = await page.query_selector(sel)
            found = el is not None
        except Exception as e:
            found = False
        results[label] = found
        mark = "✅" if found else "❌"
        print(f"  {mark} {label:14} {sel}")

    if all(results.values()):
        print(f"  → All selectors found. {info['name']} should work.")
    else:
        print(f"  → {info['name']} needs its broken selector(s) updated in "
              f"model_router.py. Open devtools (F12) on this page, right-click "
              f"the real element, 'Inspect', and read off its actual class/attribute.")


async def main():
    target = sys.argv[1] if len(sys.argv) > 1 else None
    models_to_check = [target] if target else list(MODELS.keys())

    agent = BrowserAgent()
    await agent.start()

    for model_key in models_to_check:
        if model_key not in MODELS:
            print(f"Unknown model: {model_key}")
            continue
        await check_model(agent, model_key)

    print(f"\n{'='*50}")
    print("Done. Browser will stay open 10s so you can look around, then closes.")
    await asyncio.sleep(10)
    await agent.stop()


if __name__ == "__main__":
    asyncio.run(main())
