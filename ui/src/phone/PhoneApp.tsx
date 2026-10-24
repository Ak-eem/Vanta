import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Cloud, type Cfg, type Data, type Note } from '../sync/cloud'
import { clearKey, loadKey, saveKey } from '../sync/keystore'
import { WrongPassphrase } from '../sync/crypto'

const CFG = 'vanta.phone.cfg', RT = 'vanta.phone.rt'
const readCfg = (): Cfg | null => { try { return JSON.parse(localStorage.getItem(CFG) ?? 'null') } catch { return null } }
const ago = (t: number) => { const m = Math.round((Date.now() / 1000 - t) / 60); return m < 1 ? 'now' : m < 60 ? `${m}m` : m < 1440 ? `${Math.round(m / 60)}h` : `${Math.round(m / 1440)}d` }

function Setup({ onDone }: { onDone: (cfg: Cfg, password: string, pass: string) => Promise<void> }) {
  const saved = readCfg()
  const [f, setF] = useState({ url: saved?.url ?? '', anon: saved?.anon ?? '', email: saved?.email ?? '', password: '', pass: '' })
  const [err, setErr] = useState(''), [busy, setBusy] = useState(false)
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value })
  const ok = (f.url.startsWith('https://') || f.url.startsWith('http://localhost')) && f.anon && f.email && f.password && f.pass.length >= 8
  const go = async () => {
    setBusy(true); setErr('')
    try { await onDone({ url: f.url.replace(/\/$/, ''), anon: f.anon.trim(), email: f.email.trim() }, f.password, f.pass) }
    catch (e) { setErr(e instanceof WrongPassphrase ? "That vault passphrase doesn't match the one set on your laptop." : e instanceof Error ? e.message : 'Something went wrong.') }
    setBusy(false)
  }
  return (
    <main className="ph-setup">
      <div className="orb" aria-hidden="true" />
      <h1>Connect to VANTA</h1>
      <p>Your memory is locked with a passphrase only you know. The cloud holds scrambled data it cannot read.</p>
      <label>Sync service address<input inputMode="url" autoCapitalize="none" placeholder="https://xxxx.supabase.co" value={f.url} onChange={set('url')} /></label>
      <label>Public key (anon)<input autoCapitalize="none" value={f.anon} onChange={set('anon')} /></label>
      <label>Sync account email<input type="email" autoCapitalize="none" value={f.email} onChange={set('email')} /></label>
      <label>Sync account password<input type="password" value={f.password} onChange={set('password')} /></label>
      <label>Vault passphrase<small>Same one on your laptop. At least 8 characters. If you lose it, nobody can recover your data.</small><input type="password" value={f.pass} onChange={set('pass')} /></label>
      {err ? <div className="ph-err" role="alert">{err}</div> : null}
      <button className="btn primary" disabled={!ok || busy} onClick={go}>{busy ? 'Unlocking…' : 'Unlock'}</button>
    </main>)
}

export default function PhoneApp() {
  const [, setCfg] = useState<Cfg | null>(readCfg)
  const [ready, setReady] = useState(false)
  const [data, setData] = useState<Data | null>(null)
  const [tab, setTab] = useState<'notes' | 'people'>('notes')
  const [text, setText] = useState(''), [msg, setMsg] = useState('')
  const cloud = useRef<Cloud | null>(null), key = useRef<CryptoKey | null>(null)

  const refresh = useCallback(async () => {
    if (!cloud.current || !key.current) return
    try { setData(await cloud.current.load(key.current)); setMsg('') } catch (e) { setMsg(e instanceof Error ? e.message : 'Offline') }
  }, [])

  // Reopen without asking again if the key and session are still on this phone.
  useEffect(() => {
    (async () => {
      const c = readCfg(), k = await loadKey(), rt = localStorage.getItem(RT)
      if (c && k && rt) {
        const cl = new Cloud(c); cl.refresh = rt
        if (await cl.refreshSession()) { localStorage.setItem(RT, cl.refresh); cloud.current = cl; key.current = k; setReady(true); refresh() }
      }
    })()
    const vis = () => { if (!document.hidden) refresh() }
    document.addEventListener('visibilitychange', vis)
    return () => document.removeEventListener('visibilitychange', vis)
  }, [refresh])

  const connect = async (c: Cfg, password: string, pass: string) => {
    const cl = new Cloud(c); await cl.signIn(password)
    const k = await cl.unlock(pass)
    localStorage.setItem(CFG, JSON.stringify(c)); localStorage.setItem(RT, cl.refresh)
    await saveKey(k); cloud.current = cl; key.current = k; setCfg(c); setReady(true); refresh()
  }
  const lock = async () => { await clearKey(); localStorage.removeItem(RT); cloud.current = null; key.current = null; setReady(false); setData(null) }

  const add = async (kind: Note['kind']) => {
    if (!text.trim() || !cloud.current || !key.current) return
    try { await cloud.current.saveNote(key.current, text, kind); setText(''); setMsg(kind === 'ask' ? 'Sent. Your laptop will pick it up.' : 'Saved.'); refresh() } catch (e) { setMsg(e instanceof Error ? e.message : 'Could not save') }
  }
  const del = async (n: Note) => { if (cloud.current && key.current) { await cloud.current.deleteNote(key.current, n); refresh() } }

  const claimsBy = useMemo(() => {
    const m: Record<string, string[]> = {}
    for (const c of data?.claims ?? []) if (!c.superseded_by) (m[c.person_id] ??= []).push(c.text)
    return m
  }, [data])

  if (!ready) return <Setup onDone={connect} />
  return (
    <div className="ph">
      <header className="ph-top"><span className="wordmark">VANTA</span><button className="btn ghost sm" onClick={lock}>Lock</button></header>
      <div className="ph-body">
        {tab === 'notes' ? (<>
          <div className="ph-add">
            <textarea aria-label="Write a note" rows={3} placeholder="Jot something down, or ask your laptop to look into it" value={text} onChange={(e) => setText(e.target.value)} />
            <div className="ph-row"><button className="btn secondary" disabled={!text.trim()} onClick={() => add('note')}>Save note</button><button className="btn primary" disabled={!text.trim()} onClick={() => add('ask')}>Ask laptop</button></div>
          </div>
          {msg ? <div className="ph-msg" role="status">{msg}</div> : null}
          {(data?.notes ?? []).map((n) => (
            <article key={n.id} className="ph-card"><div className="ph-meta">{n.kind === 'ask' ? 'ASK' : 'NOTE'} · {ago(n.created)}<button className="btn ghost sm" onClick={() => del(n)}>Delete</button></div><p>{n.text}</p></article>))}
          {data && !data.notes.length ? <p className="ph-empty">No notes yet.</p> : null}
        </>) : (<>
          {(data?.people ?? []).map((p) => (
            <article key={p.id} className="ph-card"><div className="ph-meta">{(p.relation || 'PERSON').toUpperCase()}</div><h3>{p.name}</h3>
              {(claimsBy[p.id] ?? []).map((t, i) => <p key={i} className="claim">“{t}”</p>)}</article>))}
          {data && !data.people.length ? <p className="ph-empty">Nobody here yet. People VANTA learns about on your laptop show up here.</p> : null}
        </>)}
        {!data ? <p className="ph-empty">Loading…</p> : null}
      </div>
      <nav className="tabs ph-tabs" role="tablist">
        <button role="tab" aria-selected={tab === 'notes'} onClick={() => setTab('notes')}>Notes</button>
        <button role="tab" aria-selected={tab === 'people'} onClick={() => setTab('people')}>People</button>
      </nav>
    </div>)
}
