import Products from '../../components/Products'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AbilitySuitePage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            AbilitySuite™ Ecosystem
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Every Module. One Architecture.
          </h1>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Each Ability is engineered to solve one operational problem precisely — 
            deployed inside your Google Workspace, owned outright, built to scale.
          </p>
        </div>
      </div>
      <Products />
      <Footer />
    </main>
  )
}