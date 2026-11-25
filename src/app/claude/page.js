import ClaudeLanding from '../../components/claude/ClaudeLanding'

export const metadata = {
  title: 'Use our apps with Claude | Dandelion Creations',
  description: 'Every Ability app is a Google Sheet in your own account, so you can ask Claude about your orders, bookings, staff and money. Here is how, and how we set it up safely.',
  alternates: { canonical: '/claude' },
}

export default function ClaudePage() {
  return <ClaudeLanding />
}
