'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-900/5 rounded-full blur-3xl"></div>
      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            The Engineer Behind <span className="text-gold-dark">the Systems</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto mt-6">
            Operational experience and technical precision, combined in one person — so nothing gets lost in translation between &quot;what the business needs&quot; and &quot;what gets built.&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-navy-900/10 rounded-[2rem] rotate-2"></div>
              <div className="relative bg-cream rounded-2xl p-8 shadow-xl border border-gold/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                    <span className="text-navy-900 font-serif font-bold text-2xl">ST</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Simone Theron</h3>
                    <p className="text-gold-dark text-sm">Founder & Lead Operations Engineer</p>
                  </div>
                </div>
                <p className="text-navy-600 leading-relaxed mb-4">
                  I started Dandelion Creations after watching the same pattern repeat across every business I worked with: capable owners, buried not by lack of effort, but by systems that were never actually designed — just accumulated, one spreadsheet and one workaround at a time.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  My background is in operations management. My discipline is Google Apps Script engineering. Together, that means I don&apos;t just automate a task — I diagnose why the process broke down in the first place, then build the version that doesn&apos;t. Every system I deploy is trusted by South African businesses who&apos;ve decided that &quot;good enough&quot; isn&apos;t.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            {[{
              title: 'Operational Fluency',
              desc: 'Years spent inside the actual day-to-day of running a business, not just observing it from the outside.'
            }, {
              title: 'Engineering Discipline',
              desc: 'Custom Google Apps Script systems, built to the operation, not adapted from a template.'
            }, {
              title: 'The AbilitySuite™ Ecosystem',
              desc: 'A modular architecture of purpose-built systems, deployable individually or combined as your operation scales.'
            }, {
              title: 'Built for This Market',
              desc: 'SARS-compliant reporting, local banking integration, ZAR pricing — engineered for South African operational reality, not adapted from a US product.'
            }].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FiCheckCircle className="w-4 h-4 text-gold-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">{item.title}</h4>
                  <p className="text-navy-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-gold hover:bg-[#c4a030] text-navy-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4"
            >
              <FiArrowRight /> Explore the AbilitySuite™ Ecosystem
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}