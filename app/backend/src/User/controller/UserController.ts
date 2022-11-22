import User from "../schemas/User";
import UserService from "../service/UserService";
import Controller, { RequestWithBody, ResponseError } from '../../abstractClasses/controller';
import { NextFunction, Response } from 'express';
import AuthService from "../service/AuthService";
import { userModel } from "../../factory";


class UserController extends Controller<User> {
  private authService: AuthService;
  constructor(
    service: UserService,
  ) {
    super(service);
    this.authService = new AuthService(userModel);
  }

  create = async (
    req: RequestWithBody<User>,
    res: Response<User | ResponseError | object>,
  ): Promise<typeof res> => {
    const { body } = req;

    const user = await this.service.create(body);
    const { name, email } = body;

    if(!user) {
      return res.status(500).json({ error: this.errors.internal});
    }

    if('error' in user) {
      return res.status(400).json({ error: user.error });
    }

    const token = this.authService.genToken(user);

    return res.status(201).json({ name, email, token});
  };

  read = async (
    req: RequestWithBody<User>,
    res: Response<User[] | ResponseError>,
  ): Promise<typeof res> => {
    const users = await this.service.read();

    if(!users) {
      return res.status(404).json({error: this.errors.notFound });
    }

    return res.status(200).json(users);
  };

  delete = async (
    req: RequestWithBody<User>,
    res: Response<User | ResponseError>): Promise<typeof res> => {
    const { id } = req.params;
    const user = await this.service.delete(id);

    if(!user) {res.status(404).json({ error: this.errors.notFound });}

    return res.status(204).end();
  };

  findOneAndDelete = async (
    req: RequestWithBody<User>,
    res: Response<User | ResponseError>
  ): Promise<typeof res> => {
    const user = await this.service.findOneAndDelete(req.body);

    if(!user) {res.status(404).json({ error: this.errors.notFound });}

    return res.status(200).end();
  };

  login = async(
    req: RequestWithBody<User>,
    res: Response<User | ResponseError| string | object>
  ): Promise<typeof res> => {
    const response = await this.authService.authorization(req.body);
    return res.status(200).json({response});
  };

  auth = (
    req: RequestWithBody<User>,
    res: Response<object | ResponseError>,
    next: NextFunction,
  ): typeof res | void =>{

    const token = req.headers.authorization;

    const response = this.authService.authentication(token);

    if(response.code !== 200) {
      res.status(response.code).json({ message: response.data });
    }
    next();
  };

  update = async (
    req: RequestWithBody<User & { id: string }>,
    res: Response<User | ResponseError>,
  ): Promise<typeof res>=> {
    const { body } = req;
    const { id } = req.params;

    const response = await this.service.update(id, body);

    return response ? res.json(response) : res.status(404).json({ error: this.errors.notFound });

  };
}

export default UserController;
