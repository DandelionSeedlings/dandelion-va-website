import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import OrderForm from '../../components/OrderForm'

export const metadata = {
  title: 'Order | Dandelion Creations OS',
  description: 'Order your Dandelion Creations modules in one form. Pay once, own it, no subscription.',
  alternates: { canonical: '/order' },
  robots: { index: false, follow: true },
}

export default function OrderPage() {
  return (
    <main className="bg-[#0a1628] min-h-screen">
      <Navbar />
      <div className="pt-28">
        <OrderForm />
      </div>
      <Footer />
    </main>
  )
}
