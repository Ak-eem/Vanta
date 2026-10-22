// Reads visible page text (never password fields, never hidden/blocked inputs) and
// hands it to the background worker, which sends it to local VANTA only.
(() => {
  let timer = null, lastSent = "";
  function visibleText() {
    const out = []; let total = 0;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const el = n.parentElement;
        if (!el || ["SCRIPT", "STYLE", "NOSCRIPT", "INPUT", "TEXTAREA"].includes(el.tagName)) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const r = el.getBoundingClientRect();
        return (r.width > 0 && r.height > 0 && r.top < innerHeight && r.bottom > 0) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (walker.nextNode() && total < 2500) { const t = walker.currentNode.nodeValue.trim(); out.push(t); total += t.length; }
    return out.join(" ").slice(0, 2500);
  }
  function send() {
    if (document.hidden) return;
    const text = visibleText(), sig = location.href + "|" + text.slice(0, 200);
    if (sig === lastSent) return;
    lastSent = sig;
    chrome.runtime.sendMessage({ type: "page", url: location.href, title: document.title, text });
  }
  const schedule = () => { clearTimeout(timer); timer = setTimeout(send, 3000); };
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, characterData: true });
  addEventListener("scroll", schedule, { passive: true });
  document.addEventListener("visibilitychange", schedule);
  schedule();
})();
