import type { ChatMessage } from '../types'
import { ChatList, Composer } from './Chat'

/** Chat mode keeps the full conversation. The orb shrinks to the corner while you read and write. (Fuller chat features come next.) */
export function ChatMode({ messages, onOpenStage, onSend, disabled, onVoiceError, status, children }: {
  messages: ChatMessage[]; onOpenStage: (id: string) => void; onSend: (t: string) => void; disabled: boolean; onVoiceError: (m: string) => void; status: string; children?: React.ReactNode
}) {
  return (
    <div className="chatmode" data-split={!!children}>
      <div className="chatcol">
        <div className="status-line">{status}</div>
        <ChatList messages={messages} onOpenStage={onOpenStage} />
        <Composer autoFocus onSend={onSend} disabled={disabled} onVoiceError={onVoiceError} />
      </div>
      {children ? <div className="chatside">{children}</div> : null}
    </div>)
}
