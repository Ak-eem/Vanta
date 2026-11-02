import { describe, expect, it } from 'vitest'
import { Vad } from './vad'
import { encodeWav, resample, rms } from './wav'

const run = (v: Vad, levels: number[], dt = 100) => levels.map((l) => v.push(l, dt))

describe('Vad', () => {
  it('waits through steady background noise and times out', () => {
    const out = run(new Vad(), Array(90).fill(0.012))
    expect(out.every((e) => e === 'wait' || e === 'timeout')).toBe(true)
    expect(out.slice(-1)[0]).toBe('timeout')
  })
  it('starts on speech and ends after a pause', () => {
    const out = run(new Vad(), [...Array(8).fill(0.01), ...Array(10).fill(0.2), ...Array(15).fill(0.01)])
    expect(out).toContain('speech')
    expect(out.slice(-1)[0]).toBe('end')
  })
  it('learns a loud fan: a steady hum is not speech, a voice above it is', () => {
    const v = new Vad()
    const hum = run(v, Array(80).fill(0.05), 20) // 1.6 s of fan
    expect(hum.every((e) => e === 'wait')).toBe(true)
    expect(run(v, Array(6).fill(0.4)).slice(-1)[0]).toBe('speech')
  })
  it('ignores a single click', () => {
    const v = new Vad()
    expect(run(v, [0.01,0.01,0.01,0.01,0.01,0.01, 0.5, 0.01, 0.01]).includes('speech')).toBe(false)
  })
  it('stops a clip that never ends', () => {
    expect(run(new Vad({ maxMs: 2000 }), Array(30).fill(0.3)).slice(-1)[0]).toBe('toolong')
  })
})

describe('wav', () => {
  it('writes a valid 16 kHz mono header', async () => {
    const b = encodeWav(new Float32Array(1600).fill(0.5))
    const v = new DataView(await b.arrayBuffer())
    expect(b.size).toBe(44 + 3200)
    expect(String.fromCharCode(v.getUint8(0), v.getUint8(1), v.getUint8(2), v.getUint8(3))).toBe('RIFF')
    expect(v.getUint32(24, true)).toBe(16000); expect(v.getUint16(22, true)).toBe(1)
  })
  it('resamples 48k to 16k', () => {
    const x = new Float32Array(4800).map((_, i) => Math.sin(i / 20))
    expect(resample(x, 48000).length).toBe(1600)
  })
  it('measures loudness', () => { expect(rms(new Float32Array(100).fill(0.5))).toBeCloseTo(0.5) })
})
