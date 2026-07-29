import Products from '../../components/Products'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AbilitySuitePage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-28" />
      <Products />
      <Footer />
    </main>
  )
}