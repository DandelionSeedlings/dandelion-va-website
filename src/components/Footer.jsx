'use client'

import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerLinks = {
    Services: [
      { name: 'Virtual Assistant', href: '#services' },
      { name: 'Google Apps Script', href: '#services' },
      { name: 'Social Media Management', href: '#services' },
      { name: 'Administrative Support', href: '#services' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
    ],
  }
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/DandelionCreations01', icon: FiFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/dandelion.creat/', icon: FiInstagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/simone-theron-va', icon: FiLinkedin },
  ]

  return (
    <footer className="bg-navy-900 text-cream pt-16 pb-8 border-t border-gold/10">
      <div className="container-max px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/images/logo-icon-dark.png" alt="Dandelion Creations VA" fill className="object-contain" />
              </div>
              <div>
                <p className="font-script text-xl text-gold">Dandelion</p>
                <p className="text-xs font-bold text-cream/40">CREATIONS VA</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              Expert Virtual Assistant and Google Apps Script automation for South African businesses. BCEA-exempt independent contractor.
            </p>
            <div className="space-y-3">
              <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cream/50 hover:text-gold transition-smooth text-sm">
                <FiPhone className="w-4 h-4" /><span>+27 72 839 3087</span>
              </a>
              <a href="mailto:dandelioncreat@outlook.com" className="flex items-center gap-3 text-cream/50 hover:text-gold transition-smooth text-sm">
                <FiMail className="w-4 h-4" /><span>dandelioncreat@outlook.com</span>
              </a>
              <div className="flex items-center gap-3 text-cream/50 text-sm">
                <FiMapPin className="w-4 h-4" /><span>Pretoria, South Africa</span>
              </div>
            </div>
          </div>
          <div><h4 className="font-bold text-lg mb-6 text-gold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.name}><a href={link.href} className="text-cream/50 hover:text-gold transition-smooth text-sm">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div><h4 className="font-bold text-lg mb-6 text-gold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}><a href={link.href} className="text-cream/50 hover:text-gold transition-smooth text-sm">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-cream/50 hover:text-gold hover:bg-gold/20 transition-all border border-gold/10">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">© {currentYear} Dandelion Creations VA. All rights reserved.</p>
          <a href="#contact" className="text-gold font-bold hover:text-gold-light transition-smooth text-sm">Book Discovery Call →</a>
        </div>
      </div>
    </footer>
  )
}
