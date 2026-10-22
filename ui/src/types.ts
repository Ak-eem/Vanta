export type SphereState = 'idle' | 'thinking' | 'speaking' | 'learning' | 'sleeping' | 'error' | 'alert'
export type LayoutMode = 'single' | 'compact' | 'investigation'
export type BlockType =
  | 'text' | 'node' | 'news' | 'chart' | 'code' | 'table' | 'image'
  | 'steps' | 'svg' | 'html' | 'weather' | 'recommendation'
export type Tone = 'normal' | 'warn' | 'danger' | 'good'

export interface Block {
  id: string
  type: BlockType
  title?: string
  tone?: Tone
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
}
export interface Link { from: string; to: string; label?: string; style?: 'solid' | 'dashed' }
export interface StageAction { id: string; label: string; kind?: 'primary' | 'secondary' | 'ghost' }
export interface Stage {
  id: string
  title: string
  ts: number
  layout?: LayoutMode
  blocks: Block[]
  links?: Link[]
  actions?: StageAction[]
  summary?: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'vanta'
  text: string
  tag?: 'heads-up' | 'error'
  stageId?: string
  stageLabel?: string
  streaming?: boolean
}

export interface PrivacyState { paused: boolean; watching: boolean; sources: Record<string, boolean> }
export interface Nudge { id: string; severity: 'low' | 'medium' | 'high'; title: string; message: string }
export interface Approval { action: string; detail: string; ack: (reply: { approved: boolean }) => void }
