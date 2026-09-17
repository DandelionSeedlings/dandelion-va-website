import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'
import { buildDemoContent } from '../../../../lib/wishes/demoContent'

export const metadata = {
  title: 'Coastal Minimalist — Dandelion Wishes Style Preview',
}

export default function CoastalMinimalDemo() {
  return <InvitationTemplate theme={getTheme('coastal-minimal')} content={buildDemoContent('coastal-minimal')} />
}