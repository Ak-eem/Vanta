import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import type { Approval, ChatMessage, Nudge, PrivacyState, SphereState, Stage, SyncState, Telemetry, Project, GuardianState, ScanResult, SetupState, HwState, WeatherState, FilesState } from '../types'
import { sanitizeSetup } from './setup'
import { sanitizeStage } from '../stage/sanitize'
import { calmError } from './calmError'

export interface State {
  conn: 'connecting' | 'online' | 'offline'
  status: 'idle' | 'thinking' | 'learning'
  statusText: string
  messages: ChatMessage[]
  stages: Stage[]
  activeStageId: string | null
  pinned: boolean
  privacy: PrivacyState
  nudge: Nudge | null
  approval: Approval | null
  concernUntil: number
  errorUntil: number
  speaking: boolean
  workspace: { filenames: string[]; run_cmd?: string } | null
  tel: Telemetry | null
  hw: HwState | null
  focus: string | null
  weather: WeatherState | null
  files: FilesState | null
  sync: SyncState | null
  projects: Project[]
  guardian: GuardianState | null
  scans: ScanResult[]
  setup: SetupState | null
}

type Action =
  | { t: 'conn'; v: State['conn'] }
  | { t: 'status'; state: string; message?: string }
  | { t: 'user'; text: string }
  | { t: 'chunk'; text: string }
  | { t: 'done' }
  | { t: 'say'; text: string; tag?: ChatMessage['tag']; stageId?: string; stageLabel?: string }
  | { t: 'error'; message: string }
  | { t: 'stage'; stage: Stage; announce?: boolean }
  | { t: 'open'; id: string }
  | { t: 'pin' }
  | { t: 'clearStage' }
  | { t: 'privacy'; v: PrivacyState }
  | { t: 'nudge'; v: Nudge | null }
  | { t: 'approval'; v: Approval | null }
  | { t: 'concern'; ms: number }
  | { t: 'workspace'; v: State['workspace'] }
  | { t: 'tel'; v: unknown }
  | { t: 'hw'; v: HwState }
  | { t: 'focus'; card: string | null }
  | { t: 'weather'; v: WeatherState }
  | { t: 'files'; v: FilesState }
  | { t: 'sync'; v: SyncState }
  | { t: 'projects'; v: Project[] }
  | { t: 'guardian'; v: GuardianState }
  | { t: 'setup'; v: unknown }
  | { t: 'scans'; v: ScanResult[] }
  | { t: 'scan'; v: ScanResult }

const uid = () => Math.random().toString(36).slice(2, 9)

export const initial: State = {
  conn: 'connecting', status: 'idle', statusText: '', messages: [], stages: [], activeStageId: null, pinned: false,
  privacy: { paused: false, watching: true, sources: {} }, nudge: null, approval: null,
  concernUntil: 0, errorUntil: 0, speaking: false, workspace: null, tel: null, hw: null, focus: null, weather: null, files: null, sync: null, projects: [], guardian: null, scans: [], setup: null,
}

