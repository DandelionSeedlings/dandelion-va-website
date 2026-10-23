import BudgetAbilityPage from '../../components/BudgetAbilityPage'

export const metadata = {
  title: 'BudgetAbility: household budget in your own Google Sheet, any currency',
  description: 'BudgetAbility tracks accounts, spending, bills, budgets, goals and debt in your own Google Sheet, in any currency. R499 once off, no subscription.',
  alternates: { canonical: '/budgetability' },
  openGraph: {
    title: 'BudgetAbility: know where your money goes, in any currency',
    description: 'A household money tracker you own. R499 once off. No subscription.',
    type: 'website',
    url: 'https://dandelioncreations.co.za/budgetability',
  },
}

export default function BudgetAbility() {
  return <BudgetAbilityPage />
}
