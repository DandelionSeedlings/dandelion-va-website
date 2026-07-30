'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCode, FiZap, FiSmartphone, FiFileText, FiTrendingUp, FiShield, FiArrowRight, FiCheck, FiMessageCircle } from 'react-icons/fi'
import Navbar from '../../components/Navbar'

const services = [
  {
    title: 'Operations Engineering',
    desc: 'Custom automation solutions built specifically for your workflow. This is what we do best.',
    icon: FiCode,
    items: ['Spreadsheet Automation', 'Custom Form Solutions', 'Email Automation', 'Data Processing Scripts', 'PDF Generation', 'API Integrations']
  },
  {
    title: 'Embedded Operations',
    desc: 'End-to-end administrative support that keeps your business running smoothly.',
    icon: FiZap,
    items: ['Email & Calendar Management', 'Data Entry & Research', 'Travel & Event Coordination', 'Client Communication']
  },
  {
    title: 'Social Media',
    desc: 'Strategic social media management that grows your online presence.',
    icon: FiSmartphone,
    items: ['Content Creation', 'Schedule Management', 'Analytics Reporting', 'Community Engagement']
  },
  {
    title: 'Admin Support',
    desc: 'Professional administrative services tailored to your needs.',
    icon: FiFileText,
    items: ['Document Preparation', 'Meeting Coordination', 'CRM Management', 'Invoice Processing']
  },
  {
    title: 'Digital Marketing',
    desc: 'Results-driven marketing strategies that convert visitors to clients.',
    icon: FiTrendingUp,
    items: ['SEO Optimization', 'Email Campaigns', 'Lead Generation', 'Analytics Setup']
  },
  {
    title: 'Brand & Rebranding',
    desc: 'Visual identity refreshes and full rebrands that make your business look as professional as it actually is.',
    icon: FiShield,
    items: ['Logo & Visual Identity', 'Brand Guidelines', 'Marketing Collateral', 'Social Media Rebrand', 'Website Refresh Direction']
  }
]

