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
    {
      type: 'text',
      name: 'title',
    },
    {
      type: 'text',
      name: 'virtual-field',
      admin: {
        readOnly: true,
      },
      virtual: true,
      hooks: {
        afterRead: [
          ({ siblingData }) => {
            return `Virtual ${siblingData['title']}`
          },
        ],
      },
    },
  ],
}
