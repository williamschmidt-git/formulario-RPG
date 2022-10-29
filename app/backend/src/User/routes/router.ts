import { Router } from "express";
import Controller from "../../abstractClasses/controller";
import User from "../schemas/User";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: Controller<User>) {
    this.router.post('/user', controller.create);
  }
}

export default UserRouter;