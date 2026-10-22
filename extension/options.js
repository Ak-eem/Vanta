const t = document.getElementById("t");
chrome.storage.local.get({ token: "" }, ({ token }) => { t.value = token; });
document.getElementById("s").onclick = () => chrome.storage.local.set({ token: t.value.trim() }, () => { document.getElementById("m").textContent = "Saved"; });
