import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    // older posts used `date` while the automation script uses `pubDate`
    date: z.string().or(z.date()).optional(),
    pubDate: z.string().or(z.date()).optional(),
    description: z.string().optional(),
    link: z.string().optional(),
    source: z.string().optional(),
    sourceUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.number().optional(),
    author: z.string().optional(),
  }),
});

export const collections = { posts };
