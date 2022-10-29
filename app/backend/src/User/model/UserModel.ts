import {
  model as mongooseCreateModel,
  Schema,
  Document
} from 'mongoose';
import User from '../schemas/User';
import MongoModel from '../../abstractClasses/model';

interface UserDocument extends User, Document {}

const userMongooseSchema = new Schema<UserDocument>({
  // _id: String,
  // role: String,
  name: String,
  email: String,
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
