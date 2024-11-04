import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    type: z.enum(['article', 'video']),
    videoUrl: z.string().optional(),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    github: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    publishDate: z.date(),
    journal: z.string(),
    link: z.string(),
  }),
});

export const collections = { blog, projects, publications };