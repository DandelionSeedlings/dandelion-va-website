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
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resellers', href: '#resellers' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#0a1628]/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-icon.png?v=2"
              alt="Dandelion Creations"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <p
                className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-[#0a1628]' : 'text-white'
                }`}
              >
                Dandelion
              </p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
                Creations
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm tracking-wide hover:text-[#D4AF37] transition-colors duration-300 relative group ${
                  scrolled ? 'text-[#0a1628]' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="https://dandelioncreations.co.za/get-connectability"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium text-sm tracking-wide hover:text-emerald-400 transition-colors duration-300 relative group ${
                scrolled ? 'text-emerald-600' : 'text-emerald-400'
              }`}
            >
              <span className="flex items-center gap-1">
                ✦ Free CRM
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#0a1628] px-6 py-2.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-[#c4a030] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 flex items-center gap-2"
            >
              <FiShoppingCart size={16} />
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? 'text-[#0a1628] hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-6 space-y-4 border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#0a1628] font-medium hover:text-[#D4AF37] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://dandelioncreations.co.za/get-connectability"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-emerald-600 font-medium hover:text-emerald-700 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-2">
                ✦ Get Connectability Free
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