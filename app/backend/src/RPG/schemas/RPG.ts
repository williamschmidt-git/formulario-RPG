import { z } from 'zod';

const rpgZodSchema = z.object({
  rpgSystem: z.object({
    name: z.string(),
    version: z.string(),
    isActive: z.boolean()
  }),
  chronicle: z.object({
    storyTeller: z.string(),
    characters: z.array(z.object({
      owner: z.string(),
      attributes: z.unknown()
    }))
  })
});

type RPG = z.infer<typeof rpgZodSchema>

export default RPG;
export { rpgZodSchema };
