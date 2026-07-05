'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import TemplateShop from '../components/TemplateShop'
import Pricing from '../components/Pricing'
import Roadmap from '../components/Roadmap'
import Portfolio from '../components/Portfolio'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TemplateShop />
      <Pricing />
      <Roadmap />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}