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

  genToken = (user: User) => {
    return jwt.sign(user, this.key);
  };
}

export default AuthService;
