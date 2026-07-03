'use client'

import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiShoppingCart } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo-icon-dark.png"
                alt="Dandelion Creations DC Monogram"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-12 h-12 rounded-full bg-[#D4AF37] items-center justify-center">
                <span className="text-[#0a1628] font-serif font-bold text-lg">DC</span>
              </div>
              <div>
                <p className="font-serif text-lg tracking-wide text-white">Dandelion</p>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
                  Creations
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium Virtual Assistant & Technical Automation services for businesses ready to scale. 
              BCEA-exempt independent contractor.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/DandelionCreations01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/dandelion.creat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/simone-theron-va"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Pricing', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ORDER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <FiShoppingCart size={14} /> Order Products
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">AbilitySuite™ Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'CRM Mini (FREE)', href: '#templates' },
                { name: 'ReceiptSnap — R299', href: ORDER_FORM_URL },
                { name: 'Content Planner — R299', href: ORDER_FORM_URL },
                { name: 'CRM Pro — R499', href: ORDER_FORM_URL },
                { name: 'Invoice Sorter — R499', href: ORDER_FORM_URL },
                { name: 'Stock & Supplier — R499', href: ORDER_FORM_URL },
              ].map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target={product.href.startsWith('http') ? '_blank' : undefined}
                    rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMail className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <a
                  href="mailto:dandelioncreat@outlook.com"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  dandelioncreat@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <a
                  href="https://wa.me/27728393087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  +27 72 839 3087
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Pretoria, South Africa</span>
              </li>
            </ul>

            {/* Order CTA */}
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#D4AF37] text-[#0a1628] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#c4a030] transition-all duration-300"
            >
              <FiShoppingCart size={16} /> Order Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Dandelion Creations VA. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              AbilitySuite™ — 12 Business Automation Tools. Crafted with precision for businesses that value excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}