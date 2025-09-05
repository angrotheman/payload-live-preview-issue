import { getPageBySlug } from '../getPageBySlug'
import { UI } from './UI'

export const ClientLivePreview: React.FC<{ slug: string }> = async ({ slug }) => {
  const page = await getPageBySlug(slug)

  return <UI initialPage={page} />
}
