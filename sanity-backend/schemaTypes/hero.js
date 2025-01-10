export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },
        {
            name: 'customId',
            title: 'CustomId',
            type: 'string',
            description: 'A custom identifier for this hero document',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'miniCards',
            title: 'Mini Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'designation',
                            title: 'Designation',
                            type: 'string',
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
                },
            ],
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
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'button',
            title: 'Button',
            type: 'string',
        },

        {
            name: 'addressForm',
            title: 'Address Form',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Form Description',
                    type: 'string',
                },
                {
                    name: 'placeholder',
                    title: 'Input Placeholder',
                    type: 'string',
                },
            ],
        },
        {
            name: 'customForm',
            title: 'Custom Form',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                },
                {
                    name: 'formFields',
                    title: 'Form Fields',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'label',
                                    title: 'Field Label',
                                    type: 'string',
                                },
                                {
                                    name: 'inputType',
                                    title: 'Input Type',
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: 'Text', value: 'text' },
                                            { title: 'Email', value: 'email' },
                                            { title: 'Password', value: 'password' },
                                            { title: 'Textarea', value: 'textarea' },
                                        ],
                                    },
                                },
                                {
                                    name: 'placeholder',
                                    title: 'Input Placeholder',
                                    type: 'string',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'submitButton',
                    title: 'Submit Button',
                    type: 'string',
                },
            ],


        },
    ],
};
