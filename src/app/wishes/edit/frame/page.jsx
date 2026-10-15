'use client'

// src/app/wishes/edit/frame/page.jsx
//
// The live preview inside the editor. It shows the real invitation template and
// re-draws whenever the editor sends it new content (no envelope, so the couple
// is not made to open it again after every change).

import { useEffect, useState } from 'react'
import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'

export default function PreviewFrame() {
  const [state, setState] = useState(null)

  useEffect(() => {
    // The sideways scrollbar came from decorations poking past the edge.
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.overflowX = 'hidden'
    const onMessage = (e) => {
      if (e.origin !== window.location.origin) return
      if (e.data?.type === 'wishes-scroll') {
        const el = document.getElementById(e.data.id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (e.data?.type !== 'wishes-preview') return
      setState({ theme: getTheme(e.data.theme), content: e.data.content })
    }
    window.addEventListener('message', onMessage)
    window.parent.postMessage({ type: 'wishes-frame-ready' }, window.location.origin)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (!state) {
    return <div style={{ padding: 40, textAlign: 'center', color: '#8B7355', fontFamily: 'sans-serif' }}>Loading preview…</div>
  }
  return <InvitationTemplate theme={state.theme} content={state.content} showPreviewBanner={false} skipIntro />
}
