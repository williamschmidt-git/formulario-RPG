import { Router } from "express";
import UserController from "../controller/UserController";

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
