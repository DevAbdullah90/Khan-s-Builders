import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'postToFacebook',
      title: 'Post to Facebook',
      type: 'boolean',
      initialValue: false,
      description: 'Automatically post this project to Facebook when published'
    }),
    defineField({
      name: 'postToInstagram',
      title: 'Post to Instagram',
      type: 'boolean',
      initialValue: false,
      description: 'Automatically post this project to Instagram when published'
    }),
    defineField({ name: 'subheading', type: 'string', title: 'Subheading (Short intro for card)' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured on Homepage', initialValue: false }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'status', type: 'string', options: { list: ['Completed', 'In Progress', 'Planned'] } }),
    defineField({ name: 'location', type: 'string' })
  ]
})
