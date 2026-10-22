// Sends page snapshots to the local VANTA server only. Token lives in chrome.storage.local.
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type !== "page") return;
  chrome.storage.local.get({ token: "", server: "http://127.0.0.1:5000" }, async ({ token, server }) => {
    if (!token) return;
    if (!/^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(server)) return;   // never send anywhere else
    try {
      await fetch(server + "/api/awareness/page", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
        body: JSON.stringify({ url: msg.url, title: msg.title, text: msg.text })
      });
    } catch (_) { /* VANTA not running: ignore */ }
  });
});
