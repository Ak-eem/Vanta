import { describe, it, expect } from 'vitest'
import { calmError } from './calmError'
describe('calmError', () => {
  it('translates rate limits', () => expect(calmError('Error code: 429 rate_limit_exceeded').text).toMatch(/slow down/))
  it('translates auth', () => expect(calmError('401 Invalid API Key').text).toMatch(/\.env/))
  it('translates network', () => expect(calmError('Connection timed out').text).toMatch(/network/))
  it('never shows a raw stack as the headline', () => {
    const r = calmError('Traceback (most recent call last): boom')
    expect(r.text).not.toMatch(/Traceback/); expect(r.detail).toMatch(/Traceback/)
  })
})
