'use client'

import { useEffect, useRef, useState } from 'react'

const PRODUCTS = [
  {
    name: 'Wedding Invitations',
    tagline: 'Your own beautiful invitation site',
    href: '/wishes/start',
  },
  {
    name: 'The Wedding Bloom',
    tagline: 'The full wedding planner',
    href: '/wishes/wedding-bloom',
  },
  {
    name: 'RSVPBloom',
    tagline: 'Guest list & RSVPs, nothing else',
    href: '/wishes/rsvpbloom',
  },
  {
    name: 'MemoryBloom',
    tagline: 'A shared guest photo album',
    href: '/wishes/memorybloom',
  },
]

export default function WishesNav() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const closeTimer = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }

  function closeSoon() {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150)
  }

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-[0_8px_24px_-12px_rgba(139,115,85,0.25)]' : 'bg-transparent'
      }`}
    >
      <nav className="w-full py-6 px-6 flex items-center justify-between max-w-6xl mx-auto">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/wishes/flower-mark.png"
            alt="Dandelion Wishes"
            className="w-9 h-9 object-contain"
          />
          <span className="text-[#8B7355] text-xl" style={{ fontFamily: "'Alex Brush', cursive" }}>
            Dandelion Wishes
          </span>
        </a>
        <span className="hidden lg:block text-xs italic text-[#A8B89C]">
          carried on a wish, sealed in a vow
        </span>
        <div className="flex items-center gap-3">
          <div
            ref={navRef}
            className="relative hidden sm:block"
            onMouseEnter={openNow}
            onMouseLeave={closeSoon}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              className="flex items-center gap-1 text-sm text-[#8B7355] hover:text-[#7C8B68] transition-colors"
            >
              Products
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productsOpen && (
              <div
                className="absolute right-0 top-full pt-3 w-72"
                onMouseEnter={openNow}
                onMouseLeave={closeSoon}
              >
                <div className="rounded-2xl border border-[#E5DED2] bg-white shadow-[0_20px_40px_-16px_rgba(139,115,85,0.3)] overflow-hidden">
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="block px-5 py-3.5 hover:bg-[#FAF6F0] transition-colors border-b border-[#F0EAE0] last:border-b-0"
                    >
                      <p className="text-sm font-medium text-[#5C4A3A]">{p.name}</p>
                      <p className="text-xs text-[#3A3A3A]/60 mt-0.5">{p.tagline}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/wishes/start"
            className="text-sm px-5 py-2.5 rounded-full border border-[#A8B89C] text-[#7C8B68] hover:bg-[#A8B89C]/10 transition-colors"
          >
            Start your invitation
          </a>
        </div>
      </nav>
    </div>
  )
}