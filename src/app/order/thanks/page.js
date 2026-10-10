import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import OrderThanks from '../../../components/OrderThanks'

export const metadata = {
  title: 'Payment | Dandelion Creations OS',
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <main className="bg-[#0a1628] min-h-screen">
      <Navbar />
      <div className="pt-32">
        <OrderThanks />
      </div>
      <Footer />
    </main>
  )
}
