import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { blog };
