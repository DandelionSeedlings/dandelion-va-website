'use client'

import Navbar from '../components/Navbar'
import TerminalHero from '../components/TerminalHero'
import Differentiators from '../components/Differentiators'
import FlagshipProducts from '../components/FlagshipProducts'
import ProcessSteps from '../components/ProcessSteps'
import PortfolioTeaser from '../components/PortfolioTeaser'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream">
      <Navbar />
      <TerminalHero />
      <Differentiators />
      <FlagshipProducts />
      <ProcessSteps />
      <PortfolioTeaser />
      <Contact />
      <Footer />
    </main>
  )
}