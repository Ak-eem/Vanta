import { useEffect, useRef, useState } from 'react'
import type { ChatMessage } from '../types'

/** Hide the machine-readable ```stage block (even while it is still streaming in). */
export function stripStage(t: string): string {
  const i = t.search(/```stage/i)
  return i === -1 ? t : t.slice(0, i).trimEnd()
}

export function ChatList({ messages, onOpenStage }: { messages: ChatMessage[]; onOpenStage: (id: string) => void }) {
  const end = useRef<HTMLDivElement>(null)
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [messages])
  return (
    <div className="chat" role="log" aria-live="polite">
      {messages.length === 0 ? <div className="empty-chat">Ask me anything. I can read, build, check my own work, and keep an eye on this computer for you.</div> : <div className="chat-spacer" />}
      {messages.map((m) => (
        <div key={m.id} className={`bubble ${m.role === 'user' ? 'user' : ''} ${m.tag === 'error' ? 'error' : ''}`}>
          {m.tag === 'heads-up' ? <div className="tag"><i />HEADS-UP</div> : null}
          {m.tag === 'error' ? <div className="tag"><i />HICCUP</div> : null}
          {stripStage(m.text)}{m.streaming ? <span className="caret" /> : null}
          {m.stageId ? <div><button className="stage-link" onClick={() => onOpenStage(m.stageId!)}>Open on stage: {m.stageLabel}</button></div> : null}
        </div>))}
      <div ref={end} />
    </div>)
}

export function Composer({ onSend, onVoiceError, disabled, autoFocus, onActivity }: { onSend: (t: string) => void; onVoiceError: (m: string) => void; disabled?: boolean; autoFocus?: boolean; onActivity?: () => void }) {
  const [text, setText] = useState('')
  const [rec, setRec] = useState(false)
  const media = useRef<MediaRecorder | null>(null)

  const submit = () => { if (text.trim()) { onSend(text); setText('') } }

  async function toggleMic() {
    if (rec) { media.current?.stop(); return }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream), chunks: Blob[] = []
      mr.ondataavailable = (e) => chunks.push(e.data)
      mr.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop()); setRec(false)
        const fd = new FormData(); fd.append('audio', new Blob(chunks, { type: mr.mimeType || 'audio/webm' }), 'voice.webm')
        try {
          const r = await fetch('/transcribe', { method: 'POST', body: fd })
          const j = await r.json()
          if (j.text) setText((t) => (t ? t + ' ' : '') + j.text); else throw new Error(j.error || 'no text')
        } catch (e) { onVoiceError(String(e)) }
      }
      media.current = mr; mr.start(); setRec(true)
    } catch { onVoiceError('microphone permission denied') }
  }

  return (
    <div className="composer">
      <input aria-label="Message VANTA" placeholder="Ask VANTA anything" value={text} disabled={disabled} autoFocus={autoFocus}
        onChange={(e) => { setText(e.target.value); onActivity?.() }} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() } }} />
      <button className={`btn icon mic ${rec ? 'rec' : ''}`} aria-label={rec ? 'Stop recording' : 'Voice'} aria-pressed={rec} onClick={toggleMic}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
      </button>
      <button className="btn icon send" aria-label="Send" disabled={!text.trim()} onClick={submit}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#07111F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
      </button>
    </div>)
}
