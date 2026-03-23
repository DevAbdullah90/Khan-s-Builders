import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'subheading', type: 'string', title: 'Subheading (Short intro for card)' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'status', type: 'string', options: { list: ['Completed', 'In Progress', 'Planned'] } }),
    defineField({ name: 'location', type: 'string' })
  ]
})
