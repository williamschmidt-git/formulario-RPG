import { model as mongooseCreateModel,
  Schema,
  Types,
  Document
} from 'mongoose';
import RPG from '../schemas/RPG';
import MongoModel from '../../abstractClasses/model';

interface RPGDocument extends RPG, Document { }

const rpgMongooseSchema = new Schema<RPGDocument>({
  rpgSystem: {
    name: String,
    version: String,
    isActive: Boolean,
  },
  chronicle: {
    storyTeller: Types.ObjectId,
    characters: [{ owner: Types.ObjectId }]
  }
}, {
  autoCreate: true,
  timestamps: true,
})

class RPGModel extends MongoModel<RPG> {
  constructor(model = mongooseCreateModel('RPG', rpgMongooseSchema)) {
    super(model)
  }
}

export default RPGModel;