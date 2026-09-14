import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'
import { buildDemoContent } from '../../../../lib/wishes/demoContent'

export const metadata = {
  title: 'Botanical — Dandelion Wishes Style Preview',
}

export default function BotanicalDemo() {
  return <InvitationTemplate theme={getTheme('botanical')} content={buildDemoContent('botanical')} />
}