export function reducer(s: State, a: Action): State {
  switch (a.t) {
    case 'conn': return { ...s, conn: a.v }
    case 'status': {
      const st = a.state === 'thinking' || a.state === 'learning' ? a.state : 'idle'
      return { ...s, status: st, statusText: st === 'idle' ? '' : a.message ?? '' }
    }
    case 'user': return { ...s, messages: [...s.messages, { id: uid(), role: 'user', text: a.text }] }
    case 'chunk': {
      const last = s.messages[s.messages.length - 1]
      if (last && last.role === 'vanta' && last.streaming)
        return { ...s, speaking: true, messages: [...s.messages.slice(0, -1), { ...last, text: last.text + a.text }] }
      return { ...s, speaking: true, messages: [...s.messages, { id: uid(), role: 'vanta', text: a.text, streaming: true }] }
    }
    case 'done': {
      const last = s.messages[s.messages.length - 1]
      const msgs = last?.streaming ? [...s.messages.slice(0, -1), { ...last, streaming: false }] : s.messages
      return { ...s, speaking: false, messages: msgs }
    }
    case 'say': return { ...s, messages: [...s.messages, { id: uid(), role: 'vanta', text: a.text, tag: a.tag, stageId: a.stageId, stageLabel: a.stageLabel }] }
    case 'error': {
      const e = calmError(a.message)
      return {
        ...s, speaking: false, status: 'idle', errorUntil: Date.now() + 8000,
        messages: [...s.messages.map((m) => ({ ...m, streaming: false })), { id: uid(), role: 'vanta', text: e.text, tag: 'error' }],
      }
    }
    case 'stage': {
      const stages = [a.stage, ...s.stages.filter((x) => x.id !== a.stage.id)].slice(0, 12)
      const takeOver = !s.pinned || s.activeStageId === a.stage.id || !s.activeStageId
      return { ...s, stages, activeStageId: takeOver ? a.stage.id : s.activeStageId }
    }
    case 'open': return { ...s, activeStageId: a.id }
    case 'pin': return { ...s, pinned: !s.pinned }
    case 'clearStage': return { ...s, activeStageId: null, pinned: false }
    case 'hw': return { ...s, hw: a.v }
    case 'weather': return { ...s, weather: a.v }
    case 'files': return { ...s, files: a.v }
    case 'focus': return { ...s, focus: a.card, activeStageId: a.card ? null : s.activeStageId, pinned: a.card ? false : s.pinned }
    case 'privacy': return { ...s, privacy: a.v }
    case 'nudge': return { ...s, nudge: a.v }
    case 'approval': return { ...s, approval: a.v }
    case 'concern': return { ...s, concernUntil: Date.now() + a.ms }
    case 'workspace': return { ...s, workspace: a.v }
    case 'sync': return { ...s, sync: a.v }
    case 'projects': return { ...s, projects: Array.isArray(a.v) ? a.v.slice(0, 50) : [] }
    case 'guardian': return { ...s, guardian: a.v }
    case 'setup': return { ...s, setup: sanitizeSetup(a.v) ?? s.setup }
    case 'scans': return { ...s, scans: Array.isArray(a.v) ? a.v.slice(0, 30) : [] }
    case 'scan': return { ...s, scans: [a.v, ...s.scans.filter((x) => x.sha256 !== a.v.sha256)].slice(0, 30) }
    case 'tel': {
      const t = a.v as Partial<Telemetry> | null
      if (!t || typeof t !== 'object') return s
      const n = (x: unknown) => (typeof x === 'number' && isFinite(x) ? x : 0)
      const b = t.battery && typeof t.battery === 'object' ? { pct: n(t.battery.pct), plugged: !!t.battery.plugged } : null
      return { ...s, tel: {
        cpu: n(t.cpu), mem: n(t.mem), down: n(t.down), up: n(t.up), procs: n(t.procs), battery: b, idle: !!t.idle,
        app: typeof t.app === 'string' ? t.app.slice(0, 40) : undefined, title: typeof t.title === 'string' ? t.title.slice(0, 80) : undefined,
      } }
    }
  }
}

export function sphereState(s: State, now = Date.now()): SphereState {
  if (s.conn !== 'online') return 'sleeping'
  if (s.errorUntil > now) return 'error'
  if (s.concernUntil > now) return 'alert'
  if (s.speaking) return 'speaking'
  if (s.status === 'thinking') return 'thinking'
  if (s.status === 'learning') return 'learning'
  return 'idle'
}

