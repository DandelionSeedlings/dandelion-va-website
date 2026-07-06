'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight, FiShoppingCart, FiCode, FiZap, FiMessageCircle } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function Pricing() {
  const step1Product = {
    name: 'Connectability',
    ability: 'CRM Mini',
    price: 'FREE',
    description: 'Start with a free client management system. Track leads, manage contacts, and build your pipeline — no credit card required.',
    features: ['Contact management', 'Lead tracking', 'Basic pipeline', 'Email integration', 'Lifetime free updates'],
    href: 'https://dandelioncreations.co.za/get-connectability'
  };

  const step2Products = [
    { name: 'ReceiptSnap', ability: 'Receipt Tracker', price: 'R299', popular: false },
    { name: 'Visibility', ability: 'Content Planner', price: 'R299', popular: false },
    { name: 'Scalability', ability: 'CRM Pro', price: 'R499', popular: true },
    { name: 'Payability', ability: 'Invoice Sorter', price: 'R499', popular: false },
    { name: 'Availability', ability: 'Stock & Supplier', price: 'R499', popular: false },
    { name: 'Profitability', ability: 'Income & Expenses', price: 'R799', popular: false },
    { name: 'Adaptability', ability: 'White-Label Setup', price: 'R999', popular: false },
  ];

  const step3Services = [
    { name: 'Marketability', description: 'SMM & Web Framework', price: 'Custom Quote' },
    { name: 'Promotability', description: 'Corporate Swag Tracker', price: 'Custom Quote' },
    { name: 'Custom Scripts', description: 'Google Apps Script automation', price: 'From R1,500' },
    { name: 'VA Retainers', description: 'Ongoing operational support', price: 'From R5,000/mo' },
  ];

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

        {/* NO SUBSCRIPTIONS BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold via-gold-light to-gold rounded-2xl p-6 md:p-8 mb-16 text-center shadow-2xl border-2 border-gold/50"
        >
          <p className="text-navy-900 text-xl md:text-2xl font-bold tracking-wide">
            100% NO SUBSCRIPTIONS. ONE PAYMENT. LIFETIME UPDATES.
          </p>
          <p className="text-navy-800 text-sm mt-2 font-medium">
            Every AbilitySuite™ product is a one-time purchase. You own it forever. No monthly fees. No hidden costs.
          </p>
        </motion.div>

        {/* 3-STEP JOURNEY */}
        <div className="space-y-16 mb-20">
          {/* STEP 1: FREE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-cream">Start Free</h3>
                <p className="text-cream/60 text-sm">No risk. No credit card. Just value.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/50 to-navy-800 rounded-2xl p-8 border-2 border-emerald-500/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    <FiStar size={14} /> FREE FOREVER
                  </div>
                  <h4 className="text-3xl font-bold text-cream mb-2">{step1Product.name}</h4>
                  <p className="text-emerald-400 font-medium mb-4">{step1Product.ability}</p>
                  <p className="text-cream/70 mb-6 leading-relaxed">{step1Product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {step1Product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-cream/80">
                        <FiCheck className="text-emerald-400" size={16} /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={step1Product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300"
                  >
                    Get Connectability Free <FiArrowRight />
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden">
                    <img
                      src="/images/connectability-dashboard.png"
                      alt="Connectability CRM Dashboard"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="text-cream/40 text-xs mt-3 text-center">Free CRM Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STEP 2: SOLVE PROBLEMS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy-900 font-bold text-xl shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-cream">Solve Your Problems</h3>
                <p className="text-cream/60 text-sm">R299 – R999. One payment. Yours forever.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {step2Products.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`bg-navy-800/80 rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
                    product.popular ? 'border-gold/50 shadow-lg shadow-gold/10' : 'border-gold/10 hover:border-gold/30'
                  }`}
                >
                  {product.popular && (
                    <span className="inline-block bg-gold/20 text-gold text-xs font-bold px-2 py-1 rounded-full mb-2">
                      POPULAR
                    </span>
                  )}
                  <p className="text-xs text-cream/50 mb-1">{product.ability}</p>
                  <p className="text-sm font-bold text-cream mb-2">{product.name}</p>
                  <p className={`text-xl font-bold ${product.price === 'FREE' ? 'text-emerald-400' : 'text-gold'}`}>
                    {product.price}
                  </p>
                  <a
                    href={ORDER_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block text-center text-xs font-bold bg-gold/10 text-gold py-2 rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    Order Now
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* STEP 3: EXPERT HELP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-cream">Need Expert Help?</h3>
                <p className="text-cream/60 text-sm">Custom quotes for complex needs.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {step3Services.map((service, i) => (
                <div key={i} className="bg-navy-800/50 rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-cream">{service.name}</h4>
                    <span className="text-gold font-bold text-sm">{service.price}</span>
                  </div>
                  <p className="text-cream/60 text-sm mb-4">{service.description}</p>
                  <a
                    href="https://wa.me/27728393087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Request Quote <FiArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

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
              Custom Google Sheets Automation
            </h3>
            <p className="text-cream/60">
              One-off projects built to your exact specifications. No subscriptions. No monthly fees.
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