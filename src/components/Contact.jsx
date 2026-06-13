'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiCheckCircle, FiCalendar, FiClock, FiMessageCircle } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-navy-900 text-cream relative overflow-hidden">
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
            Let's Work <span className="text-gold">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-cream/60 max-w-2xl mx-auto mt-6">
            Ready to transform your business? Book a discovery call and let's discuss how I can help.
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

              <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cream/70 hover:text-gold transition-smooth group">
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
                    <p className="font-medium text-cream">Submit the Form</p>
                    <p className="text-sm text-cream/50">Share your project details and goals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-cream">I Review Within 24 Hours</p>
                    <p className="text-sm text-cream/50">I'll assess your needs and prepare recommendations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-cream">Discovery Call Scheduled</p>
                    <p className="text-sm text-cream/50">We'll discuss your project in detail (15-30 min)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-cream">Custom Proposal Sent</p>
                    <p className="text-sm text-cream/50">Tailored solution with clear pricing and timeline</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gold/20 to-navy-800 rounded-2xl p-10 border border-gold/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiMessageCircle className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-3xl font-bold text-cream mb-3">Book a Discovery Call</h3>
                <p className="text-cream/60">
                  Tell me about your project and I'll get back to you within 24 hours with next steps.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-cream/70">
                  <FiCheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Free 15-30 minute consultation</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70">
                  <FiCheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>No obligation, no pressure</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70">
                  <FiCheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Custom proposal within 48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70">
                  <FiClock className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Response guaranteed within 24h</span>
                </div>
              </div>

              <a 
                href="https://forms.gle/H7tviRGGacXykoYUA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gold text-navy-900 text-center py-5 rounded-xl font-bold text-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Start Discovery Call
                <FiExternalLink className="w-5 h-5" />
              </a>

              <p className="text-center text-cream/40 text-sm mt-4">
                Or WhatsApp me directly: <a href="https://wa.me/27728393087" className="text-gold hover:underline">+27 72 839 3087</a>
              </p>
            </div>

            {/* Trust badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-cream/40">
              <FiCheckCircle className="w-4 h-4 text-green-500" />
              <span>BCEA-Exempt Independent Contractor</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}