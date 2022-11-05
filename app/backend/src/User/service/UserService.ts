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

  findByEmail = async(user: User): Promise<User | null | ServiceError> => {
    return this.model.findByEmail({'email': user.email});
  };

  update = async(id: string, obj: User): Promise<User | null | ServiceError | undefined> => {
    const validated = userZodSchema.safeParse(obj);

    if(!validated.success) {
      return { error: validated.error };
    }

    if(UserService.isAdmin(obj)) {
      console.log(await this.isSameUser(obj, id));
      return this.model.findByIdAndUpdate(id, obj);
    }

    if(await this.isSameUser(obj, id)) {
      return this.model.findByIdAndUpdate(id, obj);
    }
  };

  static isAdmin(obj: User): boolean {
    const { role } = obj;

    if(role === 'admin') {
      return true;
    }
    return false;
  }

  isSameUser = async (obj: User, id: string): Promise<boolean> => {
    const { email } = obj;

    const user = await this.model.findByEmail({ email });
    if(user?.id === id) {
      return true;
    } 

    return false;
  };
}

export default UserService;
