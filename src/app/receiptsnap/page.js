import ReceiptSnapPage from '../../components/ReceiptSnapPage'

export const metadata = {
  title: 'ReceiptSnap: photograph receipts, export for your bookkeeper',
  description: 'ReceiptSnap reads your receipts from a photo into your own Google Sheet and exports a clean CSV for your bookkeeper. R299 once off, no subscription.',
  alternates: { canonical: '/receiptsnap' },
  openGraph: {
    title: 'ReceiptSnap: snap the receipt, skip the typing',
    description: 'Photograph a receipt and it lands in your own Google Sheet. R299 once off. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/receiptsnap',
  },
}

export default function ReceiptSnap() {
  return <ReceiptSnapPage />
}
