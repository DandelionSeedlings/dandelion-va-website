'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight } from 'react-icons/fi'

export default function Pricing() {
  const plans = [
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
      badgeBg: 'bg-navy-700',
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
      badgeBg: 'bg-gold',
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
      badgeBg: 'bg-navy-900',
      buttonClass: 'bg-navy-900 text-gold hover:bg-navy-700',
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

        {/* 3-Tier Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
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

        {/* Additional Rates - Gold Bar */}
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
