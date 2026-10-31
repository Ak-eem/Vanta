import { useRef, useState } from 'react'

/** Records one spoken request, sends it to VANTA's own transcriber, and hands back the text. `level` is the live mic loudness (0..1) for the orb. */
export function useRecorder(onText: (t: string) => void, onError: (m: string) => void) {
  const [rec, setRec] = useState(false)
  const [busy, setBusy] = useState(false)
  const [level, setLevel] = useState(0)
  const media = useRef<MediaRecorder | null>(null)
  const raf = useRef(0)

  async function start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream), chunks: Blob[] = []
      let ctx: AudioContext | null = null
      try {
        ctx = new AudioContext()
        const an = ctx.createAnalyser(); an.fftSize = 256
        ctx.createMediaStreamSource(stream).connect(an)
        const buf = new Uint8Array(an.frequencyBinCount)
        const tick = () => { an.getByteTimeDomainData(buf); let m = 0; for (const v of buf) m = Math.max(m, Math.abs(v - 128)); setLevel(Math.min(1, m / 60)); raf.current = requestAnimationFrame(tick) }
        tick()
      } catch { /* the level is only decoration */ }
      mr.ondataavailable = (e) => chunks.push(e.data)
      mr.onstop = async () => {
        cancelAnimationFrame(raf.current); setLevel(0); ctx?.close().catch(() => {})
        stream.getTracks().forEach((t) => t.stop()); setRec(false); setBusy(true)
        const fd = new FormData(); fd.append('audio', new Blob(chunks, { type: mr.mimeType || 'audio/webm' }), 'voice.webm')
        try {
          const j = await (await fetch('/transcribe', { method: 'POST', body: fd })).json()
          if (j.text) onText(String(j.text)); else throw new Error(j.error || 'I heard nothing')
        } catch (e) { onError(String(e)) } finally { setBusy(false) }
      }
      media.current = mr; mr.start(); setRec(true)
    } catch { onError('microphone permission denied') }
  }
  const stop = () => media.current?.stop()
  return { rec, busy, level, toggle: () => (rec ? stop() : void start()) }
}
