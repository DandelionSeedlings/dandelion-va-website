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

      {/* Home anchor — the navbar "Home" link scrolls here */}
      <section id="hero">
        <Header />
      </section>

      {/* No ID needed — this is visual, not a nav destination */}
      <Differentiators />

      {/* Products anchor — navbar "Products" link */}
      <section id="products">
        <FlagshipProducts />
      </section>

      {/* How It Works anchor — navbar "How It Works" link */}
      <section id="process">
        <ProcessSteps />
      </section>

      {/* Portfolio anchor — navbar "Portfolio" link */}
      <section id="portfolio">
        <PortfolioTeaser />
      </section>

      {/* About anchor — if you have an About section, add it here */}
      {/* <section id="about"><About /></section> */}

      {/* Contact anchor — navbar "Contact" link */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}