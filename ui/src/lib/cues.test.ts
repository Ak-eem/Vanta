import { describe, expect, it } from 'vitest'
import { parseCues, stripCues } from './cues'

describe('cues', () => {
  it('turns a cue into delivery and removes it from the words', () => {
    const d = parseCues('(urgent) Close that program now.')
    expect(d.text).toBe('Close that program now.'); expect(d.rate).toBeGreaterThan(1.1)
    expect(parseCues('(Sighs) Fine.').before).toBeGreaterThan(300)
    expect(parseCues('(laughs) Good one.').laugh).toBe(true)
  })
  it('plain sentences are untouched', () => { const d = parseCues('Hello there.'); expect(d.text).toBe('Hello there.'); expect(d.pitch).toBe(1); expect(d.laugh).toBe(false) })
  it('strips cues for display and ignores unknown brackets', () => {
    expect(stripCues('(dry) Well. (see note) ok')).toBe('Well. (see note) ok')
  })
})
