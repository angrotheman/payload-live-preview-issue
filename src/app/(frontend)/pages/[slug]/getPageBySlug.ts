import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'

export const getPageBySlug = async (slug: string) => {
  const payload = await getPayload({ config: payloadConfig })

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return page
}
