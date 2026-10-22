/** Raw provider/server errors are scary and unhelpful. Say what happened and what to do, calmly. */
export function calmError(raw: string): { text: string; detail?: string } {
  const m = (raw || '').toLowerCase()
  const detail = raw && raw.length > 3 ? raw.slice(0, 240) : undefined
  if (/429|rate.?limit|tokens per minute|too many requests|413|quota/.test(m))
    return { text: "My free providers are asking me to slow down. Give me a minute and try again.", detail }
  if (/401|403|unauthor|invalid api key|authentication|forbidden/.test(m))
    return { text: "One of my providers refused the connection. The API key in your .env may be wrong or expired.", detail }
  if (/timeout|timed out|network|connection|unreachable|dns|offline/.test(m))
    return { text: "I couldn't reach the network just now. I'll be fine once it's back.", detail }
  if (/disabled|not approve|unsafe/.test(m))
    return { text: "I didn't do that, because it wasn't allowed or wasn't approved.", detail }
  return { text: "That didn't work, and I'm not sure why yet. Try again, or ask me to look into it.", detail }
}
