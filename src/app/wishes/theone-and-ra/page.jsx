import EditorialInvitationTemplate from '../../../components/wishes/EditorialInvitationTemplate'
import { theoneAndRaContent } from '../../../lib/wishes/clients/theoneAndRa'

export const metadata = {
  title: 'Theoné & Ra | 21 November 2026',
}

export default function TheoneAndRaInvitation() {
  return <EditorialInvitationTemplate content={theoneAndRaContent} />
}