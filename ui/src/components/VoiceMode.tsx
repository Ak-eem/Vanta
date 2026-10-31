import { useState } from 'react'

const Ic = ({ d }: { d: string }) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>

/** Voice mode: the orb owns the screen. When VANTA presents something the orb steps to the corner and `children` (the table) fills the screen. */
export function VoiceMode({ presenting, status, you, line, rec, busy, speaking, muted, supported, onMic, onStop, onMute, onSend, children }: {
  presenting: boolean; status: string; you: string; line: string
  rec: boolean; busy: boolean; speaking: boolean; muted: boolean; supported: boolean
  onMic: () => void; onStop: () => void; onMute: () => void; onSend: (t: string) => void; children?: React.ReactNode
}) {
  const [typing, setTyping] = useState(false)
  const [text, setText] = useState('')
  const send = () => { if (text.trim()) { onSend(text); setText(''); setTyping(false) } }
  return (
    <div className="voice" data-presenting={presenting}>
      {presenting ? <div className="voice-stage">{children}</div> : null}
      <div className="voice-bottom">
        <div className="voice-text" aria-live="polite">
          {you ? <div className="you">“{you}”</div> : null}
          <div className={`line ${rec ? 'dim' : ''}`}>{rec ? 'Listening…' : busy ? 'Thinking…' : line}</div>
          {!presenting ? <div className="status">{status}</div> : null}
        </div>
        {typing ? (
          <div className="voice-type">
            <input aria-label="Type to VANTA" autoFocus placeholder="Type instead…" value={text} onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send(); if (e.key === 'Escape') setTyping(false) }} />
            <button className="btn sm primary" onClick={send} disabled={!text.trim()}>Send</button>
          </div>) : null}
        <div className="voice-controls" role="group" aria-label="Voice controls">
          <button className="vbtn" aria-label={muted ? 'Unmute VANTA' : 'Mute VANTA'} aria-pressed={muted} onClick={onMute} disabled={!supported}>
            <Ic d={muted ? 'M4 9v6h4l5 4V5L8 9zM17 9l4 6M21 9l-4 6' : 'M4 9v6h4l5 4V5L8 9zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11'} /></button>
          <button className={`vbtn mic ${rec ? 'rec' : ''}`} aria-label={rec ? 'Stop and send' : 'Speak to VANTA'} aria-pressed={rec} disabled={busy} onClick={onMic}>
            <Ic d="M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3" /></button>
          <button className="vbtn" aria-label="Stop talking" disabled={!speaking} onClick={onStop}><Ic d="M7 7h10v10H7z" /></button>
          <button className="vbtn" aria-label="Type instead" aria-pressed={typing} onClick={() => setTyping((t) => !t)}><Ic d="M3 7h18v10H3zM7 11h.01M11 11h.01M15 11h.01M8 14h8" /></button>
        </div>
        {rec ? <div className="mic-note" role="status"><i />Microphone is on</div> : null}
      </div>
    </div>)
}
