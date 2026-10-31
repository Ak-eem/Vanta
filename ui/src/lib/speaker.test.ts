import { describe, expect, it } from 'vitest'
import { speakable, takeSentences } from './speaker'

describe('speakable', () => {
  it('drops the hidden stage block, code and links', () => {
    expect(speakable('Hello **there**. ```stage\n{"a":1}\n```')).toBe('Hello there.')
    expect(speakable('Run `ls` now, see [docs](https://x.com) and https://y.com ok')).toBe('Run ls now, see docs and ok')
    expect(speakable('Before\n```py\nprint(1)\n```\nAfter')).toBe('Before After')
  })
})

describe('takeSentences', () => {
  it('speaks only finished sentences while streaming', () => {
    const a = takeSentences('First one. Second is half wri', 0, false)
    expect(a.sentences).toEqual(['First one.']); expect(a.next).toBe(10)
    const b = takeSentences('First one. Second is half written. Third', a.next, false)
    expect(b.sentences).toEqual(['Second is half written.'])
  })
  it('speaks the tail once the message is done', () => {
    const r = takeSentences('One. And a tail without a stop', 0, true)
    expect(r.sentences).toEqual(['One.', 'And a tail without a stop'])
  })
  it('does not break on decimals', () => { expect(takeSentences('It costs 3.5 million. Done.', 0, true).sentences).toEqual(['It costs 3.5 million.', 'Done.']) })
})
