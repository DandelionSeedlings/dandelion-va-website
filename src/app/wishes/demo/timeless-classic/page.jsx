import InvitationTemplate from '../../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../../lib/wishes/themes'
import { buildDemoContent } from '../../../../lib/wishes/demoContent'

export const metadata = {
  title: 'Timeless & Classic — Dandelion Wishes Style Preview',
}

export default function TimelessClassicDemo() {
  return <InvitationTemplate theme={getTheme('timeless-classic')} content={buildDemoContent('timeless-classic')} />
}
