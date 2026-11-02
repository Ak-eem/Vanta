/** Decides, frame by frame, whether someone is speaking over the room's background noise, and when they have finished.
 *  The noise floor adapts: it follows quiet moments quickly and creeps up slowly, so a fan or traffic is learned and ignored. */
export type VadEvent = 'wait' | 'speech' | 'end' | 'timeout' | 'toolong'

export interface VadOptions { hangMs: number; startTimeoutMs: number; maxMs: number; minSpeechMs: number; minLevel: number; ratio: number }
const DEFAULTS: VadOptions = { hangMs: 1200, startTimeoutMs: 8000, maxMs: 30000, minSpeechMs: 250, minLevel: 0.02, ratio: 3 }

export class Vad {
  floor = 0.008
  speechMs = 0
  private silenceMs = 0
  private elapsed = 0
  private started = false
  private calib: number[] = []
  private calibMs = 400
  private o: VadOptions
  constructor(o: Partial<VadOptions> = {}) { this.o = { ...DEFAULTS, ...o } }

  get threshold() { return Math.max(this.o.minLevel, this.floor * this.o.ratio) }
  get hasStarted() { return this.started }

  push(level: number, dtMs: number): VadEvent {
    this.elapsed += dtMs
    if (this.elapsed <= this.calibMs) {          // first moments: learn the room's hum from its quieter frames, don't judge yet
      this.calib.push(level)
      const sorted = [...this.calib].sort((a, b) => a - b)
      this.floor = Math.max(0.004, sorted[Math.floor(sorted.length * 0.3)])
      return 'wait'
    }
    const loud = level > this.threshold
    if (!loud) this.floor = level < this.floor ? level * 0.3 + this.floor * 0.7 : this.floor + (level - this.floor) * 0.02
    if (loud) { this.speechMs += dtMs; this.silenceMs = 0 } else if (this.started) this.silenceMs += dtMs
    if (!this.started && this.speechMs >= this.o.minSpeechMs) this.started = true
    if (this.elapsed >= this.o.maxMs) return 'toolong'
    if (this.started && this.silenceMs >= this.o.hangMs) return 'end'
    if (!this.started && this.elapsed >= this.o.startTimeoutMs) return 'timeout'
    return this.started ? 'speech' : 'wait'
  }
}
