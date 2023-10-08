import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const events = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().optional(),
  }),
});

const improves = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().optional(),
  }),
});

const studleySocials = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    eventDate: z.string().transform((val) => new Date(val)),
    location: z.string().optional(),
  }),
});
const sextonSocials = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    eventDate: z.string().transform((val) => new Date(val)),
    location: z.string().optional(),
  }),
});





export const collections = { news, events,improves,studleySocials,sextonSocials };
