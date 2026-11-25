'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi'

const ORDER_FORM_URL = '/order'

// Grouped by what the business needs, not by price. Prices live on the app pages
// and the order form, so the footer never shows an old price.
const COLUMNS = [
  {
    title: 'Money and admin',
    links: [
      ['OrderAbility', '/orderability'],
      ['PayAbility', '/payability'],
      ['Profitability', '/profitability'],
      ['Mini Cash-Up', '/mini-cash-up'],
      ['ReceiptSnap', '/receiptsnap'],
      ['BudgetAbility', '/budgetability'],
    ],
  },
  {
    title: 'Clients, staff, stock',
    links: [
      ['ConnectAbility', '/connectability', 'Free'],
      ['BookAbility', '/bookability'],
      ['Scalability', '/scalability'],
      ['Visibility', '/visibility'],
      ['TrackAbility', '/trackability'],
      ['Availability', '/availability'],
    ],
  },
  {
    title: 'Help and services',
    links: [
      ['Book a Systems Audit', '/book'],
      ['Embedded Support', '/embeddedsupport'],
      ['Adaptability setup', '/adaptability'],
      ['App Setup Guide', '/setup-guide'],
      ['Use with Claude', '/claude'],
      ['CV Builder', '/cv'],
      ['AceIQ for students', '/aceiq'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['How it works', '/#process'],
      ['Our work', '/#portfolio'],
      ['Blog', '/blog'],
      ['Partner Program', '/partners'],
      ['Contact', '/#contact'],
      ['Refund policy', '/refunds'],
    ],
  },
]

const link = 'text-[14px] text-gray-400 transition-colors duration-200 hover:text-gold'

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
    if (codeFromStorage) setPartnerCode(codeFromStorage)
  }, [])

  const orderUrl = partnerCode ? `${ORDER_FORM_URL}?partner=${encodeURIComponent(partnerCode)}` : ORDER_FORM_URL

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Call to action */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-[24px] font-semibold leading-tight md:text-[28px]">Not sure which app you need?</p>
            <p className="mt-2 max-w-[34em] text-[15px] text-gray-400">Book a free Systems Audit. We look at how your business runs and tell you what would actually help.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/book" className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-[15px] font-semibold text-navy-900 transition hover:brightness-105">
              Book a Systems Audit <FiArrowRight aria-hidden="true" />
            </Link>
            <Link href="/abilitysuite" className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-[15px] font-semibold text-white transition hover:border-gold hover:text-gold">
              See all apps and prices
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-2.5" aria-label="Dandelion Creations home">
              <img src="/images/logo-icon.png" alt="" width="32" height="32" className="h-8 w-8 object-contain" />
              <img src="/images/DC-logo-text.png" alt="Dandelion Creations OS" width="1584" height="396" className="h-6 w-auto object-contain" />
            </Link>
            <p className="max-w-[24em] text-[14px] leading-relaxed text-gray-400">
              Business systems for small businesses in South Africa, built inside your own Google Workspace and paid for once.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-gold" size={16} aria-hidden="true" />
                <a href="mailto:hello.dandelioncreat@outlook.com" className={link}>hello.dandelioncreat@outlook.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-gold" size={16} aria-hidden="true" />
                <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className={link}>+27 72 839 3087 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="shrink-0 text-gold" size={16} aria-hidden="true" />
                <span className="text-[14px] text-gray-400">Pretoria, South Africa</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                ['https://www.facebook.com/DandelionCreations01', 'Dandelion Creations on Facebook', FiFacebook],
                ['https://www.instagram.com/dandelion.creat/', 'Dandelion Creations on Instagram', FiInstagram],
                ['https://www.linkedin.com/in/simone-theron-va', 'Simone Theron on LinkedIn', FiLinkedin],
              ].map(([href, label, Icon]) => (
                <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition hover:border-gold hover:text-gold">
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="mb-4 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] text-gold">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(([name, href, tag]) => (
                  <li key={href}>
                    <Link href={href} className={link}>
                      {name}
                      {tag && <span className="ml-2 rounded bg-emerald-400/15 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-300">{tag}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[13px] text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dandelion Creations OS, Pretoria.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {partnerCode && <span className="font-medium text-emerald-400">Partner code {partnerCode} active</span>}
            <a href={orderUrl} className="text-gray-400 transition hover:text-gold">Order an app</a>
            <Link href="/book" className="text-gray-400 transition hover:text-gold">Free Systems Audit</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
