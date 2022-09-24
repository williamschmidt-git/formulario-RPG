import { model as mongooseCreateModel, Schema, Types, Document } from 'mongoose';
import RPG from './interfaces/TBD';
import MongoModel from './MongoModel';

interface RPGDocument extends RPG, Document { }

const rpgMongooseSchema = new Schema<RPGDocument>({
  rpg_system: {
    name: String,
    version: String,
    is_active: Boolean,
    created_at: Date,
    updated_at: Date,
  },
  chronicle: {
    story_teller: Types.ObjectId,
    characters: [{ owner: Types.ObjectId, created_at: Date, updated_at: Date }]
  }
})

class RPGModel extends MongoModel<RPG> {
  constructor(model = mongooseCreateModel('RPG', rpgMongooseSchema)) {
    super(model)
  }
}
export default RPGModel;