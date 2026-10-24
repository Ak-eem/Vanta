// Keeps the (non-extractable) vault key in IndexedDB so the phone only asks for the passphrase once.
const open = () => new Promise<IDBDatabase>((res, rej) => { const r = indexedDB.open('vanta', 1); r.onupgradeneeded = () => r.result.createObjectStore('k'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error) })
export async function saveKey(k: CryptoKey) { try { const db = await open(); db.transaction('k', 'readwrite').objectStore('k').put(k, 'vault') } catch { /* private mode: ask again next time */ } }
export async function loadKey(): Promise<CryptoKey | null> {
  try { const db = await open(); return await new Promise((res) => { const r = db.transaction('k').objectStore('k').get('vault'); r.onsuccess = () => res((r.result as CryptoKey) ?? null); r.onerror = () => res(null) }) } catch { return null }
}
export async function clearKey() { try { const db = await open(); db.transaction('k', 'readwrite').objectStore('k').delete('vault') } catch { /* nothing to clear */ } }
