// src/app/wishes/memorybloom/layout.jsx
//
// page.jsx here is 'use client' (it holds form/gallery state), and
// Next.js won't let a client component export `metadata` — so this
// small server-component layout carries MemoryBloom's own title,
// description and Open Graph tags instead of inheriting the generic
// ones from src/app/wishes/layout.jsx.

export const metadata = {
  title: 'MemoryBloom | Live Event Photo Gallery — Dandelion Wishes',
  description:
    'Every photo tells part of the story. MemoryBloom brings them all together — one shared, live photo gallery for weddings, matric farewells, birthdays and more. Unlimited guest uploads, no app required, live for 30 days.',
  openGraph: {
    title: 'MemoryBloom — Your event, live',
    description:
      'Guests scan a QR code, upload photos, and watch them appear on one shared live gallery. Unlimited uploads, no app required, live for 30 days.',
    images: ['/images/wishes/party-album/hero-dancing.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MemoryBloom — Your event, live',
    description:
      'One shared, live photo gallery for your event. Guests scan, upload, and watch it fill up in real time.',
    images: ['/images/wishes/party-album/hero-dancing.png'],
  },
}

export default function MemoryBloomLayout({ children }) {
  return children
}