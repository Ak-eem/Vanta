import { useRef, useState } from 'react'
import { Vad } from './vad'
import { concat, encodeWav, resample, rms } from './wav'

export type Speaker = { status: string; role?: string; name?: string; note?: string }
export type Heard = { text: string; ticket: string; speaker: Speaker }

/** Listens for one spoken request. It asks the browser to cancel echo and background noise, waits for a real voice over the room's hum,
 *  stops by itself when the person finishes, sends a clean 16 kHz clip to VANTA (words + who is speaking), and hands the result back.
 *  `level` is the live mic loudness (0..1) for the orb. */
export function useRecorder(onHeard: (h: Heard) => void, onError: (m: string) => void) {
  const [rec, setRec] = useState(false)
  const [busy, setBusy] = useState(false)
  const [level, setLevel] = useState(0)
  const stopFn = useRef<null | (() => void)>(null)

  async function start() {
    let stream: MediaStream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { noiseSuppression: true, echoCancellation: true, autoGainControl: true, channelCount: 1 } })
    } catch { onError('microphone permission denied'); return }
    let ctx: AudioContext
    try { ctx = new AudioContext({ sampleRate: 16000 }) } catch { ctx = new AudioContext() }
    const src = ctx.createMediaStreamSource(stream)
    const node = ctx.createScriptProcessor(2048, 1, 1)
    const mute = ctx.createGain(); mute.gain.value = 0
    const vad = new Vad(), keep: Float32Array[] = [], pre: Float32Array[] = []
    let done = false
    const finish = async (send: boolean) => {
      if (done) return
      done = true; stopFn.current = null
      node.disconnect(); src.disconnect(); mute.disconnect()
      stream.getTracks().forEach((t) => t.stop())
      const rate = ctx.sampleRate; ctx.close().catch(() => {})
      setRec(false); setLevel(0)
      if (!send) return
      if (vad.speechMs < 400) { onError("I didn't catch anything. Try again a bit closer."); return }
      setBusy(true)
      try {
        const clip = encodeWav(resample(concat(keep), rate))
        const fd = new FormData(); fd.append('audio', clip, 'voice.wav')
        const r = await fetch('/voice/listen', { method: 'POST', body: fd })
        const j = await r.json()
        if (!r.ok) throw new Error(j.error || 'I heard nothing')
        const speaker: Speaker = j.speaker || { status: 'off' }
        if (!j.text && speaker.status !== 'silent') throw new Error('I heard nothing')
        if (j.text) onHeard({ text: String(j.text), ticket: String(j.ticket || ''), speaker })
        else onError("I didn't catch anything. Try again a bit closer.")
      } catch (e) { onError(String(e)) } finally { setBusy(false) }
    }
    node.onaudioprocess = (e) => {
      if (done) return
      const x = new Float32Array(e.inputBuffer.getChannelData(0))
      const l = rms(x); setLevel(Math.min(1, l * 8))
      const ev = vad.push(l, (x.length / ctx.sampleRate) * 1000)
      if (vad.hasStarted) { if (pre.length) { keep.push(...pre); pre.length = 0 } keep.push(x) } else { pre.push(x); if (pre.length > 4) pre.shift() }
      if (ev === 'end' || ev === 'toolong') void finish(true)
      else if (ev === 'timeout') void finish(false)
    }
    src.connect(node); node.connect(mute); mute.connect(ctx.destination)
    stopFn.current = () => void finish(vad.hasStarted)
    setRec(true)
  }
  const stop = () => stopFn.current?.()
  return { rec, busy, level, toggle: () => (rec ? stop() : void start()) }
}
