import { useEffect, useRef, useState } from 'react'
import { Vad } from '../lib/vad'
import { concat, encodeWav, resample, rms } from '../lib/wav'

type Person = { id: number; name: string; role: 'owner' | 'guest' | 'unknown'; prints: number }
type Status = { supported: boolean; installed: boolean; enrolled: boolean; people: Person[]; error?: string }

const PROMPTS = [
  'The quick brown fox jumps over the lazy dog, and then walks quietly home.',
  'Please check my calendar for tomorrow and tell me what is coming up.',
  'I like my coffee strong, my music loud, and my mornings very slow.',
]

/** Records one ~8 second reading in the browser, with echo and noise cancellation on, and returns a 16 kHz WAV. */
async function readClip(onLevel: (l: number) => void): Promise<Blob> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { noiseSuppression: true, echoCancellation: true, autoGainControl: true, channelCount: 1 } })
  let ctx: AudioContext
  try { ctx = new AudioContext({ sampleRate: 16000 }) } catch { ctx = new AudioContext() }
  const src = ctx.createMediaStreamSource(stream), node = ctx.createScriptProcessor(2048, 1, 1), mute = ctx.createGain()
  mute.gain.value = 0
  const parts: Float32Array[] = []
  const vad = new Vad()
  return new Promise((resolve) => {
    let ms = 0
    const end = () => {
      node.disconnect(); src.disconnect(); mute.disconnect(); stream.getTracks().forEach((t) => t.stop())
      const rate = ctx.sampleRate; ctx.close().catch(() => {}); onLevel(0)
      resolve(encodeWav(resample(concat(parts), rate)))
    }
    node.onaudioprocess = (e) => {
      const x = new Float32Array(e.inputBuffer.getChannelData(0)); parts.push(x)
      const l = rms(x); onLevel(Math.min(1, l * 8)); const dt = (x.length / ctx.sampleRate) * 1000; ms += dt
      const ev = vad.push(l, dt)
      if (ms >= 9000 || ev === 'end' || ev === 'toolong' || (ev === 'timeout')) end()
    }
    src.connect(node); node.connect(mute); mute.connect(ctx.destination)
  })
}

async function call(url: string, init?: RequestInit) {
  const r = await fetch(url, init); const j = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(j.error || 'Something went wrong')
  return j
}