const tiers = [
  {
    name: 'Core',
    price: 'R5,500',
    hours: 'Up to 20 hours/month',
    desc: 'Ideal for ongoing social media + light admin.',
    features: ['Social media (1 platform)', 'Content creation (4 posts/week)', 'Email & calendar management', 'Monthly analytics report']
  },
  {
    name: 'Growth',
    price: 'R9,500',
    hours: 'Up to 40 hours/month',
    desc: 'For businesses scaling their presence.',
    features: ['Social media (2 platforms)', 'Content creation (8 posts/week)', 'CRM & client communication', 'Ad hoc design & copy support', 'Bi-weekly strategy check-ins']
  },
  {
    name: 'Strategic',
    price: 'R16,000',
    hours: 'Up to 80 hours/month',
    desc: 'Embedded partner in your operations.',
    features: ['Full social media (4 platforms)', 'Daily community engagement', 'Full admin & operations support', 'Campaign planning & execution', 'Weekly strategy calls', 'Priority WhatsApp support']
  }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function EmbeddedSupportPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <div className="h-20" />

      {/* Hero — Personal, Warm */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden">
        {/* Deep ambient background that matches the photo's navy tone */}
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0f1f35] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0d1a2d] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div>
              <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">
                Embedded Operations Support
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Some Businesses Need a System.<br />
                <span className="text-[#D4AF37]">Others Need a Person.</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hi, I'm Simone. I built Dandelion Creations because I kept watching capable business owners drown in admin they never signed up for. Sometimes the fix is automation. Sometimes it's having someone in your corner who actually learns your business and keeps the wheels turning.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                This is the person side. Real support, real communication, no monthly software subscription — just someone who shows up, learns your chaos, and quietly sorts it out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/27728393087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold transition-all"
                >
                  <FiMessageCircle /> Let's Talk on WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold transition-all"
                >
                  See What I Offer <FiArrowRight />
                </a>
              </div>
            </div>

            {/* Hero Photo — Casual navy-background image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glow that bleeds from the image into the page background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#0f1f35] via-[#0a1628] to-[#0a1628] rounded-[2.5rem] blur-2xl opacity-80" />
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-[#D4AF37]/5 rounded-[2rem]" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/40">
                <img
                  src="/images/simone-hero.png"
                  alt="Simone Theron, Founder of Dandelion Creations OS"
                  className="w-full h-full object-cover"
                />
                {/* Bottom fade so the photo melts into the section below */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Story — With Photo */}
      <section className="py-20 px-4 bg-[#F5F1E8] relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0a1628 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4AF37]/10 shadow-xl relative group">
              <img
                src="/images/simone-story.png"
                alt="Simone Theron"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft warm overlay that ties into the cream background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F5F1E8]/20 via-transparent to-[#D4AF37]/10 mix-blend-multiply" />
            </div>
            <div className="text-left">
              <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Why I Do This</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                The Engineer Behind the Support
              </h2>
              <p className="text-[#0a1628]/70 text-lg leading-relaxed mb-4">
                I've worn a lot of hats over the years — corporate banking, classrooms, coffee shops, admin offices, and now building systems for business owners. The pattern was always the same: the businesses that thrived weren't the ones working hardest; they were the ones with systems that actually matched how real people work.
              </p>
              <p className="text-[#0a1628]/70 text-lg leading-relaxed">
                I know what it feels like to have evenings swallowed by tasks that should have taken minutes. I also know the exact relief when someone finally hands you a process that works — the space, the breath, the quiet win. That's what I build now. And when a system isn't the right fix, I step in and do the work myself. Not just efficiency. Peace of mind. Someone who actually cares whether your Tuesday goes smoothly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workspace / Behind the Scenes */}
      <section className="py-16 px-4 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0f1f35] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="order-2 md:order-1">
              <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">How It Works</p>
              <h2 className="text-3xl font-bold text-white mb-6">Built From Real Experience</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every system I build comes from sitting in the actual day-to-day of running a business. I don't observe from the outside — I learn your workflow, spot the leaks, and fix them where they start.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's a custom Google Apps Script automation or hands-on admin support, the approach is the same: diagnose the root cause, engineer the fix, and make sure it actually works when nobody's watching.
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 relative group">
              <img
                src="/images/workspace.png"
                alt="Dandelion Creations workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">What I Can Help With</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Services That Scale With You</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From automation to day-to-day operations — pick what you need, leave what you don't.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group bg-[#F5F1E8] rounded-2xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-5 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <service.icon className="text-[#D4AF37]" size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Businesses We've Supported */}
      <section className="py-20 px-4 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Track Record</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Businesses We've Supported</h2>
            <p className="text-[#0a1628]/60 max-w-xl mx-auto">
              Real businesses, real results — from wellness studios and beauty salons to engineering firms and retail.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              'Yoga Studios',
              'Personal Fitness',
              'Beauty Salons',
              'Wellness Studios',
              'Supermarkets',
              'Pharmacies',
              'Machine Control & Surveying'
            ].map((business, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-white rounded-xl p-5 text-center border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-[#0a1628] text-sm">{business}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            Your sector not here? <a href="https://wa.me/27728393087" className="text-[#D4AF37] hover:underline">Reach out</a> — most operational pain points look the same across industries.
          </motion.p>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f1f35] rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0d1a2d] rounded-full blur-[120px] opacity-40" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work Together</h2>
            <p className="text-gray-400">No forms. No bots. Just a real conversation.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'We Talk', desc: 'You tell me what is eating your time. I listen properly — no forms, no bots.' },
              { num: '02', title: 'I Propose', desc: 'I suggest what actually fits — automation, support, or both. No upsell. No fluff.' },
              { num: '03', title: 'It Runs', desc: 'You get your time back. I stay close for tweaks, questions, and continuous improvement.' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center relative"
              >
                <span className="text-5xl font-bold text-[#D4AF37]/20">{step.num}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-[#F5F1E8] relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Investment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Retainer-Based Support</h2>
            <p className="text-[#0a1628]/60 max-w-xl mx-auto">Predictable monthly support. No hourly surprises. Cancel anytime with 30 days notice.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 border ${i === 1 ? 'bg-[#0a1628] border-[#D4AF37]/50 ring-2 ring-[#D4AF37]/20 relative overflow-hidden' : 'bg-white border-[#D4AF37]/10'}`}
              >
                {i === 1 && (
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-[#0a1628] text-xs font-bold px-3 py-1 rounded-bl-xl">
                    POPULAR
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-1 ${i === 1 ? 'text-[#D4AF37]' : 'text-[#0a1628]'}`}>{tier.name}</h3>
                <p className={`text-sm mb-4 ${i === 1 ? 'text-gray-400' : 'text-gray-500'}`}>{tier.hours}</p>
                <div className={`text-4xl font-bold mb-2 ${i === 1 ? 'text-white' : 'text-[#0a1628]'}`}>{tier.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
                <p className={`text-sm mb-6 ${i === 1 ? 'text-gray-400' : 'text-gray-500'}`}>{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-3 text-sm ${i === 1 ? 'text-gray-300' : 'text-gray-600'}`}>
                      <FiCheck className="text-[#D4AF37] flex-shrink-0" size={16} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/27728393087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-bold text-sm transition-all ${i === 1 ? 'bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628]' : 'bg-[#0a1628] hover:bg-[#0a1628]/90 text-white'}`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — With Bronze Suit Photo */}
      <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
        {/* Background ambient that matches the bronze suit photo */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-[#0f1f35] rounded-full blur-[140px] translate-x-1/4 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a1205] rounded-full blur-[100px] opacity-30" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Sure What You Need?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                That's completely normal. Most people who reach out just know they're overwhelmed — they don't have a neat list of tasks yet. That's exactly what our first chat is for.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                No pitch. No pressure. Just a real conversation about what's actually slowing you down, and whether I can help.
              </p>
              <a
                href="https://wa.me/27728393087"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c4a030] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <FiMessageCircle /> Send Me a WhatsApp
              </a>
              <p className="text-gray-500 text-sm mt-4">I reply personally. Usually within the hour.</p>
            </div>
            
            {/* Bronze suit photo — dark background blends seamlessly */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0f1f35]/50 via-transparent to-[#0a1628] rounded-[2rem] blur-xl" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/40">
                <img
                  src="/images/simone-casual.png"
                  alt="Simone Theron"
                  className="w-full h-full object-cover"
                />
                {/* Top and bottom fades for seamless section blending */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a1628] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a1628] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#0a1628] py-10 px-4 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Dandelion Creations OS. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-[#D4AF37] hover:underline">Home</Link>
            <Link href="/receiptsnap" className="text-[#D4AF37] hover:underline">ReceiptSnap</Link>
            <Link href="/connectability" className="text-[#D4AF37] hover:underline">ConnectAbility</Link>
            <Link href="/bookability" className="text-[#D4AF37] hover:underline">Bookability</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}