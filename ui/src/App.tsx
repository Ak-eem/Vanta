import { useEffect, useMemo, useRef, useState } from 'react'
import { STATE_LABEL } from './components/Sphere'
import { Readouts } from './components/Readouts'
import { readPref, useHudMode, writePref, type LayoutPref } from './lib/hudMode'
import { useFx } from './lib/useFx'
import { ChatList, Composer } from './components/Chat'
import { ApprovalModal, NudgeToast, SettingsDrawer } from './components/Overlays'
import { StageView } from './stage/StageView'
import { sphereState, useVanta } from './lib/useVanta'
import type { StageAction } from './types'

const NAMES: Record<string, string> = { window: 'windows', browser: 'browser', process: 'programs', screen: 'screen' }

function useIsPhone() {
  const q = '(max-width: 819px)'
  const [m, setM] = useState(() => window.matchMedia(q).matches)
  useEffect(() => { const mq = window.matchMedia(q); const f = () => setM(mq.matches); mq.addEventListener('change', f); return () => mq.removeEventListener('change', f) }, [])
  return m
}

export default function App() {
  const { state, api } = useVanta()
  const phone = useIsPhone()
  const [tab, setTab] = useState<'chat' | 'stage'>('chat')
  const [settings, setSettings] = useState(false)
  const [unseen, setUnseen] = useState(false)
  const [pref, setPrefState] = useState<LayoutPref>(readPref)
  const [fx, setFx, fxAuto] = useFx()
  // The chat panel slides away when idle and comes back when it is used (message, typing, or a tap on the dock).
  const [railOpen, setRailOpen] = useState(false)
  const lastUse = useRef(Date.now())
  const poke = () => { lastUse.current = Date.now() }
  const openRail = () => { poke(); setRailOpen(true) }
  const setPref = (v: LayoutPref) => { writePref(v); setPrefState(v) }

  const sphere = sphereState(state)
  const stage = useMemo(() => state.stages.find((s) => s.id === state.activeStageId) ?? null, [state.stages, state.activeStageId])
  const busy = state.status !== 'idle' || sphere === 'alert' || sphere === 'speaking'
  const hud = useHudMode(pref, !!stage || busy)
  const on = Object.entries(state.privacy.sources).filter(([, v]) => v).map(([k]) => NAMES[k] ?? k)
  const watching = state.privacy.watching && !state.privacy.paused
  const pillText = state.privacy.paused ? 'Paused' : on.length ? `Watching: ${on.join(', ')}` : 'Not watching'

  useEffect(() => { if (stage && tab !== 'stage') setUnseen(true) }, [stage?.id]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (tab === 'stage') setUnseen(false) }, [tab])

  useEffect(() => { if (state.messages.length) openRail() }, [state.messages.length]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!railOpen) return
    const id = window.setInterval(() => {
      const typing = document.activeElement?.closest('.composer') && (document.activeElement as HTMLInputElement).value
      if (!typing && !state.approval && Date.now() - lastUse.current > 20000) setRailOpen(false)
    }, 2000)
    return () => window.clearInterval(id)
  }, [railOpen, state.approval])

  const openStage = (id: string) => { api.openStage(id); setTab('stage') }
  const onAction = (stageId: string, a: StageAction) => {
    if (a.id.startsWith('ask:')) { api.send(a.id.slice(4)); setTab('chat') }
    else if (a.id === 'dismiss') api.clearStage()
    else api.stageAction(stageId, a.id)
  }
  const sensesLine = `Senses: ${on.filter((n) => n !== 'screen').join(' · ') || 'none'}  |  Screen: ${state.privacy.sources.screen ? 'on' : 'off'}`

  return (
    <div className="app" data-hud={hud ? 'on' : 'off'} data-rail={phone || railOpen ? 'open' : 'closed'}>
      <header className="topbar">
        <span className="wordmark">VANTA</span>
        <div className="top-right">
          <span className={`pill ${watching ? 'on' : ''}`} role="status"><span className="dot" /><span className="label-long">{pillText}</span><span className="label-short" style={{ display: phone ? 'inline' : 'none' }}>{state.privacy.paused ? 'Paused' : 'Watching'}</span></span>
          <button className="btn" onClick={() => api.pause(!state.privacy.paused)}>{state.privacy.paused ? 'Resume' : 'Pause'}</button>
          <button className="btn icon" aria-label="Settings" onClick={() => setSettings((s) => !s)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A9AB8" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></svg>
          </button>
        </div>
      </header>

      <aside className="rail" data-hidden={phone && tab !== 'chat'} onPointerDown={poke} onKeyDown={poke}>
        {phone ? <div className={`state-label ${sphere}`}>{STATE_LABEL[sphere]}</div> : null}
        <div className="status-line">{state.statusText}</div>
        <ChatList messages={state.messages} onOpenStage={openStage} />
        <Composer autoFocus={!phone} onActivity={poke} onSend={api.send} disabled={state.conn !== 'online'} onVoiceError={(m) => api.dispatch({ t: 'error', message: m })} />
        <div className="senses">{sensesLine}</div>
      </aside>

      <div style={{ gridArea: phone ? 'main' : 'stage', display: phone && tab !== 'stage' ? 'none' : 'flex', minHeight: 0, minWidth: 0 }}>
        <StageView stage={stage} history={state.stages} pinned={state.pinned} sphere={sphere} amplitude={sphere === 'speaking' ? 0.5 : 0} low={fx === 'low'}
          caption={hud && state.tel?.app ? `Watching with you: ${state.tel.app}` : undefined}
          footer={hud && !phone ? <Readouts tel={state.tel} /> : null} onOpen={api.openStage} onPin={api.pinStage} onClear={api.clearStage} onAction={onAction} />
      </div>

      {!phone && !railOpen ? <button className="dock" onClick={openRail} aria-label="Open chat"><span>Ask VANTA…</span></button> : null}

      {phone && (
        <nav className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'chat'} onClick={() => setTab('chat')}>Chat</button>
          <button role="tab" aria-selected={tab === 'stage'} onClick={() => setTab('stage')}>Stage{unseen ? <span className="badge" aria-label="new" /> : null}</button>
        </nav>)}

      {state.conn === 'offline' && <div className="offline-bar" role="status">Reconnecting… I'll be right back.</div>}
      <SettingsDrawer open={settings} privacy={state.privacy} onSource={api.setSource} onClose={() => setSettings(false)}
        projects={state.projects} guardian={state.guardian} onSaveProject={api.saveProject} onRemoveProject={api.removeProject} onRestore={api.restore} onGuardMode={api.setGuardMode} scans={state.scans} onScan={api.scanFile} onOpenPanels={api.loadPanels}
        sync={state.sync} onUnlock={api.syncUnlock} onSyncNow={api.syncNow} layout={pref} onLayout={setPref} fx={fx} fxAuto={fxAuto} onFx={setFx} />
      <NudgeToast nudge={state.nudge} onAck={api.ackNudge} />
      <ApprovalModal approval={state.approval} onAnswer={api.answerApproval} />
    </div>)
}
