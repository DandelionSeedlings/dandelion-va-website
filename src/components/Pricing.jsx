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

const products = [
  {
    name: 'Connectability',
    tagline: 'CRM Mini',
    price: 0,
    priceLabel: 'FREE',
    description: 'The relationship-tracking layer every operation needs before it can scale — deployed free, upgraded when you\'re ready.',
    features: [
      'Contact management',
      'Lead tracking',
      'Basic pipeline',
      'Email integration',
      'One-time purchase',
    ],
    cta: 'Get Connectability',
    popular: false,
    accent: 'border-emerald-500/30',
  },
  {
    name: 'Scalability',
    tagline: 'CRM Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'A full pipeline architecture — deal stages, relationship metrics, and growth tracking — engineered for teams that have outgrown a contact list.',
    features: [
      'Full pipeline tracking',
      'Deal management',
      'Team collaboration',
      'Growth analytics',
      'One-time purchase',
    ],
    cta: 'Get Scalability',
    popular: true,
    accent: 'border-blue-500/30',
  },
  {
    name: 'ReceiptSnap',
    tagline: 'Receipt Tracker',
    price: 299,
    priceLabel: 'R299',
    description: 'Snap photos of receipts, automatically extract data with AI, and export clean CSV files for your bookkeepers.',
    features: [
      'AI OCR extraction',
      'Auto-categorization',
      'CSV export',
      'Cloud storage',
      'One-time purchase',
    ],
    cta: 'Get ReceiptSnap',
    popular: false,
    accent: 'border-amber-500/30',
  },
  {
    name: 'Visibility',
    tagline: 'Content Planner',
    price: 299,
    priceLabel: 'R299',
    description: 'Marketing calendars, content scheduling, and social media production workflows.',
    features: [
      'Content calendar',
      'Social scheduling',
      'Post tracking',
      'Campaign planning',
      'One-time purchase',
    ],
    cta: 'Get Visibility',
    popular: false,
    accent: 'border-violet-500/30',
  },
  {
    name: 'Payability',
    tagline: 'Invoice Sorter Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'Automated accounts receivable workflows to track billing cycles and optimize collections.',
    features: [
      'PDF generation',
      'Email sending',
      'Payment tracking',
      'VAT reports',
      'One-time purchase',
    ],
    cta: 'Get Payability',
    popular: false,
    accent: 'border-cyan-500/30',
  },
  {
    name: 'Availability',
    tagline: 'Stock & Supplier Pro',
    price: 499,
    priceLabel: 'R499',
    description: 'Comprehensive inventory control, procurement tracking, and supply chain management.',
    features: [
      'Inventory tracking',
      'Supplier management',
      'Stock alerts',
      'Reorder automation',
      'One-time purchase',
    ],
    cta: 'Get Availability',
    popular: false,
    accent: 'border-sky-500/30',
  },
  {
    name: 'Profitability',
    tagline: 'Income & Expenses',
    price: 799,
    priceLabel: 'R799',
    description: 'Real-time financial visibility, without a bookkeeper re-entering your data by hand.',
    features: [
      'Banking ledger',
      'CSV import',
      'Profit/loss reports',
      'Category tracking',
      'One-time purchase',
    ],
    cta: 'Get Profitability',
    popular: false,
    accent: 'border-rose-500/30',
  },
  {
    name: 'Marketability',
    tagline: 'SMM & Web Framework',
    price: 0,
    priceLabel: 'Request Quote',
    description: 'Tiered digital strategies, social media management intake, and fast GitHub/Vercel website launch workflows.',
    features: [
      'Strategy intake',
      'Social media management',
      'Website launch',
      'Conversion tracking',
    ],
    cta: 'Request Quote',
    popular: false,
    accent: 'border-violet-500/30',
  },
  {
    name: 'Promotability',
    tagline: 'Corporate Swag Tracker',
    price: 0,
    priceLabel: 'Request Quote',
    description: 'Visual proofing, local South African supplier directory linking, and markup calculators for physical branded merchandise.',
    features: [
      'Visual proofing',
      'Supplier directory',
      'Markup calculator',
      'Order tracking',
    ],
    cta: 'Request Quote',
    popular: false,
    accent: 'border-pink-500/30',
  },
  {
    name: 'Trackability',
    tagline: 'Time & Payroll',
    price: 499,
    priceLabel: 'R499',
    description: 'Kiosk QR check-in/out interfaces and automated backend PDF payslip generators for HR managers.',
    features: [
      'QR check-in/out',
      'Payslip generation',
      'Attendance tracking',
      'HR reporting',
    ],
    cta: 'Coming Soon',
    popular: false,
    accent: 'border-gray-400/30',
    comingSoon: true,
  },
  {
    name: 'Mini Cash-Up',
    tagline: 'Daily Cash Reconciliation',
    price: 499,
    priceLabel: 'R499',
    description: 'Lightweight daily cash-up tool for retail and hospitality businesses. Reconcile tills, track floats, and spot discrepancies in minutes.',
    features: [
      'Daily till reconciliation',
      'Float tracking',
      'Discrepancy alerts',
      'End-of-day reports',
    ],
    cta: 'Coming Soon',
    popular: false,
    accent: 'border-teal-400/30',
    comingSoon: true,
  },
  {
    name: 'CV/Portfolio Builder',
    tagline: 'Professional Document Generator',
    price: 0,
    priceLabel: 'R299–R999',
    description: 'Generate polished CVs, portfolios, and proposal documents from your Google Sheets data. Perfect for freelancers and agencies.',
    features: [
      'Template library',
      'Auto-populate from Sheets',
      'PDF export',
      'Branded styling',
    ],
    cta: 'Coming Soon',
    popular: false,
    accent: 'border-indigo-400/30',
    comingSoon: true,
  },
  {
    name: 'Adaptability',
    tagline: 'Done-With-You Setup',
    price: 999,
    priceLabel: 'R999',
    description: 'The core onboarding engine and developer configuration block built for white-label reseller buyers.',
    features: [
      '30-min video setup',
      'Data import',
      'Branding config',
      'Personal walkthrough',
      'One-time purchase',
    ],
    cta: 'Get Adaptability',
    popular: false,
    accent: 'border-gold/30',
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

        {/* Product Modules */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-navy-900 mb-2">
              Ability Modules
            </h3>
            <p className="text-navy-600">One-time purchase. Yours forever.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${product.accent} ${
                  product.popular ? 'scale-105 shadow-2xl' : ''
                } transition-all duration-300 ${product.comingSoon ? 'opacity-70' : ''}`}
              >
                {product.popular && (
                  <div className="bg-gold text-navy-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                {product.comingSoon && (
                  <div className="bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Coming Soon
                  </div>
                )}
                <h4 className="text-xl font-bold text-navy-900 mb-1">{product.name}</h4>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3">
                  {product.tagline}
                </p>
                <div className="text-3xl font-bold text-navy-900 mb-2">{product.priceLabel}</div>
                <p className="text-sm text-navy-600 mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-navy-700">
                      <FiCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={product.comingSoon ? '#products' : ORDER_FORM_URL}
                  target={product.comingSoon ? '_self' : '_blank'}
                  rel={product.comingSoon ? '' : 'noopener noreferrer'}
                  className={`block text-center py-3 rounded-xl font-bold transition-all duration-300 ${
                    product.comingSoon
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : product.popular
                        ? 'bg-navy-900 text-gold hover:bg-navy-800'
                        : 'bg-gold/10 text-navy-900 border border-gold/30 hover:bg-gold/20'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {product.cta}
                    {!product.comingSoon && <FiArrowRight className="w-4 h-4" />}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

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