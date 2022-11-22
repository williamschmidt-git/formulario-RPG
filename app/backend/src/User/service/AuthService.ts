import * as dotenv from 'dotenv';
import User from "../schemas/User";
import jwt, { Secret } from 'jsonwebtoken';
import UserModel from "../model/UserModel";

dotenv.config();

type ServiceResponse = {
  code: number,
  data: any
}

class AuthService {
  private userModel: UserModel;
  private key: Buffer;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  genToken = (user: User): string => {
    const { name, email } = user;
    return jwt.sign({ data: { name, email } }, process.env.SECRET as Secret);
  };

  authorization = async (user: User): Promise<string | object> => {
    const foundUser = await this.userModel.findByEmail(user);

    if(!foundUser) {return { error: 'Invalid values'};}

    const token = this.genToken(foundUser);

    return token;
  };

  authentication = (token: string | undefined): ServiceResponse  => {
    try {
      if(!token) {
        return { code: 401, data: 'Token not found'};
      }

      const decoded = jwt.verify(token, process.env.SECRET as Secret);

      return { code: 200, data: decoded };
    } catch (err: any) {
      return { code: 401, data: 'Expired or invalid token'};
    }
  };
}

export default AuthService;
