'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight, FiShoppingCart, FiCode, FiZap, FiMessageCircle } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbyUAtVX_pKihPq2iBqb_bq4ctso-v8z52YHHlSX3TflJaz_DlaMsTq8FUSoCw7hmQqPNw/exec'

export default function Pricing() {
  const vaPlans = [
    {
      name: 'Professional',
      price: 'From R5,000',
      period: '/ month',
      hours: '20 hours per month',
      description: 'Ideal for growing businesses needing consistent operational support.',
      features: [
        '20 hours of dedicated VA support',
        'Social Media Management (Digital content scheduling & engagement)',
        'Email & Calendar Management',
        'Standard Administrative Support',
      ],
      popular: false,
      accent: 'border-navy-700',
      buttonClass: 'bg-navy-900 text-gold hover:bg-navy-700',
    },
    {
      name: 'Growth',
      price: 'From R9,000',
      period: '/ month',
      hours: '30 hours per month',
      description: 'For businesses ready to scale operations and automate manual workflows.',
      features: [
        '30 hours of specialized support',
        'Advanced Social Media & Content Strategy',
        'Google Sheets Automation & Script Basics',
        'Standard Systems Integration (Zapier / Make)',
        'Monthly Performance & Strategy Calls',
      ],
      popular: true,
      accent: 'border-gold',
      buttonClass: 'bg-gold text-navy-900 hover:bg-gold-light',
    },
    {
      name: 'Premium',
      price: 'From R16,000',
      period: '/ month',
      hours: '40 hours per month',
      description: 'High-level technical execution and dedicated management for maximum efficiency.',
      features: [
        '40 hours of elite technical support',
        'Custom App Development & Advanced Google Apps Script',
        'Database Management & Systems Architecture',
        'Priority 1-Hour Response (Within Core Business Hours)',
      ],
      popular: false,
      accent: 'border-navy-900',
      buttonClass: 'bg-navy-900 text-gold hover:bg-navy-700',
    },
  ]

  const scriptPackages = [
    {
      name: 'Custom Script',
      price: 'From R1,500',
      description: 'One task, automated. A single Google Apps Script that solves one specific problem.',
      features: ['Single automation', 'Google Sheets/Forms/Calendar', '1 revision included', 'Delivery in 2–3 days'],
      icon: FiCode,
      popular: false,
    },
    {
      name: 'Full Workflow',
      price: 'From R5,000',
      description: 'Your whole system, connected. Multiple scripts working together across your workspace.',
      features: ['Multi-step automation', 'Cross-app integration', '3 revisions included', 'Delivery in 1–2 weeks'],
      icon: FiZap,
      popular: true,
    },
    {
      name: 'Free Audit',
      price: '15 min',
      description: "Let's find what to automate. I'll review your workflow and identify automation opportunities.",
      features: ['Workflow review', 'Automation roadmap', 'Priority recommendations', 'No obligation'],
      icon: FiMessageCircle,
      popular: false,
    },
  ]

  const additionalRates = [
    { service: 'Hourly Overage', rate: 'R450/hour' },
    { service: 'Specialized Projects', rate: 'Custom Quote' },
    { service: 'Google Apps Script', rate: 'From R1,500' },
    { service: 'Custom Automation', rate: 'From R5,000' },
  ]

  const products = [
    { name: 'CRM Mini', price: 'FREE', ability: 'Connectability' },
    { name: 'ReceiptSnap', price: 'R299', ability: 'ReceiptSnap' },
    { name: 'Content Planner', price: 'R299', ability: 'Visibility' },
    { name: 'CRM Pro', price: 'R499', ability: 'Scalability' },
    { name: 'Invoice Sorter', price: 'R499', ability: 'Payability' },
    { name: 'Stock & Supplier', price: 'R499', ability: 'Availability' },
    { name: 'Income & Expenses', price: 'R799', ability: 'Profitability' },
    { name: 'Done-With-You Setup', price: 'R999', ability: 'Adaptability' },
    { name: 'Main Office Dashboard', price: 'R1,499', ability: 'Capability' },
  ]

  return (
    <section id="pricing" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 border border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-gold rounded-full"></div>
      </div>

      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Investment</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Transparent <span className="text-gold">Pricing</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-cream/60 max-w-2xl mx-auto mt-6">
            Value-based packages designed for serious businesses. Every tier scales with your ambition.
          </p>
        </motion.div>

        {/* ── GOOGLE SHEETS AUTOMATION ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-bold mb-4">
              <FiCode className="w-4 h-4" /> Google Apps Script
            </div>
            <h3 className="text-3xl font-serif text-cream mb-2">
              Google Sheets Automation
            </h3>
            <p className="text-cream/60">
              No subscriptions. No monthly fees. Yours forever. Built in 1–2 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {scriptPackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-500 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-gold/20 to-navy-800 border-gold shadow-2xl scale-105'
                    : 'bg-navy-800/50 border-gold/20 hover:border-gold/40'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                    <FiStar className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                )}

                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <pkg.icon className="w-7 h-7 text-gold" />
                </div>

                <h4 className="text-xl font-bold text-cream mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold text-gold mb-3">{pkg.price}</div>
                <p className="text-cream/60 text-sm mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-cream/70">
                      <FiCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.name === 'Free Audit' ? (
                  <a
                    href="https://wa.me/27728393087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl font-bold bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    Book Free Audit
                  </a>
                ) : (
                  <a
                    href="https://wa.me/27728393087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl font-bold bg-gold text-navy-900 hover:bg-[#c4a030] transition-all duration-300"
                  >
                    Get Quote
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/27728393087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
            >
              WhatsApp Me → +27 72 839 3087
            </a>
          </div>
        </motion.div>

        {/* ── VA RETAINERS ── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-cream mb-2">
              Virtual Assistant Retainers
            </h3>
            <p className="text-cream/60">Ongoing support for businesses that need consistent help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vaPlans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.15, duration: 0.6 }} viewport={{ once: true }}
                className={`relative rounded-2xl p-8 border-2 ${plan.accent} ${
                  plan.popular
                    ? 'bg-gradient-to-b from-gold/20 to-navy-800 shadow-2xl scale-105'
                    : 'bg-navy-800/50 shadow-lg hover:shadow-xl'
                } transition-all duration-500 backdrop-blur-sm`}>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                    <FiStar className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-cream mb-2">{plan.name}</h3>
                  <p className="text-gold-light text-sm font-medium">{plan.hours}</p>
                </div>

                <div className="mb-2">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-cream/50 text-lg">{plan.period}</span>
                </div>

                <p className="text-cream/60 text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-cream/80">
                      <FiCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={`block text-center py-4 rounded-xl font-bold transition-all duration-300 ${plan.buttonClass}`}>
                  <span className="flex items-center justify-center gap-2">
                    {plan.popular ? 'Book Discovery Call' : 'Request Proposal'}
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── ABILITYSUITE PRODUCTS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-10 border border-gold/20 mb-16"
        >
          <h3 className="text-2xl font-bold text-cream mb-2 text-center">
            AbilitySuite™ Digital Products
          </h3>
          <p className="text-cream/60 text-center mb-8 max-w-xl mx-auto">
            One-time payment. No subscriptions. Yours forever. Starting from FREE.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {products.map((product, i) => (
              <div key={i} className="bg-navy-800/80 rounded-xl p-4 text-center border border-gold/10 hover:border-gold/30 transition-colors">
                <p className="text-xs text-cream/50 mb-1">{product.ability}</p>
                <p className="text-sm font-medium text-cream mb-1">{product.name}</p>
                <p className={`text-lg font-bold ${product.price === 'FREE' ? 'text-emerald-400' : 'text-gold'}`}>{product.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
            >
              <FiShoppingCart /> Order Products — One Form, Everything
            </a>
          </div>
        </motion.div>

        {/* Additional Rates */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-10 border border-gold/20">
          <h3 className="text-2xl font-bold text-cream mb-8 text-center">
            Additional Services & Custom Rates
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {additionalRates.map((rate, i) => (
              <div key={i} className="bg-navy-800/80 rounded-2xl p-6 text-center border border-gold/10 hover:border-gold/30 transition-colors">
                <p className="text-sm text-cream/50 mb-2">{rate.service}</p>
                <p className="text-2xl font-bold text-gold">{rate.rate}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-cream/60 mb-6">
              All projects scoped individually. No hidden fees — ever.
            </p>
            <a href="#contact" className="btn-gold inline-block">
              Book Discovery Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}