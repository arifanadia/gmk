export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the about section.',
        },
        {
            name: 'descriptionOne',
            title: 'Description One',
            type: 'text',
            description: 'First description for the about us section.',
        },
        {
            name: 'descriptionTwo',
            title: 'Description Two',
            type: 'text',
            description: 'Second description for the about us section.',
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'logoImage',
                            title: 'Logo Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'altText',
                            title: 'Alt Text',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
