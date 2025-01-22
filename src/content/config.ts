import { z, defineCollection } from 'astro:content';

const blogCollection  = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        heroImage: z.string().optional(),
        heroImageAlt: z.string().optional(),
        tags: z.string().array().optional(),
        pubDate: z.coerce.date(),
    })
 });

 const projectsCollection  = defineCollection({
    type: "data",
    schema: z.object({
      name: z.string(),
      description: z.string(),
      url: z.string(),
    }),
 });

 export const collections = {
  "blog": blogCollection,
  "projects": projectsCollection,
};