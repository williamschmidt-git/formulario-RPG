import User from "../schemas/User";
import jwt from 'jsonwebtoken';
import UserModel from "../model/UserModel";
import fs from 'fs';

class AuthService {
  private userModel: UserModel;
  private key: Buffer;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
    this.key = fs.readFileSync('jwt.evaluation.key');
  }

  genToken = (user: User): string => {
    return jwt.sign({ user }, this.key);
  };

  authentication = async (user: User): Promise<string | object> => {
    const foundUser = await this.userModel.findByEmail(user);

    if(!foundUser) {return { error: 'Invalid values'};}

    const token = this.genToken(foundUser);

    return token;
  };

  authorization = (token: string): jwt.JwtPayload | string => {
    if(!token) {
      return { error: 'Token not found' };
    }
    try {
      return jwt.verify(token, this.key);
    } catch (err) {
      return { error: 'Invalid token' };
    }
  };
}

export default AuthService;
