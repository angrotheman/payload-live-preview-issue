import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'
import { UI } from './UI'

export const ClientLivePreview: React.FC = async () => {
  const payload = await getPayload({ config: payloadConfig })

  const page = await payload.findGlobal({ slug: 'page' })

  return <UI initialPage={page} />
}
