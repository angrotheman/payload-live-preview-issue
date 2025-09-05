import { Field } from 'payload'

export const sharedFields: Field[] = [
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

  {
    name: 'relation',
    type: 'relationship',
    hasMany: true,
    relationTo: 'pages',
  },
]
