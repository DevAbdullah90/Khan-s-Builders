import { defineType, defineField } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'banners',
      title: 'Hero Banners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', options: { hotspot: true } },
            { name: 'title', type: 'string' },
            { name: 'subtitle', type: 'text' },
            { name: 'highlightedText', type: 'string', description: 'e.g. Living and Business' }
          ]
        }
      ]
    }),
    defineField({
      name: 'stats',
      title: 'Statistics Bar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'services',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'icon', type: 'string' }
      ]}]
    }),
    defineField({
      name: 'featuredProjects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    })
  ]
})
