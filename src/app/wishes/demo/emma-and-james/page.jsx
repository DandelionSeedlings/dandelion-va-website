import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'
import { buildDemoContent } from '../../../../lib/wishes/demoContent'

export const metadata = {
  title: 'Emma & James — Dandelion Wishes Style Preview',
}

export default function EmmaAndJamesDemo() {
  return <InvitationTemplate theme={getTheme('romantic-soft')} content={buildDemoContent('romantic-soft')} />
}
