import { buzz, type Buzz } from './haptics'
import { play, type Cue } from './sound'

/** One place that says what each moment feels and sounds like. Change a line here to retune it. */
export type Moment = 'send' | 'reply' | 'approval' | 'alert' | 'danger' | 'nudge'
export const FEEL: Record<Moment, { buzz?: Buzz; cue?: Cue }> = {
  send: { buzz: 'tick', cue: 'tick' },
  reply: { buzz: 'soft' },
  approval: { buzz: 'confirm', cue: 'chime' },
  alert: { buzz: 'alert', cue: 'hit' },
  danger: { buzz: 'heartbeat', cue: 'rumble' },
  nudge: { buzz: 'tick' },
}

export function feel(m: Moment): void {
  const f = FEEL[m]
  if (f.buzz) buzz(f.buzz)
  if (f.cue) void play(f.cue)
}
