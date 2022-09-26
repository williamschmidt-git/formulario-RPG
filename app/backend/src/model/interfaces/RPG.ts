import { z } from 'zod';
import { Types } from 'mongoose';

const rpgZodSchema = z.object({
  rpg_system: z.object({
    name: z.string(),
    version: z.string(),
    is_active: z.boolean(),
    created_at: z.date(),
    updated_at: z.date()
  }),
  chronicle: z.object({
    story_teller: z.instanceof(Types.ObjectId),
    characters: z.array(z.object({
      owner: z.instanceof(Types.ObjectId),
      // attributes: z.lazy(), <-- verificar JSON.TS
      created_at: z.date(),
      updated_at: z.date()
    }))
  })
})

type RPG = z.infer<typeof rpgZodSchema>

export default RPG;
export { rpgZodSchema }