import { describe, expect, it } from 'vitest'
import { resolveTheme } from './theme'

describe('resolveTheme', () => {
  it('follows the clock in auto', () => {
    expect(resolveTheme('auto', 6)).toBe('dark'); expect(resolveTheme('auto', 7)).toBe('light')
    expect(resolveTheme('auto', 18)).toBe('light'); expect(resolveTheme('auto', 19)).toBe('dark'); expect(resolveTheme('auto', 0)).toBe('dark')
  })
  it('manual choice wins', () => { expect(resolveTheme('dark', 12)).toBe('dark'); expect(resolveTheme('light', 23)).toBe('light') })
})
