'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
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
    { name: 'Contact', href: '#contact' },
    { name: 'Partner Program', href: '#resellers' },
  ]

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 rounded-sm border transition-all duration-500 ${
        scrolled
          ? 'border-white/35 bg-[#0a1628]/95 py-3 shadow-2xl shadow-navy-900/12 backdrop-blur-2xl'
          : 'border-white/20 bg-[#0a1628] py-3 shadow-2xl shadow-black/20'
      }`}
    >
      <div className="px-4 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-icon.png?v=2"
              alt="Dandelion Creations"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-serif text-xl tracking-wide text-white transition-colors duration-300">
                Dandelion
              </p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
                Creations
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 lg:gap-7 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm tracking-wide text-white/90 hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="https://dandelioncreations.co.za/get-connectability"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors duration-300 relative group"
            >
              <span className="flex items-center gap-1">
                ✦ Start Free
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#0a1628] px-5 py-2.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-[#c4a030] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 flex items-center gap-2"
            >
              <FiShoppingCart size={16} />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-sm bg-[#0a1628] shadow-xl p-6 space-y-4 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://dandelioncreations.co.za/get-connectability"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-emerald-400 font-medium hover:text-emerald-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-2">
                ✦ Start Free
              </span>
            </a>

            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#D4AF37] text-[#0a1628] text-center px-6 py-3 rounded-sm font-semibold hover:bg-[#c4a030] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center justify-center gap-2">
                <FiShoppingCart size={16} /> Order Now
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}