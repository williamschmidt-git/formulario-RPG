import { z } from 'zod';
import { Types } from 'mongoose';

const rpgZodSchema = z.object({
  rpgSystem: z.object({
    name: z.string(),
    version: z.string(),
    isActive: z.boolean()
  }),
  chronicle: z.object({
    storyTeller: z.instanceof(Types.ObjectId),
    characters: z.array(z.object({
      owner: z.instanceof(Types.ObjectId),
      // attributes: z.lazy(), <-- verificar JSON.TS
    }))
  })
})

type RPG = z.infer<typeof rpgZodSchema>

export default RPG;
export { rpgZodSchema }