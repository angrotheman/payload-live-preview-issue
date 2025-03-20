import type { GlobalConfig } from 'payload'

export const Page: GlobalConfig = {
  slug: 'page',
  admin: {
    livePreview: {
      url: () => '/',
    },
  },
  fields: [
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
