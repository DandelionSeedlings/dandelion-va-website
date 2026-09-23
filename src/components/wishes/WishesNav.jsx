'use client'

import { useEffect, useState } from 'react'
import { BloomIcon } from './WishesDecor'

export default function WishesNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="/wishes/photo-album"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[#7C8B68] hover:text-[#5C6B4E] transition-colors"
          >
            <BloomIcon size={16} />
            MemoryBloom
          </a>
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