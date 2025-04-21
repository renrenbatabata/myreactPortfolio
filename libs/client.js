import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'gf50pfvyig',
    apiKey: process.env.NEXT_PUBLIC_OW_API_KEY,
});