'use client'

import { useEffect, useRef, useState } from 'react'
import { ORDER_URL } from './site'

export const CODE_RE = /^[A-Z0-9][A-Z0-9-]{2,29}$/
export const STORE_KEY = 'dc_partner_code'

export function readSavedCode() {
  try {
    const q = new URLSearchParams(window.location.search)
    const fromUrl = (q.get('partner') || q.get('ref') || '').trim().toUpperCase()
    if (fromUrl) { try { localStorage.setItem(STORE_KEY, fromUrl) } catch (e) {} return fromUrl }
    return (localStorage.getItem(STORE_KEY) || '').trim().toUpperCase()
  } catch (e) { return '' }
}

// Checks a referral code against the order system, after a short pause in typing.
// status: 'idle' | 'checking' | 'valid' | 'invalid' | 'error'
export function useReferral(code) {
  const [status, setStatus] = useState('idle')
  const [percent, setPercent] = useState(10)
  const seq = useRef(0)

  useEffect(() => {
    const c = String(code || '').trim().toUpperCase()
    if (!c) { setStatus('idle'); return }
    if (!CODE_RE.test(c)) { setStatus('invalid'); return }
    setStatus('checking')
    const my = ++seq.current
    const t = setTimeout(async () => {
      try {
        const r = await fetch(ORDER_URL + '?action=checkcode&code=' + encodeURIComponent(c))
        const d = await r.json()
        if (my !== seq.current) return
        if (d && d.valid) { setPercent(d.percent || 10); setStatus('valid') }
        else setStatus(d && d.busy ? 'error' : 'invalid')
      } catch (e) {
        if (my === seq.current) setStatus('error')
      }
    }, 450)
    return () => clearTimeout(t)
  }, [code])

  return { status, percent, valid: status === 'valid' }
}
