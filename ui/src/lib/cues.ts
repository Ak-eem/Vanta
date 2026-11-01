/** Delivery cues VANTA may put at the start of a sentence, e.g. "(dry) Well, that went as expected."
 *  The browser voice cannot truly act, so a cue changes speed, pitch and pauses. A better voice can read the same cues later. */
export type Cue = 'urgent' | 'excited' | 'gentle' | 'dry' | 'sighs' | 'laughs'
export interface Delivery { text: string; rate: number; pitch: number; before: number; laugh: boolean }

const CUE_RE = /\(\s*(urgent|excited|gentle|dry|sighs|laughs)\s*\)\s*/gi
const LOOK: Record<Cue, { rate: number; pitch: number; before: number }> = {
  urgent: { rate: 1.18, pitch: 1.08, before: 0 }, excited: { rate: 1.1, pitch: 1.18, before: 0 },
  gentle: { rate: 0.92, pitch: 0.96, before: 120 }, dry: { rate: 0.94, pitch: 0.88, before: 180 },
  sighs: { rate: 0.88, pitch: 0.92, before: 500 }, laughs: { rate: 1.1, pitch: 1.2, before: 0 },
}

export const stripCues = (t: string): string => t.replace(CUE_RE, '')

export function parseCues(sentence: string): Delivery {
  const found = [...sentence.matchAll(CUE_RE)].map((m) => m[1].toLowerCase() as Cue)
  const text = stripCues(sentence).trim()
  const cue = found[0]
  const base = cue ? LOOK[cue] : { rate: 1.02, pitch: 1, before: 0 }
  return { text, ...base, laugh: cue === 'laughs' }
}
