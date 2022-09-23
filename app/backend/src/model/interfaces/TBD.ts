import { z } from 'zod';
import { Types } from 'mongoose';
import { ICharacter } from '../RPG';

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
    characters: z.instanceof(Types.Array<ICharacter>)
  })
})