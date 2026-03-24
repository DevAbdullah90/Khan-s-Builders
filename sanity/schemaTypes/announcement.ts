import { defineType, defineField } from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement (Hero Ticker)',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Announcement Text',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'link',
      title: 'Target URL (Optional)',
      type: 'url'
    }),
    defineField({
      name: 'priority',
      title: 'Display Priority',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    })
  ]
})
