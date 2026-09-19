import InvitationTemplate from '../../../components/wishes/InvitationTemplate'
import { getTheme } from '../../../lib/wishes/themes'
import { theoneAndRaContent } from '../../../lib/wishes/clients/theoneAndRa'

export const metadata = {
  title: 'Theoné & Ra | 31 October 2027',
}

export default function TheoneAndRaInvitation() {
  return (
    <InvitationTemplate
      theme={getTheme('timeless-classic')}
      content={theoneAndRaContent}
      showPreviewBanner={false}
    />
  )
}