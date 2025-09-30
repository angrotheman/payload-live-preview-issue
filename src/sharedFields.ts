import { Field } from 'payload'

export const sharedFields: Field[] = [
  {
    type: 'text',
    name: 'title',
  },
  {
    type: 'text',
    name: 'virtualField',
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

  {
    name: 'virtualLocalizedArray',
    type: 'array',
    admin: {
      readOnly: true,
    },
    virtual: true,
    fields: [
      {
        name: 'label',
        type: 'text',
        localized: true,
      },
    ],
    hooks: {
      afterRead: [
        () => [
          {
            id: 'item_01',
            label: {
              de: 'Deutscher Text',
              en: 'English text',
            },
          },
        ],
      ],
    },
  },
]
