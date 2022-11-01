import User from "../schemas/User";
import jwt from 'jsonwebtoken';
import UserModel from "../model/UserModel";
import fs from 'fs';
import { ResponseError } from "../../abstractClasses/controller/";

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

  authorization = async (user: User): Promise<string | object> => {
    const foundUser = await this.userModel.findByEmail(user);

    if(!foundUser) {return { error: 'Invalid values'};}

    const token = this.genToken(foundUser);

    return token;
  };

  authentication = (token: string  | undefined): jwt.JwtPayload | string | ResponseError => {
    try {
      if(!token) {
        return { error: 'Token not found' };
      }
      return jwt.verify(token, this.key);
    } catch (err) {
      return { error: 'Invalid token' };
    }
  };
}

export default AuthService;
