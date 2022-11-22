import { Router } from "express";
import UserController from "../controller/UserController";
import UserValidation from "../middlewares/Validation";

class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: UserController, validation: UserValidation) {
    this.router.post('/user', validation.validate, controller.create);
    this.router.get('/user', controller.auth, controller.read);
    this.router.patch('/user/:id', controller.auth, controller.update);
    this.router.delete('/user/:id', controller.auth, controller.delete);
  }
}

export default UserRouter;
