
import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// const id = process.env.PROJECT_ID;
// const token = process.env.PROJECT_TOKEN;

export const client = createClient({
  projectId: import.meta.env.VITE_ID,
  dataset: 'production',
  useCdn: true, // Use the Content Delivery Network (CDN) for faster data retrieval
  apiVersion: '2023-08-07',
  token: 'skxE4l76ceABuFr64J9sksgPsm9AWyIk6UJ34j5NMjc15PNTC09O7eQOnbH7wX0jtDOmFflDLriFktZEjn8WnnrNotvVbRbsIfTCyc0nxbWk0EPofKgdVrMX9B4s94Nc7uTkB1LLCjkrdy8L6XWasRrI2WI8hqBqEzMU0No1Ix8gyz2F0TgX',
//   ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
