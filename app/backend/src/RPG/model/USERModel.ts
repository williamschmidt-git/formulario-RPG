import {
    model as mongooseUserModel,
    Schema,
    Document
} from 'mongoose';
import USER from '../schemas/USER';
import MongoModel from '../../abstractClasses/model';

interface USERModel extends USER, Document { }

const userMongooseSchema = new Schema<USERModel>({
    user: {
        id: String,
        role: String,
        name: String,
        email: String,
        password: String,
    }
}, {
    autoCreate: true,
    timestamps: true,
});

class USERModel extends MongoModel<USER> {
    constructor(model = mongooseUserModel('User', userMongooseSchema)) {
        super(model);
    }
}

export default USERModel;