export const metadata = {
  title: 'Dandelion Wishes - Hand-Designed Digital Invitations',
  description: 'Beautiful digital wedding invitations with built-in RSVP, maps, music, and more.',
}

export default function WishesLayout({ children }) {
  return (
    <div className="wishes-layout-container">
      {children}
    </div>
  )
}