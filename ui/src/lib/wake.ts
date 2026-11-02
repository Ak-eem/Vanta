import { useEffect, useRef, useState } from 'react'

/** True when the words contain VANTA's name used as a call: "vanta", "hey vanta", "vanta wake up". */
export function matchWake(heard: string): boolean {
  return /\b(?:hey|ok|okay|hi|yo)?\s*van+(?:ta|tah|da)\b/i.test(heard) || /\bwake up vanta\b/i.test(heard)
}

type Rec = { start: () => void; stop: () => void; abort: () => void; continuous: boolean; interimResults: boolean; lang: string; onresult: ((e: any) => void) | null; onend: (() => void) | null; onerror: ((e: any) => void) | null } // eslint-disable-line @typescript-eslint/no-explicit-any
const Ctor = (): (new () => Rec) | null => { const w = window as any; return w.SpeechRecognition || w.webkitSpeechRecognition || null } // eslint-disable-line @typescript-eslint/no-explicit-any
const KEY = 'vanta.wake'
const read = () => { try { return localStorage.getItem(KEY) === '1' } catch { return false } }

/** Listens for "Hey VANTA" while this screen is open. Uses the browser's own speech recognition (Chrome/Edge; it needs internet, and the audio goes to that browser's service).
 *  Off by default, and it pauses while you are talking to VANTA or VANTA is speaking so it never hears itself. */
export function useWake(onWake: () => void, paused: boolean) {
  const supported = typeof window !== 'undefined' && !!Ctor()
  const [on, setOn] = useState(read)
  const [error, setError] = useState('')
  const cb = useRef(onWake)
  cb.current = onWake
  const active = supported && on && !paused

  useEffect(() => {
    if (!active) return
    const R = Ctor()!
    let stopped = false, last = 0
    const rec = new R()
    rec.continuous = true; rec.interimResults = true; rec.lang = 'en-US'
    rec.onresult = (e) => {
      let heard = ''
      for (let i = e.resultIndex; i < e.results.length; i++) heard += e.results[i][0].transcript + ' '
      if (matchWake(heard) && Date.now() - last > 3000) { last = Date.now(); cb.current() }
    }
    rec.onerror = (e) => { if (e?.error === 'not-allowed' || e?.error === 'service-not-allowed') { setError('Microphone permission was denied.'); stopped = true; setOn(false) } }
    rec.onend = () => { if (!stopped) { try { rec.start() } catch { /* already running */ } } }
    try { rec.start(); setError('') } catch { /* fine */ }
    return () => { stopped = true; rec.onend = null; try { rec.abort() } catch { /* fine */ } }
  }, [active])

  return { supported, on, listening: active, error, toggle: () => setOn((v) => { const n = !v; try { localStorage.setItem(KEY, n ? '1' : '0') } catch { /* fine */ } return n }) }
}
