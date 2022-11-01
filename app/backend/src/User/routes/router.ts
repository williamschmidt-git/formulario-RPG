import { Router } from "express";
import Controller from "../../abstractClasses/controller";
import UserController from "../controller/UserController";
import User from "../schemas/User";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: UserController) {
    this.router.post('/user', controller.create);
    this.router.get('/user', controller.auth, controller.read);
    // this.router.get('/user/:id', controller.)
  }
}

export default UserRouter;
