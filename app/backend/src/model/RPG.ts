import { Date, model, ObjectId, Schema } from "mongoose";

export interface ICharacter {
  owner: ObjectId,
  attributes: {}, //type Mixed https://mongoosejs.com/docs/schematypes.html#mixed
  created_at: Date, 
  update_at: Date,
}

interface IRPG {
  rpg_system: {
    name: String,
    version: String,
    is_active: Boolean,
    created_at: Date,
    updated_at: Date,
  },
  chronicle: {
    story_teller: ObjectId,
    characters: Array<ICharacter>,
  },
}

const rpgSchema = new Schema<IRPG>({
  rpg_system: {
    type: Object,
    required: true,
  },
  chronicle: {
    type: Object,
    required: true
  }
})

// Para acessarmos os métodos disponibilizados pelo Mongoose(create, find, update...) e
// implementarmos nossa API, criamos um model

const rpgModel = model<IRPG>('RPG', rpgSchema)