export function VoicesPanel() {
  const [st, setSt] = useState<Status | null>(null)
  const [err, setErr] = useState('')
  const [note, setNote] = useState('')
  const [working, setWorking] = useState(false)
  const [name, setName] = useState('')
  const [role, setRole] = useState<'owner' | 'guest'>('owner')
  const [step, setStep] = useState(-1)
  const [lvl, setLvl] = useState(0)
  const clips = useRef<Blob[]>([])
  const load = () => call('/voice/status').then(setSt).catch(() => setSt({ supported: false, installed: false, enrolled: false, people: [] }))
  useEffect(() => { void load() }, [])

  const run = async (f: () => Promise<void>) => { setErr(''); setNote(''); setWorking(true); try { await f() } catch (e) { setErr(String((e as Error).message || e)) } finally { setWorking(false) } }
  const setup = () => run(async () => { setNote('Downloading the small voice model (about 26 MB)…'); setSt(await call('/voice/setup', { method: 'POST' })); setNote('') })
  const record = () => run(async () => {
    if (!name.trim()) throw new Error('Type a name first.')
    clips.current = []
    for (let i = 0; i < PROMPTS.length; i++) { setStep(i); clips.current.push(await readClip(setLvl)) }
    setStep(-1); setNote('Saving…')
    const fd = new FormData(); fd.append('name', name.trim()); fd.append('role', role)
    clips.current.forEach((c, i) => fd.append('audio', c, `c${i}.wav`))
    const j = await call('/voice/enroll', { method: 'POST', body: fd })
    setSt(j); setName(''); setNote(j.warning || 'Saved. I will know this voice now.')
  }).finally(() => setStep(-1))
  const act = (url: string, init?: RequestInit) => run(async () => { setSt(await call(url, init)) })

  if (!st) return <p>Checking…</p>
  const mine = st.people.filter((p) => p.role !== 'unknown'), strangers = st.people.filter((p) => p.role === 'unknown')
  return (
    <div className="voices">
      <p>I can learn what you sound like, and who else you want me to talk to. I only act on requests from <b>your</b> voice. A guest gets friendly chat only. Any other voice is ignored.</p>
      <p className="muted" style={{ fontSize: 12 }}>Voiceprints stay on this computer in a private file. They are not sent anywhere and not synced. This is for convenience, not a lock: a recording of your voice could fool it, so keep the sensitive things behind your login and approvals.</p>
      {!st.supported ? <p className="warn">Voice recognition needs one extra package. In a terminal: <code>pip install -r requirements-voice.txt</code>, then restart VANTA.</p> : null}
      {st.supported && !st.installed ? <button className="btn" disabled={working} onClick={setup}>Set up voice recognition</button> : null}
      {st.installed ? <>
        <h3 style={{ marginTop: 14 }}>People I know</h3>
        {mine.length === 0 ? <p className="muted">No one yet. Record your own voice first.</p> : mine.map((p) => (
          <div className="toggle" key={p.id}><div>{p.name}<small>{p.role === 'owner' ? 'You — full access' : 'Guest — chat only'} · {p.prints} samples</small></div>
            <button className="btn sm" disabled={working} onClick={() => act(`/voice/people/${p.id}`, { method: 'DELETE' })}>Remove</button></div>))}
        <h3 style={{ marginTop: 14 }}>{st.enrolled ? 'Add a voice' : 'Record your voice'}</h3>
        <div style={{ display: 'flex', gap: 8, margin: '6px 0' }}>
          <input placeholder="Name (e.g. Akeem)" value={name} onChange={(e) => setName(e.target.value)} aria-label="Name" style={{ flex: 1 }} />
          <select value={st.enrolled ? role : 'owner'} onChange={(e) => setRole(e.target.value as 'owner' | 'guest')} disabled={!st.enrolled} aria-label="Role">
            <option value="owner">Me</option><option value="guest">Guest</option></select>
        </div>
        {step >= 0 ? <div className="enroll-live"><p><b>Read this out loud ({step + 1} of {PROMPTS.length}):</b></p><p style={{ fontSize: 16 }}>“{PROMPTS[step]}”</p>
          <div style={{ height: 6, background: 'var(--line)', borderRadius: 3 }}><div style={{ height: 6, width: `${Math.round(lvl * 100)}%`, background: 'var(--accent)', borderRadius: 3, transition: 'width .08s' }} /></div></div>
          : <button className="btn" disabled={working} onClick={record}>Record 3 short readings</button>}
        <p className="muted" style={{ fontSize: 12 }}>Do this in a quiet room, with the mic where you normally use it. A guest should sit where they would really talk to me.</p>
        {strangers.length ? <>
          <h3 style={{ marginTop: 14 }}>Voices I heard but don't know</h3>
          {strangers.map((p) => (
            <div className="toggle" key={p.id}><div>{p.name}<small>Ignored. Forgotten after 14 days.</small></div>
              <button className="btn sm" disabled={working} onClick={() => { const n = window.prompt('Who is this? (they will become a guest: chat only)'); if (n) void act(`/voice/people/${p.id}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: n, role: 'guest' }) }) }}>Make guest</button></div>))}
          <button className="btn sm" disabled={working} onClick={() => act('/voice/forget-unknown', { method: 'POST' })}>Forget all unknown voices</button></> : null}
      </> : null}
      {note ? <p role="status">{note}</p> : null}
      {err ? <p className="warn" role="alert">{err}</p> : null}
    </div>)
}
