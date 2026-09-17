// src/app/wishes/layout.jsx
//
// Standalone layout for Dandelion Wishes. Deliberately does NOT import the
// main site's Navbar/Footer — this route is its own micro-site at
// dandelioncreations.co.za/wishes for now. Moving to its own domain later is
// just a Vercel domain change; nothing in this folder needs to change.
//
// Fonts are loaded here via next/font rather than relying on the root
// layout — next/font works in any layout (not just root) and guarantees
// the @font-face is actually injected, which a plain <link> in a nested
// layout can't do (only the root layout can render <head>). This fixes
// couple names silently falling back to the browser's default cursive
// font when Alex Brush hadn't loaded.

import { Cormorant_Garamond, Alex_Brush } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alex-brush',
})

export const metadata = {
  title: 'Dandelion Wishes | Hand-Designed Digital Wedding Invitations',
  description:
    'Hand-designed digital wedding invitations with built-in RSVP, live guest tracking, map, and music. One payment per wedding — no subscriptions.',
}

export default function WishesLayout({ children }) {
  return (
    <div
      className={`${cormorant.variable} ${alexBrush.variable} bg-[#FAF6F0] text-[#3A3A3A]`}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </div>
  )
}