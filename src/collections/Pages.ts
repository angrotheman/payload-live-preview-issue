import { sharedFields } from '@/sharedFields'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig<'pages'> = {
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
  defaultPopulate: {
    slug: true,
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
