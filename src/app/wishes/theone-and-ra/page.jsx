import EditorialInvitationTemplate from '../../../components/wishes/EditorialInvitationTemplate'
import { theoneAndRaContent } from '../../../lib/wishes/clients/theoneAndRa'

export const metadata = {
  title: 'Theoné & Ra | 31 October 2027',
}

export default function TheoneAndRaInvitation() {
  return <EditorialInvitationTemplate content={theoneAndRaContent} />
}