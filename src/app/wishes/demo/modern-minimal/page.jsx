import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'
import { buildDemoContent } from '../../../../lib/wishes/demoContent'

export const metadata = {
  title: 'Modern & Minimal — Dandelion Wishes Style Preview',
}

export default function ModernMinimalDemo() {
  return <InvitationTemplate theme={getTheme('modern-minimal')} content={buildDemoContent('modern-minimal')} />
}
