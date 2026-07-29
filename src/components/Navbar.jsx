'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Systems', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partner', href: '#resellers' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-xl border transition-all duration-500 ${
        scrolled
          ? 'border-[#D4AF37]/25 bg-[#0a1628]/95 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-2xl'
          : 'border-white/10 bg-[#0a1628]/70 py-3 shadow-lg backdrop-blur-md'
      }`}
    >
      <div className="px-4 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-icon.png?v=2"
              alt="Dandelion Creations"
              className="w-9 h-9 object-contain"
            />
            <div className="hidden sm:block leading-none">
              <p className="text-[15px] tracking-wide text-white font-bold transition-colors duration-300">
                Dandelion Creations
              </p>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#D4AF37] mt-0.5">
                OS
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex gap-5 xl:gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-medium text-[13px] tracking-wide text-white/70 hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            <div className="h-5 w-px bg-white/10" />
            
            <a
              href="https://dandelioncreations.co.za/get-connectability"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[13px] tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors duration-300 relative group flex items-center gap-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Start Free
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-4 py-2 rounded-lg font-bold text-[13px] tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 flex items-center gap-2"
            >
              <FiShoppingCart size={14} />
              Order
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 rounded-xl bg-[#0a1628] shadow-2xl shadow-black/40 p-5 space-y-1 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-white/80 font-medium hover:text-[#D4AF37] transition-colors py-2.5 px-2 rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-white/10 my-2 pt-2">
              <a
                href="https://dandelioncreations.co.za/get-connectability"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors py-2.5 px-2"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                Start Free
              </a>
              <a
                href={ORDER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D4AF37] text-[#0a1628] text-center px-6 py-3 rounded-lg font-bold hover:bg-[#c4a030] transition-colors mt-2"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiShoppingCart size={16} /> Order Now
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}