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
    <main className="overflow-hidden bg-navy-900">
      <Navbar />

      <Header />

      <Differentiators />

      <section id="products">
        <FlagshipProducts />
      </section>

      <ProcessSteps />

      <section>
        <PortfolioTeaser />
      </section>

      <Contact />

      <Footer />
    </main>
  )
}