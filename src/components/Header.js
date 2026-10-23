'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { SITE } from '../lib/site'

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: 'easeOut' },
})

export default function Header() {
  return (
    <section id="hero" className="relative w-full min-h-[100svh] overflow-hidden bg-navy-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/header-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-navy-900/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24">
        <div className="grid w-full items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p
              {...fade(0.2)}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Operations engineering studio, {SITE.location.split(',')[0]}
            </motion.p>

            <motion.h1
              {...fade(0.3)}
              className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your business, running on{' '}
              <span className="text-gold">systems you own.</span>
            </motion.h1>

            <motion.p {...fade(0.45)} className="mb-9 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              We build the invoicing, bookings, stock and reporting your business runs on, inside
              your own Google Workspace. You pay once and keep it.
            </motion.p>

            <motion.div {...fade(0.6)}>
              <Link
                href={SITE.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy-900 transition hover:bg-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                {SITE.cta.label}
                <FiArrowRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <motion.div {...fade(0.6)} className="hidden lg:col-span-5 lg:block">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy-800 shadow-2xl shadow-black/40">
              <Image
                src="/images/payability/dashboard.webp"
                alt="Payability dashboard showing invoices, payments and outstanding balances"
                width={1600}
                height={1538}
                sizes="(min-width: 1024px) 40vw, 0px"
                priority
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
