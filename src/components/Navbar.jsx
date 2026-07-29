'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (!isHome) {
        // On sub-pages, navigate to home page with hash
        window.location.href = '/' + href
        return
      }
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed right-4 left-4 z-50 mx-auto max-w-7xl transition-all duration-500 top-4 sm:top-5"
    >
      <div
        className={`flex items-center justify-between rounded-2xl border px-5 py-3 md:px-8 md:py-3.5 transition-all duration-500 ${
          scrolled
            ? 'border-white/[0.12] bg-[#0a1628]/85 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-[20px]'
            : 'border-white/[0.08] bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-[18px]'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/images/logo-icon.png?v=2"
            alt="Dandelion Creations"
            className="h-7 w-7 md:h-8 md:w-8 object-contain"
          />
          <img
            src="/images/DC-logo-text.png"
            alt="Dandelion Creations OS"
            className="h-5 md:h-6 w-auto object-contain hidden sm:block"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? link.href : '/' + link.href}
              onClick={(e) => isHome && handleClick(e, link.href)}
              className="text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <a
            href={isHome ? '#contact' : '/#contact'}
            onClick={(e) => isHome && handleClick(e, '#contact')}
            className="ml-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8941f] px-5 md:px-6 py-2 md:py-2.5 text-[12px] md:text-[13px] font-bold text-[#0a1628] shadow-[0_0_20px_rgba(212,175,55,0.12)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 rounded-2xl border border-white/[0.12] bg-[#0a1628]/95 backdrop-blur-[20px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={isHome ? link.href : '/' + link.href}
                  onClick={(e) => {
                    if (isHome) handleClick(e, link.href)
                    setIsOpen(false)
                  }}
                  className="block py-2.5 px-3 text-[14px] text-white/80 font-medium hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={isHome ? '#contact' : '/#contact'}
                onClick={(e) => {
                  if (isHome) handleClick(e, '#contact')
                  setIsOpen(false)
                }}
                className="mt-3 block text-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b8941f] px-6 py-3 text-sm font-bold text-[#0a1628]"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}