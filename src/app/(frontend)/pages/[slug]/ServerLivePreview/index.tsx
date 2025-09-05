import { getPageBySlug } from '../getPageBySlug'
import { RefreshRouteOnSave } from '../../../RefreshRouteOnSave'
import { PureUI } from '@/app/(frontend)/PureUI'

export const ServerLivePreview: React.FC<{ slug: string }> = async ({ slug }) => {
  const page = await getPageBySlug(slug)

  return (
    <>
      <RefreshRouteOnSave />
      <PureUI page={page} />
    </>
  )
}
