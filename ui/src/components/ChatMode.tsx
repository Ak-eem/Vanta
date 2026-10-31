import { useEffect, useRef, useState } from 'react'
import type { ChatMessage } from '../types'
import { stripStage } from './Chat'

const hello = (h: number) => (h < 5 ? 'Still up?' : h < 12 ? 'Good morning.' : h < 18 ? 'Good afternoon.' : 'Good evening.')
const IDEAS = ['How is my laptop doing?', 'Research something for me', 'What should I work on next?', "What's the weather like?"]

const Ico = ({ d }: { d: string }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>

/** Chat mode: a calm single column. You are a soft pill on the right, VANTA is plain text on the page, progress notes are quiet grey lines. */
export function ChatMode({ messages, onOpenStage, onSend, disabled, onVoiceError, status, children }: {
  messages: ChatMessage[]; onOpenStage: (id: string) => void; onSend: (t: string) => void; disabled: boolean; onVoiceError: (m: string) => void; status: string; children?: React.ReactNode
}) {
  const [text, setText] = useState('')
  const [rec, setRec] = useState(false)
  const end = useRef<HTMLDivElement>(null)
  const media = useRef<MediaRecorder | null>(null)
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [messages])
  const submit = () => { if (text.trim() && !disabled) { onSend(text); setText('') } }

  async function mic() {
    if (rec) { media.current?.stop(); return }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream), chunks: Blob[] = []
      mr.ondataavailable = (e) => chunks.push(e.data)
      mr.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop()); setRec(false)
        const fd = new FormData(); fd.append('audio', new Blob(chunks, { type: mr.mimeType || 'audio/webm' }), 'voice.webm')
        try { const j = await (await fetch('/transcribe', { method: 'POST', body: fd })).json(); if (j.text) setText((t) => (t ? t + ' ' : '') + j.text); else throw new Error(j.error || 'no text') } catch (e) { onVoiceError(String(e)) }
      }
      media.current = mr; mr.start(); setRec(true)
    } catch { onVoiceError('microphone permission denied') }
  }

  return (
    <div className="chatmode" data-split={!!children}>
      <div className="chatcol">
        <div className="thread" role="log" aria-live="polite">
          {messages.length === 0 ? (
            <div className="welcome">
              <h1>{hello(new Date().getHours())}</h1>
              <p>What can I do for you?</p>
              <div className="ideas">{IDEAS.map((q) => <button key={q} onClick={() => onSend(q)} disabled={disabled}>{q}</button>)}</div>
            </div>) : null}
          {messages.map((m) => m.tag === 'narration' ? (
            <div key={m.id} className="msg note"><i />{m.text}</div>
          ) : m.role === 'user' ? (
            <div key={m.id} className="msg user">{m.text}</div>
          ) : (
            <div key={m.id} className={`msg vanta ${m.tag === 'error' ? 'error' : ''}`}>
              {m.tag === 'heads-up' ? <div className="msg-tag">Heads-up</div> : null}
              {m.tag === 'error' ? <div className="msg-tag">Hiccup</div> : null}
              <div className="msg-text">{stripStage(m.text)}{m.streaming ? <span className="caret" /> : null}</div>
              {m.stageId ? <button className="pres" onClick={() => onOpenStage(m.stageId!)}><span className="pres-ico"><Ico d="M4 5h16v11H4zM8 20h8M12 16v4" /></span><span><b>{m.stageLabel || 'Presentation'}</b><small>Open it on screen</small></span></button> : null}
            </div>))}
          {status ? <div className="msg note live"><i />{status}</div> : null}
          <div ref={end} />
        </div>
        <div className="composer2">
          <input aria-label="Message VANTA" placeholder="Ask VANTA anything" value={text} disabled={disabled} autoFocus
            onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() } }} />
          <button className={`c2btn ${rec ? 'rec' : ''}`} aria-label={rec ? 'Stop recording' : 'Dictate'} aria-pressed={rec} onClick={mic}><Ico d="M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3" /></button>
          <button className="c2btn send" aria-label="Send" disabled={!text.trim() || disabled} onClick={submit}><Ico d="M12 19V6M6 12l6-6 6 6" /></button>
        </div>
      </div>
      {children ? <div className="chatside">{children}</div> : null}
    </div>)
}
