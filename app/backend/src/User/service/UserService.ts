import Service, { ServiceError } from '../../abstractClasses/service';
import User, { userZodSchema } from '../schemas/User';
import UserModel from '../model/UserModel';


class UserService extends Service<User> {
  constructor(protected model: UserModel) {
    super(model);
  }

  create = async(obj: User): Promise<User | null | ServiceError> => {
    const parsedUser = userZodSchema.safeParse(obj);

    if(!parsedUser.success) {
      return { error: parsedUser.error };
    }

    return this.model.create(obj);
  };

  read = async(): Promise<User[]> => {
    const users = this.model.read();

    return users;
  };

  delete = async (id: string): Promise<User | null | ServiceError> => {
    return this.model.delete(id);
  };

  findOneAndDelete = async(user: User): Promise<User | null | ServiceError> => {
  
    return this.model.findOneAndDelete({'name': user.name});
  };
}

export default UserService;
