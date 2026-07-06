'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiStar, FiArrowRight, FiShield, FiUsers, FiZap, FiPackage, FiTrendingUp } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

export default function ResellerSection() {
  const tiers = [
    {
      name: 'Starter',
      product: 'Single Product',
      price: 'R1,499',
      description: 'Perfect for solo VAs and consultants adding one automation product to their service menu.',
      icon: FiPackage,
      features: [
        'One AbilitySuite™ product of your choice',
        'Full white-label rights (remove Dandelion branding)',
        'Unique reseller license key',
        'Reseller dashboard (activations & client list)',
        'Rebranding toolkit (logo, colors, company name)',
        'Email support (24–48 hour response)',
        'One-time purchase — unlimited resells',
      ],
      cta: 'Get Starter License',
      popular: false,
      accent: 'border-emerald-500/30',
      badge: 'bg-emerald-500/20 text-emerald-400',
    },
    {
      name: 'Professional',
      product: '3-Product Bundle',
      price: 'R4,999',
      description: 'For small agencies ready to build a full automation product line under their own brand.',
      icon: FiUsers,
      features: [
        'Pick any 3 AbilitySuite™ products',
        'Unified white-label branding across all 3',
        'Unique license keys per product',
        'Advanced reseller dashboard with revenue tracking',
        'Custom color palette & domain prefixing',
        'Priority email support (8-hour response)',
        'Quarterly strategy calls (positioning & sales)',
        'One-time purchase — unlimited resells',
      ],
      cta: 'Get Professional Bundle',
      popular: true,
      accent: 'border-gold',
      badge: 'bg-gold/20 text-gold',
    },
    {
      name: 'Enterprise',
      product: 'Full Suite',
      price: 'R14,999',
      description: 'The complete ecosystem. For established agencies competing at enterprise level.',
      icon: FiTrendingUp,
      features: [
        'ALL 14 AbilitySuite™ products included',
        'Complete white-label ecosystem',
        'Custom branded client portal',
        'Custom domain option (apps.youragency.com)',
        'Full asset rebranding (emails, templates, copy)',
        'Priority support + dedicated Slack channel',
        'Monthly strategy calls + quarterly reviews',
        'Early access to new products (Trackability, etc.)',
        'Revenue analytics dashboard',
        'One-time purchase — unlimited resells',
      ],
      cta: 'Get Enterprise Suite',
      popular: false,
      accent: 'border-violet-500/30',
      badge: 'bg-violet-500/20 text-violet-400',
    },
  ]

  const benefits = [
    { title: 'No Coding Required', desc: 'You sell. We build. Your clients never know we exist.', icon: FiZap },
    { title: '100% White-Label', desc: 'Your logo, your colors, your brand. Everywhere.', icon: FiShield },
    { title: 'Unlimited Resells', desc: 'Buy once. Sell to unlimited clients. Keep 100% of your revenue.', icon: FiTrendingUp },
    { title: 'Lifetime Updates', desc: 'Products improve over time. Your clients get updates automatically.', icon: FiPackage },
  ]

  return (
    <section id="resellers" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 border border-gold rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-gold rounded-full"></div>
      </div>

      <div className="container-max px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">White-Label Program</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6">
            Sell Automation Under <span className="text-gold">Your Brand</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-cream/60 max-w-3xl mx-auto mt-6">
            I build the tech. You sell it. Your clients never know I exist. 
            One payment. Unlimited resells. Your brand, your pricing, your empire.
          </p>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {benefits.map((b, i) => (
            <div key={i} className="bg-navy-800/50 rounded-2xl p-6 border border-gold/10 text-center hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-6 h-6 text-gold" />
              </div>
              <h4 className="text-lg font-bold text-cream mb-2">{b.title}</h4>
              <p className="text-sm text-cream/60">{b.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 border-2 ${tier.accent} ${
                tier.popular
                  ? 'bg-gradient-to-b from-gold/20 to-navy-800 shadow-2xl scale-105'
                  : 'bg-navy-800/50 shadow-lg hover:shadow-xl'
              } transition-all duration-500 backdrop-blur-sm`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                  <FiStar className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <tier.icon className="w-7 h-7 text-gold" />
              </div>

              <div className={`inline-flex items-center gap-2 ${tier.badge} px-3 py-1 rounded-full text-xs font-bold mb-4`}>
                {tier.product}
              </div>

              <h3 className="text-2xl font-bold text-cream mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-gold mb-2">{tier.price}</div>
              <p className="text-cream/60 text-sm mb-6 leading-relaxed">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-cream/70">
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
                    ? 'bg-gold text-navy-900 hover:bg-[#c4a030]'
                    : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
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

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-10 border border-gold/20 mb-16"
        >
          <h3 className="text-2xl font-bold text-cream mb-8 text-center">
            How the White-Label Program Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Buy Your License', desc: 'Pick your tier. One payment. No subscriptions.' },
              { step: '2', title: 'Rebrand Everything', desc: 'Upload your logo, set your colors, enter your company name.' },
              { step: '3', title: 'Sell to Clients', desc: 'Set your own prices. Sell under your brand. Keep 100%.' },
              { step: '4', title: 'We Handle Tech', desc: 'Updates, bug fixes, new features — all pushed automatically.' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy-900 font-bold text-xl mx-auto mb-3 shadow-lg">
                  {s.step}
                </div>
                <h4 className="text-lg font-bold text-cream mb-1">{s.title}</h4>
                <p className="text-sm text-cream/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ / Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cream/60 mb-6 max-w-2xl mx-auto">
            Questions about white-label rights, support boundaries, or custom development? 
            Every reseller gets a clear agreement outlining exactly what&apos;s included.
          </p>
          <a
            href="https://wa.me/27728393087"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
          >
            WhatsApp Me About Reselling <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}