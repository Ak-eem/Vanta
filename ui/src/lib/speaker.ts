import { useEffect, useRef, useState } from 'react'
import type { ChatMessage } from '../types'
import { parseCues } from './cues'

/** Text that should not be read aloud: hidden stage blocks, code, links, markdown marks. */
export function speakable(t: string): string {
  const i = t.search(/```stage/i)
  let s = i === -1 ? t : t.slice(0, i)
  s = s.replace(/```[\s\S]*?(```|$)/g, ' ').replace(/`([^`]*)`/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/https?:\/\/\S+/g, '')
  return s.replace(/[*_#>~]+/g, '').replace(/\s+/g, ' ').trim()
}

/** Splits off whole sentences that are ready to speak. `done` means no more text is coming, so the tail is spoken too. */
export function takeSentences(text: string, from: number, done: boolean): { sentences: string[]; next: number } {
  const rest = text.slice(from)
  const out: string[] = []
  let used = 0
  const re = /(?:[^.!?…\n]|\.(?=[^\s.!?…]))+(?:[.!?…]+["')\]]*(?=\s|$)|\n+)/g
  for (let m = re.exec(rest); m; m = re.exec(rest)) {
    const sentence = m[0].trim()
    if (sentence.length > 1) out.push(sentence)
    used = m.index + m[0].length
  }
  if (done && rest.slice(used).trim().length > 1) { out.push(rest.slice(used).trim()); used = rest.length }
  return { sentences: out, next: from + used }
}

const VKEY = 'vanta.voice'
export const readVoice = (): string => { try { return localStorage.getItem(VKEY) ?? '' } catch { return '' } }
export const writeVoice = (n: string) => { try { localStorage.setItem(VKEY, n) } catch { /* fine */ } }

/** Natural-sounding voices first (the browser's "Natural", "Online" and "Neural" ones are far less robotic), then Google's, then any English voice. */
export function rankVoice(v: { name: string; lang: string }): number {
  if (!/^en/i.test(v.lang)) return 99
  if (/natural|neural|online/i.test(v.name)) return 0
  if (/google/i.test(v.name)) return 1
  if (/samantha|aria|jenny|guy|zira|daniel|karen|serena/i.test(v.name)) return 2
  return 3
}
export const bestVoice = (vs: SpeechSynthesisVoice[], chosen: string): SpeechSynthesisVoice | undefined =>
  vs.find((v) => v.name === chosen) ?? [...vs].sort((a, b) => rankVoice(a) - rankVoice(b))[0]

export function useVoices(): SpeechSynthesisVoice[] {
  const [vs, setVs] = useState<SpeechSynthesisVoice[]>([])
  useEffect(() => {
    if (!('speechSynthesis' in window)) return
    const load = () => setVs(window.speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang)).sort((a, b) => rankVoice(a) - rankVoice(b)))
    load(); window.speechSynthesis.addEventListener('voiceschanged', load)
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load)
  }, [])
  return vs
}

export interface Speaker { speaking: boolean; level: number; muted: boolean; setMuted: (m: boolean) => void; stop: () => void; supported: boolean }

/** Reads VANTA's replies out loud, sentence by sentence while they are still being written, so speech never waits for the whole answer.
 *  The voice engine here is the browser's own; it is the one piece meant to be swapped for a better voice later. */
export function useSpeaker(messages: ChatMessage[], enabled: boolean): Speaker {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [speaking, setSpeaking] = useState(false)
  const [muted, setMuted] = useState(false)
  const [level, setLevel] = useState(0)
  const at = useRef<Map<string, number> | null>(null)   // how much of each message has been handed to the voice
  const pending = useRef(0)
  const gen = useRef(0)                                   // bumped on stop, so queued speech is dropped
  const chain = useRef<Promise<void>>(Promise.resolve())
  const live = enabled && !muted && supported

  const stop = () => {
    if (!supported) return
    gen.current++; chain.current = Promise.resolve(); window.speechSynthesis.cancel(); pending.current = 0; setSpeaking(false); setLevel(0)
    for (const m of messages) at.current?.set(m.id, speakable(m.text).length)   // never resume what was cut off
  }

  useEffect(() => {
    if (!at.current) { at.current = new Map(messages.map((m) => [m.id, speakable(m.text).length])); return }   // what was already on screen is history, not news
    const map = at.current
    for (const m of messages) {
      if (m.role !== 'vanta') continue
      const text = speakable(m.text)
      const from = map.get(m.id) ?? 0
      if (!live) { map.set(m.id, text.length); continue }
      const { sentences, next } = takeSentences(text, from, !m.streaming)
      map.set(m.id, next)
      for (const s of sentences) {
        const d = parseCues(s)
        const say = (text: string, rate: number, pitch: number, pause = 0) => {
          if (!text) return
          const g = gen.current
          pending.current++
          setSpeaking(true)
          // one at a time and in order, so a pause before one sentence never lets the next one jump the queue
          chain.current = chain.current.then(() => new Promise<void>((resolve) => {
            const finish = () => { pending.current = Math.max(0, pending.current - 1); if (pending.current === 0) { setSpeaking(false); setLevel(0) }; resolve() }
            if (g !== gen.current) { finish(); return }
            window.setTimeout(() => {
              if (g !== gen.current) { finish(); return }
              const u = new SpeechSynthesisUtterance(text)
              u.rate = rate; u.pitch = pitch
              const v = bestVoice(window.speechSynthesis.getVoices(), readVoice()); if (v) u.voice = v
              u.onend = finish; u.onerror = finish
              u.onboundary = () => { setLevel(0.85); window.setTimeout(() => setLevel(0.3), 140) }   // the orb pulses with each word
              window.speechSynthesis.speak(u)
            }, pause)
          }))
        }
        if (d.laugh) say('Ha ha.', 1.25, 1.35)
        say(d.text, d.rate, d.pitch, d.before)
      }
    }
  }, [messages, live])   // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (!live && supported) { gen.current++; chain.current = Promise.resolve(); window.speechSynthesis.cancel(); pending.current = 0; setSpeaking(false) } }, [live, supported])
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel() }, [supported])

  return { speaking, level, muted, setMuted, stop, supported }
}
