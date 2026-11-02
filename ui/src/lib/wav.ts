/** Turns microphone samples into a small 16 kHz mono WAV, which is what the voice recogniser and transcriber want. */
export const WAV_RATE = 16000

export function resample(x: Float32Array, from: number, to = WAV_RATE): Float32Array {
  if (from === to || x.length === 0) return x
  const n = Math.max(1, Math.floor((x.length * to) / from)), out = new Float32Array(n), k = from / to
  for (let i = 0; i < n; i++) {
    const p = i * k, a = Math.floor(p), b = Math.min(x.length - 1, a + 1), f = p - a
    out[i] = x[a] * (1 - f) + x[b] * f
  }
  return out
}

export function concat(parts: Float32Array[]): Float32Array {
  const out = new Float32Array(parts.reduce((n, p) => n + p.length, 0))
  let o = 0
  for (const p of parts) { out.set(p, o); o += p.length }
  return out
}

export function encodeWav(x: Float32Array, rate = WAV_RATE): Blob {
  const buf = new ArrayBuffer(44 + x.length * 2), v = new DataView(buf)
  const str = (o: number, s: string) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)) }
  str(0, 'RIFF'); v.setUint32(4, 36 + x.length * 2, true); str(8, 'WAVE'); str(12, 'fmt ')
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true)
  v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true)
  str(36, 'data'); v.setUint32(40, x.length * 2, true)
  for (let i = 0; i < x.length; i++) v.setInt16(44 + i * 2, Math.round(Math.max(-1, Math.min(1, x[i])) * 32767), true)
  return new Blob([buf], { type: 'audio/wav' })
}

export function rms(x: Float32Array): number {
  let s = 0
  for (let i = 0; i < x.length; i++) s += x[i] * x[i]
  return Math.sqrt(s / Math.max(1, x.length))
}
