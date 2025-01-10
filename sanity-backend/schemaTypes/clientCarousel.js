
export default {
  name: 'carousel',
  title: 'Client Carousel Data',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'carousels',
      title: 'Carousel Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.min(1).error('At least one image is required'),
    },
    {
      name: 'descriptionOne',
      title: 'Description One',
      type: 'text',
      description: 'First description for the carousel section.',
    },
    {
      name: 'descriptionTwo',
      title: 'Description Two',
      type: 'text',
      description: 'Second description for the carousel section.',
    },
  ],
};
