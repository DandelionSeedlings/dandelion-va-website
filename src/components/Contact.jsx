'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiCheckCircle, FiCalendar, FiClock, FiMessageCircle, FiShoppingCart } from 'react-icons/fi'

const ORDER_FORM_URL = 'https://script.google.com/macros/s/AKfycbwpt4kWYZWGXdocgba7citoNpC_AEt7ImG2izh-LacgIAAA3wDhtL8PXLX-pw_WGXWx9Q/exec'

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
            Ready to transform your business? Book a discovery call or order your products directly.
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

          {/* Right: Two CTA Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Order Products Card */}
            <div className="bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl p-8 border border-gold/30 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiShoppingCart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-cream mb-2">Order Products</h3>
                <p className="text-cream/60 text-sm">
                  Browse AbilitySuite™ and order directly. License keys delivered within 24 hours.
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>12 products from FREE to R1,499</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Bank transfer or QR code payment</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Instant license key delivery</span>
                </div>
              </div>

              <a 
                href={ORDER_FORM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gold text-navy-900 text-center py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiShoppingCart className="w-5 h-5" />
                Order Now
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Book Discovery Call Card */}
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 border border-gold/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMessageCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-cream mb-2">Book a Discovery Call</h3>
                <p className="text-cream/60 text-sm">
                  For custom VA services, automation projects, or tailored solutions.
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Free 15-30 minute consultation</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>No obligation, no pressure</span>
                </div>
                <div className="flex items-center gap-3 text-cream/70 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Custom proposal within 48 hours</span>
                </div>
              </div>

              <a 
                href="https://forms.gle/H7tviRGGacXykoYUA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-white/10 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
              >
                Start Discovery Call
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-cream/40">
              <FiCheckCircle className="w-4 h-4 text-green-500" />
              <span>BCEA-Exempt Independent Contractor</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}