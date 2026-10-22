import { describe, it, expect } from 'vitest'
import { initial, reducer, sphereState, type State } from './useVanta'
import type { Stage } from '../types'

const stage = (id: string): Stage => ({ id, title: id, ts: 0, blocks: [{ id: 'a', type: 'node', data: {} }] })
const online: State = { ...initial, conn: 'online' }

describe('chat streaming', () => {
  it('appends chunks to one streaming bubble, then finalises', () => {
    let s = reducer(online, { t: 'chunk', text: 'Hel' })
    s = reducer(s, { t: 'chunk', text: 'lo' })
    expect(s.messages).toHaveLength(1); expect(s.messages[0].text).toBe('Hello'); expect(s.messages[0].streaming).toBe(true)
    s = reducer(s, { t: 'done' })
    expect(s.messages[0].streaming).toBe(false); expect(s.speaking).toBe(false)
  })
})

describe('errors are calm', () => {
  it('shows a friendly message, not the raw error', () => {
    const s = reducer(online, { t: 'error', message: 'Error code: 429 {"error":"rate_limit_exceeded"}' })
    expect(s.messages[0].tag).toBe('error'); expect(s.messages[0].text).not.toMatch(/429|rate_limit/)
  })
})

describe('sphere state priority', () => {
  const now = 1_000
  it('offline wins, then error, concern, speaking, thinking', () => {
    expect(sphereState({ ...initial, conn: 'offline' }, now)).toBe('sleeping')
    expect(sphereState({ ...online, errorUntil: now + 1, concernUntil: now + 1 }, now)).toBe('error')
    expect(sphereState({ ...online, concernUntil: now + 1, speaking: true }, now)).toBe('alert')
    expect(sphereState({ ...online, speaking: true, status: 'thinking' }, now)).toBe('speaking')
    expect(sphereState({ ...online, status: 'thinking' }, now)).toBe('thinking')
    expect(sphereState({ ...online, status: 'learning' }, now)).toBe('learning')
    expect(sphereState(online, now)).toBe('idle')
  })
  it('alert and error expire by themselves', () => expect(sphereState({ ...online, errorUntil: 500 }, now)).toBe('idle'))
})

describe('stage handling', () => {
  it('a new stage takes over unless pinned', () => {
    let s = reducer(online, { t: 'stage', stage: stage('one') })
    expect(s.activeStageId).toBe('one')
    s = reducer(s, { t: 'pin' }); s = reducer(s, { t: 'stage', stage: stage('two') })
    expect(s.activeStageId).toBe('one'); expect(s.stages.map((x) => x.id)).toEqual(['two', 'one'])
    s = reducer(s, { t: 'open', id: 'two' }); expect(s.activeStageId).toBe('two')
    s = reducer(s, { t: 'clearStage' }); expect(s.activeStageId).toBeNull(); expect(s.pinned).toBe(false)
  })
  it('keeps at most 12 stages and replaces one with the same id', () => {
    let s = online
    for (let i = 0; i < 20; i++) s = reducer(s, { t: 'stage', stage: stage('s' + i) })
    expect(s.stages).toHaveLength(12)
    s = reducer(s, { t: 'stage', stage: stage('s19') }); expect(s.stages).toHaveLength(12)
  })
})
