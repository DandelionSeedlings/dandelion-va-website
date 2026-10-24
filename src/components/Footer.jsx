'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiShoppingCart } from 'react-icons/fi'

const ORDER_FORM_URL = '/order'

export default function Footer() {
  const [partnerCode, setPartnerCode] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const codeFromUrl = urlParams.get('partner')
    if (codeFromUrl) {
      setPartnerCode(codeFromUrl.toUpperCase())
      localStorage.setItem('dc_partner_code', codeFromUrl.toUpperCase())
      return
    }
    const codeFromStorage = localStorage.getItem('dc_partner_code')
    if (codeFromStorage) {
      setPartnerCode(codeFromStorage)
    }
  }, [])

  const buildOrderUrl = (productName, subtitle) => {
    const params = new URLSearchParams()
    if (productName && subtitle) {
      params.set('product', productName + ' / ' + subtitle)
    }
    if (partnerCode) {
      params.set('partner', partnerCode)
    }
    const query = params.toString()
    return query ? `${ORDER_FORM_URL}?${query}` : ORDER_FORM_URL
  }

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-2.5" aria-label="Dandelion Creations home">
              <img src="/images/logo-icon.png" alt="" width="32" height="32" className="h-8 w-8 object-contain" />
              <img src="/images/DC-logo-text.png" alt="Dandelion Creations OS" width="1584" height="396" className="h-6 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Operations engineering for small businesses in South Africa. Systems built inside your own Google Workspace, paid for once.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/DandelionCreations01" aria-label="Dandelion Creations on Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all duration-300">
                <FiFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/dandelion.creat/" aria-label="Dandelion Creations on Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all duration-300">
                <FiInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/simone-theron-va" aria-label="Simone Theron on LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-all duration-300">
                <FiLinkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link href="/#products" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Products</Link></li>
              <li><Link href="/#process" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">How It Works</Link></li>
              <li><Link href="/#portfolio" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Our Work</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Blog</Link></li>
              <li><Link href="/embeddedsupport" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Embedded Support</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Partner Program</Link></li>
              <li><Link href="/book" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Book a Systems Audit</Link></li>
              <li>
                <a href={buildOrderUrl()} className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2">
                  <FiShoppingCart size={14} /> Order a Module
                </a>
              </li>
            </ul>
          </div>

          {/* AbilitySuite Modules */}
          <div>
            <h4 className="text-lg text-white mb-6 font-bold">AbilitySuite™ Modules</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/connectability" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2">
                  ConnectAbility <span className="text-emerald-400 text-xs font-bold">FREE</span>
                </Link>
              </li>
              <li><Link href="/receiptsnap" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">ReceiptSnap · R299</Link></li>
              <li><Link href="/bookability" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">BookAbility · R499</Link></li>
              <li><Link href="/budgetability" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">BudgetAbility · R499</Link></li>
              <li>
                <a href={buildOrderUrl('Visibility', 'Content Planner')} className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-1">
                  Content Planner · R299
                </a>
              </li>
              <li>
                <a href={buildOrderUrl('Scalability', 'CRM Pro')} className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-1">
                  CRM Pro · R499
                </a>
              </li>
              <li><Link href="/payability" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">PayAbility · R499</Link></li>
              <li>
                <a href={buildOrderUrl('Availability', 'Stock & Supplier')} className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-1">
                  Stock & Supplier · R499
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg text-white mb-6 font-bold">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMail className="text-gold mt-1 flex-shrink-0" size={18} />
                <a href="mailto:dandelioncreat@outlook.com" className="text-gray-400 hover:text-gold transition-colors text-sm">dandelioncreat@outlook.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-gold mt-1 flex-shrink-0" size={18} />
                <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors text-sm">+27 72 839 3087</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Pretoria, South Africa</span>
              </li>
            </ul>

            <a href={buildOrderUrl()} className="mt-6 inline-flex items-center gap-2 bg-gold text-navy-900 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-light transition-all duration-300">
              <FiShoppingCart size={16} aria-hidden="true" /> Order a Module
            </a>

            {partnerCode && (
              <p className="text-emerald-400 text-xs mt-2 font-medium">Partner code {partnerCode} active</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Dandelion Creations OS. All rights reserved.</p>
            <p className="text-gray-600 text-xs">AbilitySuite™ is our range of ready-made business systems.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}