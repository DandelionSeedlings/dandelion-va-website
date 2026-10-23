'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCode, FiBarChart2, FiRepeat, FiUsers, FiArrowRight, FiCheck } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SITE } from '../../lib/site'

const services = [
  {
    title: 'System care',
    desc: 'Your systems keep working as your business changes. Fixes, small changes and updates are part of the retainer.',
    icon: FiCode,
    items: ['Fixes and small changes', 'Sheet and script upkeep', 'New fields, forms and reports', 'Backups and access checks'],
  },
  {
    title: 'Reporting',
    desc: 'The numbers you need, on the day you need them, without anyone rebuilding a spreadsheet by hand.',
    icon: FiBarChart2,
    items: ['Monthly management reports', 'Debtors and cash flow views', 'Stock and supplier summaries', 'VAT and tax-time exports'],
  },
  {
    title: 'Running the process',
    desc: 'We work inside the systems on your behalf, so the routine work gets done on time.',
    icon: FiRepeat,
    items: ['Invoicing and payment follow-ups', 'Bookings and client records', 'Receipt capture and filing', 'Data entry into your own sheets'],
  },
  {
    title: 'Training and handover',
    desc: 'Your people learn the system properly, and you get written guides that survive staff changes.',
    icon: FiUsers,
    items: ['Short walkthrough sessions', 'Written how-to guides', 'Onboarding for new staff', 'Process documentation'],
  },
]

const tiers = [
  {
    name: 'Core',
    price: 'R5,500',
    hours: 'Up to 20 hours a month',
    desc: 'For one or two systems that need regular attention.',
    features: ['System care and fixes', 'Monthly report', 'Email support, 24 hour reply'],
  },
  {
    name: 'Growth',
    price: 'R9,500',
    hours: 'Up to 40 hours a month',
    desc: 'For a business that is adding to its systems as it grows.',
    features: ['Everything in Core', 'Running routine processes for you', 'New reports and changes', 'Fortnightly check-in'],
  },
  {
    name: 'Strategic',
    price: 'R16,000',
    hours: 'Up to 80 hours a month',
    desc: 'Operations support built into how you run the business.',
    features: ['Everything in Growth', 'Training for your team', 'Process design and documentation', 'Weekly call', 'Priority WhatsApp support'],
  },
]

const sectors = [
  'Yoga studios', 'Personal fitness', 'Beauty salons', 'Wellness studios',
  'Supermarkets', 'Pharmacies', 'Machine control and surveying',
]

const rise = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

export default function EmbeddedSupportPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-24 pt-36">
        <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <motion.div {...rise}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Embedded operations support</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Once the system is built, <span className="text-gold">someone has to look after it.</span>
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              I build systems that run inside your Google Workspace. Many clients also want me close by after
              the build, to keep things working, run the routine work and answer questions when they come up.
            </p>
            <p className="mb-8 leading-relaxed text-gray-400">
              That is what this is. A monthly retainer, a fixed price and one person who already knows how your business runs.
            </p>
            <Link
              href={SITE.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-navy-900 transition hover:bg-gold-light"
            >
              {SITE.cta.label} <FiArrowRight aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div {...rise} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <img src="/images/simone-hero.png" alt="Simone Theron, founder of Dandelion Creations" width="800" height="1000" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative bg-cream px-4 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <motion.div {...rise} className="aspect-[3/4] overflow-hidden rounded-2xl border border-gold/20 shadow-xl">
            <img src="/images/simone-story.png" alt="Simone Theron" loading="lazy" width="800" height="1066" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div {...rise}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Why I do this</p>
            <h2 className="mb-6 text-3xl font-bold text-navy-900 md:text-4xl">Built from the inside of real businesses</h2>
            <p className="mb-4 text-lg leading-relaxed text-navy-900/70">
              I have worked in corporate banking, in classrooms, in coffee shops and in admin offices. The pattern was always the same. The businesses that did well were not the ones working hardest. They were the ones whose systems matched how their people actually work.
            </p>
            <p className="text-lg leading-relaxed text-navy-900/70">
              I know what it is like to lose an evening to a task that should take minutes. So I build systems that remove that work, and when a business needs a hand running them, I step in and do it.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...rise} className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">What is included</p>
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">Support that fits around your systems</h2>
            <p className="mx-auto max-w-xl text-gray-500">Pick what you need and leave what you do not.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <motion.div key={service.title} {...rise} className="rounded-2xl border border-gold/15 bg-cream p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <service.icon className="text-gold" size={22} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy-900">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div {...rise}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Who we have worked with</p>
            <h2 className="mb-10 text-3xl font-bold text-navy-900 md:text-4xl">Businesses we have supported</h2>
          </motion.div>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {sectors.map((sector) => (
              <li key={sector} className="rounded-xl border border-gold/15 bg-white p-5 text-sm font-semibold text-navy-900">{sector}</li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-gray-500">
            Your sector is not here? Most operational problems look the same from one industry to the next.
          </p>
        </div>
      </section>

      <section className="bg-navy-900 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...rise} className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Investment</p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Monthly retainers</h2>
            <p className="mx-auto max-w-xl text-gray-400">A fixed price every month. Cancel with 30 days notice.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                {...rise}
                className={`rounded-2xl border p-8 ${i === 1 ? 'border-gold/50 bg-navy-800 ring-2 ring-gold/20' : 'border-white/10 bg-navy-800/50'}`}
              >
                <h3 className="mb-1 text-lg font-bold text-gold">{tier.name}</h3>
                <p className="mb-4 text-sm text-gray-400">{tier.hours}</p>
                <p className="mb-2 text-4xl font-bold text-white">{tier.price}<span className="text-sm font-normal text-gray-400"> a month</span></p>
                <p className="mb-6 text-sm text-gray-400">{tier.desc}</p>
                <ul className="mb-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <FiCheck className="flex-shrink-0 text-gold" size={16} aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={SITE.cta.href}
                  className={`block rounded-xl py-3 text-center text-sm font-semibold transition ${i === 1 ? 'bg-gold text-navy-900 hover:bg-gold-light' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {SITE.cta.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
