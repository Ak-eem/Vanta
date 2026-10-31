import { useEffect, useRef, useState } from 'react'
import type { ChatMessage } from '../types'

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
  const re = /(?:[^.!?…\n]|\.(?=\d))+(?:[.!?…]+["')\]]*(?=\s|$)|\n+)/g
  for (let m = re.exec(rest); m; m = re.exec(rest)) {
    const sentence = m[0].trim()
    if (sentence.length > 1) out.push(sentence)
    used = m.index + m[0].length
  }
  if (done && rest.slice(used).trim().length > 1) { out.push(rest.slice(used).trim()); used = rest.length }
  return { sentences: out, next: from + used }
}

export interface Speaker { speaking: boolean; muted: boolean; setMuted: (m: boolean) => void; stop: () => void; supported: boolean }

/** Reads VANTA's replies out loud, sentence by sentence while they are still being written, so speech never waits for the whole answer.
 *  The voice engine here is the browser's own; it is the one piece meant to be swapped for a better voice later. */
export function useSpeaker(messages: ChatMessage[], enabled: boolean): Speaker {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [speaking, setSpeaking] = useState(false)
  const [muted, setMuted] = useState(false)
  const at = useRef<Map<string, number> | null>(null)   // how much of each message has been handed to the voice
  const pending = useRef(0)
  const live = enabled && !muted && supported

  const stop = () => {
    if (!supported) return
    window.speechSynthesis.cancel(); pending.current = 0; setSpeaking(false)
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
        const u = new SpeechSynthesisUtterance(s)
        u.rate = 1.02
        pending.current++
        setSpeaking(true)
        const end = () => { pending.current = Math.max(0, pending.current - 1); if (pending.current === 0) setSpeaking(false) }
        u.onend = end; u.onerror = end
        window.speechSynthesis.speak(u)
      }
    }
  }, [messages, live])   // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (!live && supported) { window.speechSynthesis.cancel(); pending.current = 0; setSpeaking(false) } }, [live, supported])
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel() }, [supported])

  return { speaking, muted, setMuted, stop, supported }
}