export function useVanta() {
  const [state, dispatch] = useReducer(reducer, initial)
  const sock = useRef<Socket | null>(null)
  const [, tick] = useReducer((n: number) => n + 1, 0)

  useEffect(() => {
    const socket = io({ transports: ['websocket', 'polling'] })
    sock.current = socket
    socket.on('connect', () => { dispatch({ t: 'conn', v: 'online' }); socket.emit('privacy_get'); socket.emit('sync_get'); socket.emit('hw_watch', { on: true }); socket.emit('weather_get', {}); socket.emit('files_get') })
    socket.on('disconnect', () => dispatch({ t: 'conn', v: 'offline' }))
    socket.on('connect_error', (err) => {
      dispatch({ t: 'conn', v: 'offline' })
      if (/xhr poll error|unauthor|403|401/i.test(String(err?.message)) && !socket.active) window.location.href = '/login'
    })
    socket.on('status', (d: { state: string; message?: string }) => dispatch({ t: 'status', state: d.state, message: d.message }))
    socket.on('stream_chunk', (d: { chunk: string }) => dispatch({ t: 'chunk', text: d.chunk }))
    socket.on('stream_done', () => dispatch({ t: 'done' }))
    socket.on('response', (d: { text: string }) => dispatch({ t: 'say', text: d.text }))
    socket.on('error', (d: { message: string }) => dispatch({ t: 'error', message: d.message }))
    socket.on('privacy_state', (d: PrivacyState) => dispatch({ t: 'privacy', v: d }))
    socket.on('workspace_files', (d: { filenames: string[]; run_cmd?: string }) => dispatch({ t: 'workspace', v: d }))
    socket.on('scans', (d: ScanResult[]) => dispatch({ t: 'scans', v: d }))
    socket.on('scan_result', (d: ScanResult) => dispatch({ t: 'scan', v: d }))
    socket.on('projects', (d: Project[]) => dispatch({ t: 'projects', v: d }))
    socket.on('guardian_state', (d: GuardianState) => dispatch({ t: 'guardian', v: d }))
    socket.on('setup_state', (d: unknown) => dispatch({ t: 'setup', v: d }))
    socket.on('sync_state', (d: SyncState) => dispatch({ t: 'sync', v: d }))
    socket.on('hw_focus', (d: { card: string }) => dispatch({ t: 'focus', card: d.card }))
    socket.on('weather_state', (d: WeatherState) => dispatch({ t: 'weather', v: d }))
    socket.on('files_state', (d: FilesState) => dispatch({ t: 'files', v: d }))
    socket.on('hw_state', (d: HwState) => dispatch({ t: 'hw', v: d }))
    socket.on('telemetry', (d: unknown) => dispatch({ t: 'tel', v: d }))
    socket.on('nudge', (d: Nudge) => {
      dispatch({ t: 'nudge', v: d })
      if (d.severity !== 'low') dispatch({ t: 'concern', ms: 12000 })
    })
    socket.on('approval_request', (req: { action: string; detail: string }, ack: Approval['ack']) =>
      dispatch({ t: 'approval', v: { action: req.action, detail: req.detail, ack } }))
    socket.on('stage', (raw: unknown) => {
      const stage = sanitizeStage(raw)
      if (!stage) return
      dispatch({ t: 'stage', stage })
      if (stage.summary)
        dispatch({ t: 'say', text: stage.summary, tag: stage.blocks.some((b) => b.tone === 'warn' || b.tone === 'danger') ? 'heads-up' : undefined, stageId: stage.id, stageLabel: stage.title })
    })
    socket.on('alert', (d: { severity?: string; title: string; message: string }) => {
      const stage = sanitizeStage({
        id: `alert-${Date.now()}`, title: String(d.title).slice(0, 60), layout: 'single',
        blocks: [
          { id: 'what', type: 'text', title: 'What I noticed', tone: d.severity === 'high' ? 'danger' : 'warn', data: { body: d.message } },
          { id: 'rec', type: 'recommendation', data: { title: 'Worth a look', reason: "I haven't changed anything. Tell me if you want me to dig deeper." } },
        ],
        actions: [{ id: `ask:Explain what you noticed about: ${d.title}. Is it safe, and what should I do?`, label: 'Show me why', kind: 'primary' }, { id: 'dismiss', label: 'Ignore once', kind: 'ghost' }],
        summary: `${d.title}. I put what I found on the stage.`,
      })
      if (stage) { dispatch({ t: 'stage', stage }); dispatch({ t: 'say', text: stage.summary!, tag: 'heads-up', stageId: stage.id, stageLabel: stage.title }); dispatch({ t: 'concern', ms: 12000 }) }
    })
    const timer = window.setInterval(() => tick(), 1000) // lets time-boxed states (alert/error) expire
    return () => { window.clearInterval(timer); socket.close() }
  }, [])

  const send = useCallback((text: string) => {
    const t = text.trim()
    if (!t) return
    dispatch({ t: 'user', text: t })
    sock.current?.emit('chat', { message: t, think: false })
  }, [])
  const api = useMemo(() => ({
    send,
    syncUnlock: (passphrase: string) => sock.current?.emit('sync_unlock', { passphrase }),
    loadPanels: () => { sock.current?.emit('projects_get'); sock.current?.emit('guardian_get'); sock.current?.emit('scans_get') },
    scanFile: (path: string) => sock.current?.emit('scan_file', { path }),
    checkProject: (id: string) => sock.current?.emit('project_check', { id }),
    saveProject: (p: Partial<Project>) => sock.current?.emit('project_save', p),
    removeProject: (id: string) => sock.current?.emit('project_remove', { id }),
    setSetup: (id: string) => sock.current?.emit('setup_set', { id }),
    setBuilderFast: (where: 'cloud' | 'local') => sock.current?.emit('setup_builder_fast', { where }),
    setGuardMode: (mode: 'ask' | 'auto') => sock.current?.emit('guardian_mode', { mode }),
    setAgentMode: (mode: string) => sock.current?.emit('agent_mode', { mode }),
    setEmergency: (on: boolean) => sock.current?.emit('guardian_emergency', { on }),
    purge: (id: string) => sock.current?.emit('guardian_purge', { id }),
    restore: (id: string) => sock.current?.emit('guardian_restore', { id }),
    syncNow: () => sock.current?.emit('sync_now'),
    pause: (paused: boolean) => sock.current?.emit('privacy_pause', { paused }),
    setSource: (name: string, enabled: boolean) => sock.current?.emit('privacy_source', { name, enabled }),
    ackNudge: (id: string) => { sock.current?.emit('nudge_ack', { id }); dispatch({ t: 'nudge', v: null }) },
    answerApproval: (approved: boolean, a: Approval) => { a.ack({ approved }); dispatch({ t: 'approval', v: null }) },
    openStage: (id: string) => dispatch({ t: 'open', id }),
    pinStage: () => dispatch({ t: 'pin' }),
    clearStage: () => dispatch({ t: 'clearStage' }),
    stageAction: (stageId: string, actionId: string) => sock.current?.emit('stage_action', { stage: stageId, action: actionId }),
    getWeather: (city?: string) => sock.current?.emit('weather_get', { city }),
    getFiles: () => sock.current?.emit('files_get'),
    hwEnd: (pid: number) => sock.current?.emit('hw_end', { pid }),
    hwUninstall: (id: string) => sock.current?.emit('hw_uninstall', { id }),
    dispatch,
  }), [send])
  return { state, api }
}
