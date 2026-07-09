'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight, FiZap, FiPercent, FiTrendingUp, FiShield } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'We audit your current operational gaps and map them to the right systems. No guesswork. No overselling.',
    icon: FiZap,
  },
  {
    number: '02',
    title: 'Deploy',
    description: 'Your systems are configured, branded, and handed over ready to run. You own the infrastructure from day one.',
    icon: FiPercent,
  },
  {
    number: '03',
    title: 'Direct',
    description: 'You run your operation. We stay available for refinements, new modules, and strategic adjustments as you scale.',
    icon: FiTrendingUp,
  },
]

const retainerTiers = [
  {
    name: 'Essential',
    hours: '10 hours/month',
    price: 'R5,000',
    description: 'For businesses that need reliable operational support without the overhead of a full-time hire.',
    features: [
      '10 hours embedded operations support',
      'Email & WhatsApp communication',
      'Weekly check-in calls',
      'Priority task handling',
      'System maintenance included',
    ],
    cta: 'Start Essential',
    popular: false,
  },
  {
    name: 'Growth',
    hours: '20 hours/month',
    price: 'R9,500',
    description: 'For growing businesses that need strategic operational partnership, not just task execution.',
    features: [
      '20 hours embedded operations support',
      'Dedicated operations engineer',
      'Bi-weekly strategy sessions',
      'Process documentation & refinement',
      'System optimisation & upgrades',
      'Same-day response guarantee',
    ],
    cta: 'Start Growth',
    popular: true,
  },
  {
    name: 'Scale',
    hours: '40 hours/month',
    price: 'R18,000',
    description: 'For established businesses ready to fully outsource operational leadership and system architecture.',
    features: [
      '40 hours embedded operations support',
      'Senior operations engineer assigned',
      'Weekly strategy & review calls',
      'Full system architecture oversight',
      'Custom module development',
      '24-hour response guarantee',
      'Quarterly business reviews',
    ],
    cta: 'Start Scale',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-cream">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Own Your Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">
            Systems First. Subscriptions Never.
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Every Ability module is a one-time purchase. You own it. It runs in your Google Workspace. No recurring fees, no lock-in, no surprise price hikes.
          </p>
        </motion.div>

        {/* 3-Step Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gold/10"
              >
                <div className="absolute -top-4 left-8 bg-gold text-navy-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="mt-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Embedded Operations Support */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-navy-900 mb-2">
              Embedded Operations Support
            </h3>
            <p className="text-navy-600">
              For businesses that need an operations engineer on retainer, not just a system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {retainerTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  tier.popular ? 'border-gold scale-105 shadow-2xl' : 'border-gold/10'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="bg-gold text-navy-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-bold text-navy-900 mb-1">{tier.name}</h4>
                <p className="text-sm text-gold font-semibold mb-2">{tier.hours}</p>
                <div className="text-4xl font-bold text-navy-900 mb-2">{tier.price}</div>
                <p className="text-sm text-navy-600 mb-6 leading-relaxed">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-navy-700">
                      <FiCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={ORDER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-navy-900 text-gold hover:bg-navy-800'
                      : 'bg-gold/10 text-navy-900 border border-gold/30 hover:bg-gold/20'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {tier.cta}
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-cream mb-4">
              The Real Comparison
            </h3>
            <p className="text-cream/70 mb-6 leading-relaxed">
              A HubSpot subscription starts at R1,200/month and scales to R12,000+/month. 
              That is R14,400 to R144,000 over a year. And you still do not own anything.
            </p>
            <p className="text-cream/70 mb-8 leading-relaxed">
              Our most comprehensive module costs R499 once. Your entire operational infrastructure 
              can be built for less than two months of mid-tier SaaS. And it is yours forever.
            </p>
            <div className="flex items-center justify-center gap-2 text-gold font-bold">
              <FiShield className="w-5 h-5" />
              <span>Own your systems. Own your data. Own your future.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}