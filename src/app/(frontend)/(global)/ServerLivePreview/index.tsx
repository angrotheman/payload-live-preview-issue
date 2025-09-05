import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'
import { RefreshRouteOnSave } from './RefreshRouteOnSave'

export const ServerLivePreview: React.FC = async () => {
  const payload = await getPayload({ config: payloadConfig })

  const page = await payload.findGlobal({ slug: 'globalPage' })

  return (
    <div>
      <RefreshRouteOnSave />
      <h1>{page.title}</h1>
      <h1>{page['virtual-field']}</h1>
    </div>
  )
}
