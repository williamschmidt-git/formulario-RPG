import {
  model as mongooseCreateModel,
  Schema,
  Document,
} from 'mongoose';
import User from '../schemas/User';
import MongoModel from '../../abstractClasses/model';

interface UserDocument extends User, Document {}

const userMongooseSchema = new Schema<UserDocument>({
  _id: Schema.Types.ObjectId,
  role: String,
  name: String,
  email: { type: String, unique: true, dropDups: true },
  password: String,
}, {
  autoCreate: true,
  timestamps: true
});

class UserModel extends MongoModel<User> {
  constructor(model = mongooseCreateModel('User', userMongooseSchema)) {
    super(model);
  }
}

export default UserModel;
