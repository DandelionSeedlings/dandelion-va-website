import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Differentiators from '../components/Differentiators'
import FlagshipProducts from '../components/FlagshipProducts'
import ProcessSteps from '../components/ProcessSteps'
import PortfolioTeaser from '../components/PortfolioTeaser'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0a1628]">
      <Navbar />
      <Header />

      <section id="services">
        <Differentiators />
      </section>

      <section id="products">
        <FlagshipProducts />
      </section>

      <section id="about">
        <ProcessSteps />
      </section>

      <section id="portfolio">
        <PortfolioTeaser />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}