'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi'
import Image from 'next/image'

const caseStudies = [
  {
    client: 'Kiddie Junction Academy',
    industry: 'Education',
    label: 'Breakdown',
    problem: 'Manual attendance, scattered parent communication, no payroll visibility.',
    system: 'Connectability',
    outcome: 'Full staff & student tracking, automated WhatsApp alerts, digital sign-in.',
    metric: '80%',
    metricLabel: 'Admin time saved',
    image: '/portfolio/kiddie-junction.jpg',
  },
  {
    client: 'The Wilds Estate',
    industry: 'Property Management',
    label: 'Breakdown',
    problem: 'Paper-based maintenance requests, no SLA tracking, resident complaints.',
    system: 'Maintainability',
    outcome: 'Digital request pipeline, automated escalation, real-time status updates.',
    metric: '3x',
    metricLabel: 'Faster resolution',
    image: '/portfolio/the-wilds.jpg',
  },
  {
    client: 'Dandelion Creations',
    industry: 'Creative Agency',
    label: 'Breakdown',
    problem: 'Social media chaos, no content calendar, inconsistent posting.',
    system: 'Marketability',
    outcome: 'Full content pipeline, approval workflows, analytics dashboard.',
    metric: '12+',
    metricLabel: 'Hours saved weekly',
    image: '/portfolio/dandelion.jpg',
  },
  {
    client: 'Simone Theron Consulting',
    industry: 'Professional Services',
    label: 'Breakdown',
    problem: 'Invoice tracking in spreadsheets, late payments, no cash flow visibility.',
    system: 'Payability',
    outcome: 'Automated invoice pipeline, payment reminders, revenue dashboard.',
    metric: 'R50K+',
    metricLabel: 'Additional revenue tracked',
    image: '/portfolio/consulting.jpg',
  },
]

const stats = [
  { value: '14', label: 'Systems Deployed', sub: 'Across 4 categories' },
  { value: '50+', label: 'Businesses Served', sub: 'Since 2020' },
  { value: 'R2M+', label: 'Revenue Processed', sub: 'Through Payability alone' },
  { value: '0', label: 'Monthly Subscriptions', sub: 'Own your infrastructure' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-cream">
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
            Proof of Work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-4">
            Case Studies in Operational Engineering
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            These are not hypothetical use cases. These are real businesses running on systems we built, measured, and refined.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gold/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-navy-900">
                {stat.label}
              </div>
              <div className="text-xs text-navy-500 mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gold/10 group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-navy-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cream/30 text-lg font-serif italic">
                    {study.client}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/90 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Breakdown / System Built / Outcome */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1 block">
                      Breakdown
                    </span>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gold/20" />
                    <FiArrowRight className="text-gold" size={16} />
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1 block">
                      System Built
                    </span>
                    <p className="text-navy-900 font-semibold text-sm">
                      {study.system}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gold/20" />
                    <FiCheckCircle className="text-emerald-500" size={16} />
                    <div className="h-px flex-1 bg-gold/20" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1 block">
                      Outcome
                    </span>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {/* Metric */}
                <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-3">
                  <div className="text-2xl font-bold text-gold">{study.metric}</div>
                  <div className="text-xs text-navy-500">{study.metricLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-navy-600 mb-4">
            Want to see how your operation would map to a system?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold px-8 py-4 rounded-lg font-bold transition-all duration-300"
          >
            <FiTrendingUp /> Book a Systems Audit
          </a>
        </motion.div>
      </div>
    </section>
  )
}