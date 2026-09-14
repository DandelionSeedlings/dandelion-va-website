import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'
import { buildDemoContent } from '../../../../lib/wishes/demoContent'

export const metadata = {
  title: 'Romantic & Soft — Dandelion Wishes Style Preview',
}

export default function RomanticSoftDemo() {
  return <InvitationTemplate theme={getTheme('romantic-soft')} content={buildDemoContent('romantic-soft')} />
}
