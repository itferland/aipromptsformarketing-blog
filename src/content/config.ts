import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    link: z.string().optional(),
    source: z.string().optional(),
  }),
});

export const collections = { posts };
