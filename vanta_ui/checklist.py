"""
Post-build production checklist — offered after a UI/website build
succeeds. Checks security basics, offers a starting legal-doc draft
with the review caveat baked directly into the prompt so it can't be
accidentally dropped.
"""

import re

CHECKLIST_SYSTEM = """You are running a production-readiness pass on code that
was just built. Check for:
- HTTPS enforcement (flag any hardcoded http:// URLs or missing redirect)
- Input validation on forms/user input
- No hardcoded secrets or API keys
- Basic security headers if this is server-rendered

Respond with a short, scannable checklist (checkmarks/warnings), not an essay.
End by asking if they want a starting privacy policy and terms of service
draft. Note clearly that any AI-drafted legal document is a starting point
only and needs review before real use — especially on a client's site —
since it can't know the business's actual data practices or jurisdiction
without being told."""

LEGAL_DRAFT_SYSTEM = """Draft a privacy policy and terms of service based on
what's actually implied by the code/context given — don't invent data
collection practices that aren't there. Keep it readable, not overly
legalistic. At the very top, include this exact notice, unchanged:

"⚠ AI-generated starting draft, not legal advice. Have it reviewed before
using it on a live site, especially for a paying client."
"""

_AFFIRM_PATTERN = re.compile(
    r'^\s*(y|ye|yes|yeah|yh|sure|ok|okay|please|do it|go ahead|run it|check it)\b',
    re.IGNORECASE,
)
_LEGAL_KEYWORDS = ('privacy', 'policy', 'terms', 'tos', 'legal')


def wants_checklist(msg: str) -> bool:
    """Does this message accept a pending checklist offer?"""
    return bool(_AFFIRM_PATTERN.match(msg.strip())) or \
           any(k in msg.lower() for k in ('checklist', 'security pass', 'production'))


def wants_legal_draft(msg: str) -> bool:
    return any(k in msg.lower() for k in _LEGAL_KEYWORDS)
