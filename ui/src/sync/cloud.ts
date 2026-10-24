import { createVault, decrypt, encrypt, openVault } from './crypto'

export interface Wire { id: string; kind: string; updated_at: number; device_id: string; deleted: boolean; blob: string }
export interface Cfg { url: string; anon: string; email: string }
export interface Person { id: string; name: string; relation: string; aliases: string; notes: string; updated_at: number }
export interface Claim { id: string; person_id: string; text: string; source: string; stated_at: number; superseded_by: string | null; updated_at: number }
export interface Note { id: string; text: string; kind: 'note' | 'ask'; created: number; updated_at: number }
export interface Data { people: Person[]; claims: Claim[]; notes: Note[] }

export class Cloud {
  token = ''; refresh = ''
  constructor(public cfg: Cfg) {}

  private async auth(body: object, grant: string) {
    const r = await fetch(`${this.cfg.url}/auth/v1/token?grant_type=${grant}`, { method: 'POST', headers: { apikey: this.cfg.anon, 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    if (!r.ok) throw new Error(r.status === 400 ? 'Email or password not accepted.' : `Sign-in failed (${r.status}).`)
    const j = await r.json(); this.token = j.access_token; this.refresh = j.refresh_token
  }
  async signIn(password: string) { await this.auth({ email: this.cfg.email, password }, 'password') }
  async refreshSession(): Promise<boolean> { if (!this.refresh) return false; try { await this.auth({ refresh_token: this.refresh }, 'refresh_token'); return true } catch { return false } }

  private async req(path: string, init: RequestInit = {}): Promise<Response> {
    const go = () => fetch(`${this.cfg.url}/rest/v1/vanta_sync${path}`, { ...init, headers: { apikey: this.cfg.anon, Authorization: `Bearer ${this.token}`, 'Content-Type': 'application/json', ...(init.headers ?? {}) } })
    let r = await go()
    if ((r.status === 401 || r.status === 403) && (await this.refreshSession())) r = await go()
    if (!r.ok) throw new Error(`Sync service said ${r.status}.`)
    return r
  }
  vault = async (): Promise<Wire | null> => ((await (await this.req('?id=eq._vault')).json()) as Wire[])[0] ?? null
  pull = async (): Promise<Wire[]> => (await (await this.req('?order=updated_at.asc&limit=5000')).json()) as Wire[]
  push = async (rows: Wire[]) => { await this.req('?on_conflict=id', { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates' }, body: JSON.stringify(rows) }) }

  /** Unlock (or create) the vault. First phone to set up with no laptop yet creates it; the laptop then joins with the same passphrase. */
  async unlock(passphrase: string): Promise<CryptoKey> {
    const v = await this.vault()
    if (v) return openVault(v.blob, passphrase)
    const { key, blob } = await createVault(passphrase)
    await this.push([{ id: '_vault', kind: 'vault', updated_at: 1, device_id: 'phone', deleted: false, blob }])
    return key
  }

  async load(key: CryptoKey): Promise<Data> {
    const rows = await this.pull()
    const out: Data = { people: [], claims: [], notes: [] }
    for (const r of rows) {
      if (r.kind === 'vault' || r.deleted) continue
      try {
        const row = JSON.parse(await decrypt(key, r.blob, r.id, r.kind))
        if (row.deleted) continue
        if (r.kind === 'people') out.people.push(row); else if (r.kind === 'claims') out.claims.push(row); else if (r.kind === 'notes') out.notes.push(row)
      } catch { /* a record we can't read is skipped, never shown */ }
    }
    out.notes.sort((a, b) => b.created - a.created)
    return out
  }

  async saveNote(key: CryptoKey, text: string, kind: Note['kind']): Promise<void> {
    const now = Date.now() / 1000, id = crypto.randomUUID(), rid = `notes:${id}`
    const row = { id, text: text.trim().slice(0, 2000), kind, created: now, updated_at: now, device_id: 'phone', deleted: 0 }
    await this.push([{ id: rid, kind: 'notes', updated_at: Math.round(now * 1000), device_id: 'phone', deleted: false, blob: await encrypt(key, JSON.stringify(row), rid, 'notes') }])
  }
  async deleteNote(key: CryptoKey, n: Note): Promise<void> {
    const now = Date.now() / 1000, rid = `notes:${n.id}`
    const row = { ...n, deleted: 1, updated_at: now, device_id: 'phone' }
    await this.push([{ id: rid, kind: 'notes', updated_at: Math.round(now * 1000), device_id: 'phone', deleted: true, blob: await encrypt(key, JSON.stringify(row), rid, 'notes') }])
  }
}
