import CvLanding from '../../components/cv/CvLanding'

export const metadata = {
  title: 'CV Builder: a South African CV in one evening, R149',
  description: 'Build your CV step by step and see it take shape as you type. One column that screening software can read, the South African details employers look for, and a clean PDF for R149 once.',
  alternates: { canonical: '/cv' },
  openGraph: {
    title: 'CV Builder | Dandelion Creations',
    description: 'A CV that gets read. Built for South African job hunting. R149 once.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/cv',
  },
}

export default function CvPage() {
  return <CvLanding />
}
