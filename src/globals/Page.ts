import { sharedFields } from '@/sharedFields'
import type { GlobalConfig } from 'payload'

export const Page: GlobalConfig = {
  slug: 'globalPage',
  admin: {
    preview: () => '/',
    livePreview: {
      url: () => '/',
    },
  },
  fields: [...sharedFields],
}
