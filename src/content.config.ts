import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Self-hosted blog. Posts live in src/content/blog/ as .md or .mdx files.
// The entry id (used as the URL slug) is derived from the filename, e.g.
// src/content/blog/hello-world.md -> /blog/hello-world
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
