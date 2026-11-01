import { describe, expect, it } from 'vitest'
import { matchWake } from './wake'

describe('matchWake', () => {
  it('hears the name used as a call', () => {
    for (const s of ['vanta', 'Hey Vanta', 'okay vanta what time is it', 'Vanta wake up', 'wake up vanta', 'hey vannta']) expect(matchWake(s)).toBe(true)
  })
  it('ignores other words', () => { for (const s of ['what is the weather', 'I like advantage', 'cant wait']) expect(matchWake(s)).toBe(false) })
})
