// src/app/wishes/layout.jsx
//
// Standalone layout for Dandelion Wishes. Deliberately does NOT import the
// main site's Navbar/Footer — this route is its own micro-site at
// dandelioncreations.co.za/wishes for now. Moving to its own domain later is
// just a Vercel domain change; nothing in this folder needs to change.

export const metadata = {
  title: 'Dandelion Wishes | Hand-Designed Digital Wedding Invitations',
  description:
    'Hand-designed digital wedding invitations with built-in RSVP, live guest tracking, map, and music. One payment per wedding — no subscriptions.',
}

export default function WishesLayout({ children }) {
  return (
    <div className="bg-[#FAF6F0] text-[#3A3A3A]" style={{ minHeight: '100vh' }}>
      {children}
    </div>
  )
}
