'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => { e.preventDefault(); setIsSubmitted(true); setTimeout(() => setIsSubmitted(false), 5000) }
  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value })

  return (
    <section id="contact" className="section-padding bg-navy-900 text-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="container-max px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="text-center mb-20">
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Work <span className="text-gold">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          <p className="text-xl text-cream/60 max-w-2xl mx-auto mt-6">Ready to transform your business? Book a discovery call.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-gold">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:dandelioncreat@outlook.com" className="flex items-center gap-4 text-cream/70 hover:text-gold transition-smooth">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20"><FiMail className="w-5 h-5 text-gold" /></div>
                <div><p className="text-sm text-cream/40">Email</p><p className="font-medium">dandelioncreat@outlook.com</p></div>
              </a>
              <a href="https://wa.me/27728393087" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cream/70 hover:text-gold transition-smooth">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20"><FiPhone className="w-5 h-5 text-gold" /></div>
                <div><p className="text-sm text-cream/40">Phone / WhatsApp</p><p className="font-medium">+27 72 839 3087</p></div>
              </a>
              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20"><FiMapPin className="w-5 h-5 text-gold" /></div>
                <div><p className="text-sm text-cream/40">Location</p><p className="font-medium">Pretoria, South Africa</p></div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-gold/10 rounded-2xl border border-gold/20">
              <p className="font-bold text-gold mb-2">Quick Response Guarantee</p>
              <p className="text-cream/60 text-sm">All inquiries receive a response within 24 hours. Urgent matters? WhatsApp me directly.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            {isSubmitted ? (
              <div className="bg-gold/10 rounded-2xl p-8 text-center border border-gold/20">
                <FiCheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-cream">Message Sent!</h3>
                <p className="text-cream/60">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium mb-2 text-cream/70">Your Name</label>
                    <input type="text" name="name" value={formState.name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-navy-800 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-smooth" placeholder="John Smith" /></div>
                  <div><label className="block text-sm font-medium mb-2 text-cream/70">Email Address</label>
                    <input type="email" name="email" value={formState.email} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-navy-800 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-smooth" placeholder="john@company.com" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium mb-2 text-cream/70">Phone Number</label>
                    <input type="tel" name="phone" value={formState.phone} onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-800 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-smooth" placeholder="+27 72 839 3087" /></div>
                  <div><label className="block text-sm font-medium mb-2 text-cream/70">Service Interest</label>
                    <select name="service" value={formState.service} onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy-800 border border-gold/20 rounded-lg text-cream focus:outline-none focus:border-gold transition-smooth">
                      <option value="" className="text-navy-900">Select a service</option>
                      <option value="va" className="text-navy-900">Virtual Assistant</option>
                      <option value="apps-script" className="text-navy-900">Google Apps Script</option>
                      <option value="social" className="text-navy-900">Social Media</option>
                      <option value="admin" className="text-navy-900">Admin Support</option>
                      <option value="marketing" className="text-navy-900">Digital Marketing</option>
                      <option value="other" className="text-navy-900">Other</option>
                    </select></div>
                </div>
                <div><label className="block text-sm font-medium mb-2 text-cream/70">Your Message</label>
                  <textarea name="message" value={formState.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-3 bg-navy-800 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-smooth resize-none"
                    placeholder="Tell me about your project and how I can help..." /></div>
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <FiSend className="w-5 h-5" />Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
