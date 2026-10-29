import { describe, expect, it } from 'vitest'
import { disk, headline, heat, mb, rankCards, rate, spark, tone, up } from './hw'

describe('hw helpers', () => {
  it('formats rates and sizes', () => {
    expect(rate(500)).toBe('500 kb/s'); expect(rate(2500)).toBe('2.5 Mb/s')
    expect(disk(512)).toBe('512 KB/s'); expect(disk(2048)).toBe('2.0 MB/s')
    expect(mb(900)).toBe('900 MB'); expect(mb(2048)).toBe('2.0 GB')
    expect(up(null)).toBe(''); expect(up(3700)).toBe('1h 1m'); expect(up(90000)).toBe('1d 1h')
  })
  it('picks tones', () => {
    expect(tone(20)).toBe('cool'); expect(tone(75)).toBe('warm'); expect(tone(95)).toBe('hot')
    expect(heat(70)).toBe('cool'); expect(heat(85)).toBe('warm'); expect(heat(92)).toBe('hot')
  })
  it('builds sparkline points and handles short data', () => {
    expect(spark([1], 100, 20)).toBe('')
    const pts = spark([0, 100], 100, 20, 100).split(' ')
    expect(pts[0]).toBe('0.0,19.0'); expect(pts[1]).toBe('100.0,1.0')
  })
  it('summarises findings', () => {
    expect(headline([]).tone).toBe('ok')
    expect(headline([{ level: 'note' }]).tone).toBe('note')
    expect(headline([{ level: 'note' }, { level: 'warn' }]).tone).toBe('warn')
  })
  it('ranks cards that need attention first, and honours a focus request', () => {
    const calm = { cpu: { pct: 10, temp: null }, mem: { pct: 30 }, disks: [{ pct: 40 }], programs: [], thermal: { temps: [] }, network: { security: [{ state: 'on' }], listening: [], connected: [] } }
    expect(rankCards(calm).order[0]).toBe('cpu'); expect(rankCards(calm).alert.size).toBe(0)
    const bad = { ...calm, mem: { pct: 95 }, network: { ...calm.network, security: [{ state: 'off' }] } }
    const r = rankCards(bad)
    expect(r.order.slice(0, 2)).toEqual(['security', 'mem']); expect(r.alert.has('mem')).toBe(true)
    expect(rankCards(calm, 'network').order[0]).toBe('network')
  })
})
