
import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// const id = process.env.PROJECT_ID;
// const token = process.env.PROJECT_TOKEN;

export const client = createClient({
  projectId: import.meta.env.VITE_ID,
  dataset: 'production',
  useCdn: true, // Use the Content Delivery Network (CDN) for faster data retrieval
  apiVersion: '2023-08-07',
  token: import.meta.env.VITE_SECRET,
//   ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
