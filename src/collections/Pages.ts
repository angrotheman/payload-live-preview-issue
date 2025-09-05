import { sharedFields } from '@/sharedFields'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    preview: ({ slug }) => {
      return `/pages/${slug}`
    },
    livePreview: {
      url: ({ data }) => `/pages/${data.slug}`,
    },
  },
  fields: [
    {
      type: 'text',
      name: 'slug',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    ...sharedFields,
  ],
}
