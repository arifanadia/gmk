import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8m71bqw4',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN, 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url();