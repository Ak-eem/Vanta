import { describe, expect, it } from 'vitest'
import { sanitizeSetup } from './setup'

const good = { current: 'think', builder_fast: 'local', local_ready: true, profiles: [{ id: 'everyday', label: 'Everyday', desc: 'Normal' }, { id: 'think', label: 'Think with me', desc: 'Deep' }] }

describe('sanitizeSetup', () => {
  it('keeps a good payload', () => {
    const s = sanitizeSetup(good)!
    expect(s.current).toBe('think')
    expect(s.builder_fast).toBe('local')
    expect(s.local_ready).toBe(true)
    expect(s.profiles).toHaveLength(2)
  })
  it('falls back when the current setup is unknown', () => {
    expect(sanitizeSetup({ ...good, current: 'nope' })!.current).toBe('everyday')
  })
  it('rejects junk and drops bad entries', () => {
    expect(sanitizeSetup(null)).toBeNull()
    expect(sanitizeSetup({ profiles: [] })).toBeNull()
    const s = sanitizeSetup({ ...good, profiles: [...good.profiles, null, 5, { id: '', label: 'x' }] })!
    expect(s.profiles).toHaveLength(2)
  })
  it('limits text length and defaults the toggles', () => {
    const s = sanitizeSetup({ profiles: [{ id: 'a'.repeat(100), label: 'L'.repeat(100), desc: 'd'.repeat(500) }] })!
    expect(s.profiles[0].id.length).toBe(24)
    expect(s.profiles[0].desc.length).toBe(160)
    expect(s.builder_fast).toBe('cloud')
    expect(s.local_ready).toBe(false)
  })
})
