import { defineCollection, reference, z } from 'astro:content';

const design = defineCollection({
  type: 'content',
  schema: z.object({}),
});

const development = defineCollection({
  type: 'content',
  schema: z.object({}),
});

const game = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
  }),
});

const gaming = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    game: reference('game'),
  }),
});

const electronics = defineCollection({
  type: 'content',
  schema: z.object({}),
});

const making = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = {
  design,
  development,
  gaming,
  game,
  electronics,
  making,
};
