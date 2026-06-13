'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

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
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-max px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image src="/images/logo-icon.png" alt="Dandelion Creations VA" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <p className={`font-script text-2xl transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-navy-900'}`}>
                Dandelion
              </p>
              <p className={`text-xs font-bold tracking-widest transition-colors duration-300 ${scrolled ? 'text-gold-light' : 'text-navy-700'}`}>
                CREATIONS VA
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  scrolled ? 'text-cream hover:text-gold' : 'text-navy-900 hover:text-gold-dark'
                }`}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#contact" className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              scrolled 
                ? 'bg-gold text-navy-900 hover:bg-gold-light' 
                : 'bg-navy-900 text-gold hover:bg-navy-700'
            }`}>
              Book a Call
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg transition-smooth" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} className="text-gold" /> : <FiMenu size={28} className={scrolled ? 'text-cream' : 'text-navy-900'} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-navy-900 rounded-2xl shadow-xl p-6 space-y-4 border border-gold/20">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="block text-cream font-medium hover:text-gold transition-smooth py-3 border-b border-navy-700 last:border-0"
                onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block bg-gold text-navy-900 text-center py-4 rounded-xl font-bold" onClick={() => setIsOpen(false)}>
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
