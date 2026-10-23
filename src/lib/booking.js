import { BOOKING_URL } from './site'

// Talks to the Bookability web app. Plain text body keeps this a "simple" request, so no CORS preflight.
export async function bookingCall(action, payload, { timeoutMs = 25000 } = {}) {
  const ctl = new AbortController()
  const timer = setTimeout(() => ctl.abort(), timeoutMs)
  try {
    const res = await fetch(BOOKING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, payload }),
      signal: ctl.signal,
    })
    const json = await res.json()
    if (json && json.ok) return json.data
    const err = new Error((json && json.error) || 'Something went wrong. Please try again.')
    err.code = (json && json.code) || 'SERVER'
    throw err
  } catch (e) {
    if (e.code) throw e
    const err = new Error('We could not reach the booking system. Please check your connection and try again.')
    err.code = 'NETWORK'
    throw err
  } finally {
    clearTimeout(timer)
  }
}

export const newRequestId = () =>
  (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(36).slice(2))
    .replace(/[^A-Za-z0-9_-]/g, '')
    .slice(0, 40)
