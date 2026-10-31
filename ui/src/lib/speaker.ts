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
  const track = useRef<{ id: string; at: number }>({ id: '', at: 0 })
  const pending = useRef(0)
  const live = enabled && !muted && supported

  const stop = () => {
    if (!supported) return
    window.speechSynthesis.cancel(); pending.current = 0; setSpeaking(false)
    const last = messages[messages.length - 1]
    if (last) track.current = { id: last.id, at: speakable(last.text).length }   // do not start reading the rest of what was cut off
  }

  useEffect(() => {
    const last = messages[messages.length - 1]
    if (!last || last.role !== 'vanta') return
    const text = speakable(last.text)
    if (track.current.id !== last.id) track.current = { id: last.id, at: 0 }
    if (!live) { track.current.at = text.length; return }
    const { sentences, next } = takeSentences(text, track.current.at, !last.streaming)
    track.current.at = next
    for (const s of sentences) {
      const u = new SpeechSynthesisUtterance(s)
      u.rate = 1.02
      pending.current++
      setSpeaking(true)
      const end = () => { pending.current = Math.max(0, pending.current - 1); if (pending.current === 0) setSpeaking(false) }
      u.onend = end; u.onerror = end
      window.speechSynthesis.speak(u)
    }
  }, [messages, live])   // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (!live && supported) { window.speechSynthesis.cancel(); pending.current = 0; setSpeaking(false) } }, [live, supported])
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel() }, [supported])

  return { speaking, muted, setMuted, stop, supported }
}
