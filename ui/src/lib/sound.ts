/** Sound cues. Plays a recorded file from /sounds/<cue>.mp3 if one exists, otherwise a small synthesized stand-in.
 *  Off by default: turn it on in Settings. Drop real files into ui/public/sounds/ and they are used automatically. */
export type Cue = 'tick' | 'whoosh' | 'rumble' | 'hit' | 'chime'
export const CUES: Cue[] = ['tick', 'whoosh', 'rumble', 'hit', 'chime']

const KEY = 'vanta.sound'
export const soundOn = (): boolean => { try { return localStorage.getItem(KEY) === 'on' } catch { return false } }
export const setSound = (on: boolean): void => { try { localStorage.setItem(KEY, on ? 'on' : 'off') } catch { /* fine */ } }

let ctx: AudioContext | null = null
const files = new Map<Cue, AudioBuffer | null>()

function audio(): AudioContext | null {
  if (ctx) return ctx
  const Ctor = typeof window !== 'undefined' ? (window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext) : undefined
  return Ctor ? (ctx = new Ctor()) : null
}

async function recorded(c: AudioContext, cue: Cue): Promise<AudioBuffer | null> {
  if (files.has(cue)) return files.get(cue) ?? null
  files.set(cue, null)                                   // remember misses so we only ask once
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}sounds/${cue}.mp3`)
    if (!res.ok) return null
    const buf = await c.decodeAudioData(await res.arrayBuffer())   // a missing file may come back as a web page: this throws, we fall back
    files.set(cue, buf)
    return buf
  } catch { return null }
}

function envelope(c: AudioContext, attack: number, decay: number, peak: number): GainNode {
  const g = c.createGain(), t = c.currentTime
  g.gain.setValueAtTime(0, t)
  g.gain.linearRampToValueAtTime(peak, t + attack)
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay)
  g.connect(c.destination)
  return g
}
function tone(c: AudioContext, f0: number, f1: number, attack: number, decay: number, peak: number) {
  const o = c.createOscillator()
  o.frequency.setValueAtTime(f0, c.currentTime)
  o.frequency.exponentialRampToValueAtTime(f1, c.currentTime + attack + decay)
  o.connect(envelope(c, attack, decay, peak)); o.start(); o.stop(c.currentTime + attack + decay + 0.05)
}
function noise(c: AudioContext, type: BiquadFilterType, f0: number, f1: number, dur: number, attack: number, peak: number) {
  const n = c.createBufferSource(), data = c.createBuffer(1, Math.ceil(c.sampleRate * (dur + 0.2)), c.sampleRate), a = data.getChannelData(0)
  for (let i = 0; i < a.length; i++) a[i] = Math.random() * 2 - 1
  n.buffer = data
  const f = c.createBiquadFilter(); f.type = type
  f.frequency.setValueAtTime(f0, c.currentTime); f.frequency.exponentialRampToValueAtTime(f1, c.currentTime + dur)
  n.connect(f); f.connect(envelope(c, attack, dur - attack, peak)); n.start()
}
const SYNTH: Record<Cue, (c: AudioContext) => void> = {
  tick: (c) => tone(c, 1500, 900, 0.002, 0.05, 0.12),
  whoosh: (c) => noise(c, 'bandpass', 300, 3500, 0.9, 0.4, 0.35),
  rumble: (c) => noise(c, 'lowpass', 110, 60, 2, 0.5, 0.7),
  hit: (c) => { tone(c, 80, 35, 0.003, 0.5, 0.8); noise(c, 'lowpass', 500, 80, 0.4, 0.003, 0.5) },
  chime: (c) => { tone(c, 880, 880, 0.01, 1.2, 0.12); tone(c, 1320, 1320, 0.01, 1, 0.08) },
}

/** Never throws. Does nothing when sound is off or the browser has no audio. */
export async function play(cue: Cue): Promise<void> {
  if (!soundOn()) return
  try {
    const c = audio(); if (!c) return
    if (c.state === 'suspended') await c.resume()
    const buf = await recorded(c, cue)
    if (buf) { const s = c.createBufferSource(); s.buffer = buf; s.connect(c.destination); s.start() }
    else SYNTH[cue](c)
  } catch { /* sound is never worth an error */ }
}
