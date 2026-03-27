import { defineType, defineField } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fieldsets: [
    {
      name: 'layout',
      title: 'Layout Options',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Optional: Title of the project/image',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Architecture', value: 'architecture' },
          { title: 'Interior', value: 'interior' },
          { title: 'Exterior', value: 'exterior' },
          { title: 'Landscape', value: 'landscape' },
          { title: 'Luxury', value: 'luxury' },
        ],
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'gridColumns',
      title: 'Grid Columns (1-2)',
      description: 'How many columns should this image span in the gallery grid?',
      type: 'number',
      fieldset: 'layout',
      initialValue: 1,
      validation: (Rule) => Rule.min(1).max(2),
    }),
    defineField({
      name: 'gridRows',
      title: 'Grid Rows (1-2)',
      description: 'How many rows should this image span in the gallery grid?',
      type: 'number',
      fieldset: 'layout',
      initialValue: 1,
      validation: (Rule) => Rule.min(1).max(2),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      fieldset: 'layout',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Portfolio Item',
        subtitle: subtitle || 'Architecture Gallery',
        media,
      }
    },
  },
})

