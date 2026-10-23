'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiCalendar } from 'react-icons/fi'
import { SITE, whatsappLink } from '../lib/site'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-navy-900 text-cream relative overflow-hidden scroll-mt-24">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container-max px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let&apos;s find what is <span className="text-gold">slowing you down</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-cream/60 max-w-2xl mx-auto mt-6">
            Whether you need one module or a fully custom system, it starts the same way: we look at what is actually breaking before we propose anything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info + What Happens Next */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gold">Contact Information</h3>

            <div className="space-y-6 mb-12">
              <a href="mailto:dandelioncreat@outlook.com" className="flex items-center gap-4 text-cream/70 hover:text-gold transition-smooth group">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <FiMail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-cream/40">Email</p>
                  <p className="font-medium">dandelioncreat@outlook.com</p>
                </div>
              </a>

              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cream/70 hover:text-gold transition-smooth group">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <FiPhone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-cream/40">Phone / WhatsApp</p>
                  <p className="font-medium">+27 72 839 3087</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
                  <FiMapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-cream/40">Location</p>
                  <p className="font-medium">Pretoria, South Africa</p>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-navy-800/50 rounded-2xl p-8 border border-gold/10">
              <h4 className="text-lg font-bold text-gold mb-6 flex items-center gap-2">
                <FiCalendar className="w-5 h-5" />
                What Happens Next?
              </h4>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-navy-900 font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-cream">Book your audit</p>
                    <p className="text-sm text-cream/50">Choose a time. Tell us what is breaking, not which solution you think you need.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-cream">We reply within 24 hours</p>
                    <p className="text-sm text-cream/50">We confirm the time and read your answers before we speak.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-cream">The audit call</p>
                    <p className="text-sm text-cream/50">A focused 15 to 30 minutes on your process, not a sales call.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-cream">Written proposal</p>
                    <p className="text-sm text-cream/50">The exact system, scoped, priced and timelined.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Two CTA Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/20 to-gold/5 p-8">
              <h3 className="mb-2 text-2xl font-bold text-cream">Book a Systems Audit</h3>
              <p className="mb-6 text-sm text-cream/60">
                A free 15 to 30 minute call about how your business runs today. You leave with a clear
                picture of what to fix first, whether you hire us or not.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-cream/70">
                <li className="flex items-center gap-3"><FiCheckCircle className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />Pick a time that suits you</li>
                <li className="flex items-center gap-3"><FiCheckCircle className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />No obligation</li>
                <li className="flex items-center gap-3"><FiCheckCircle className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />Written proposal within 48 hours if we are a fit</li>
              </ul>
              <Link
                href={SITE.cta.href}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-4 text-lg font-semibold text-navy-900 transition hover:bg-gold-light"
              >
                {SITE.cta.label}
              </Link>
            </div>

            <ContactForm />

            <p className="text-center text-sm text-cream/50">
              Just want a ready-made system? <Link href="/order" className="text-gold underline underline-offset-4 hover:text-gold-light">Order a module</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}