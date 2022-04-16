import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'satou',
  apiKey: process.env.API_KEY,
});