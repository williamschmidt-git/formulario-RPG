import { Router } from "express";
import Controller from "../../abstractClasses/controller";
import Validation from "../middlewares/Validation";
import RPG from "../schemas/RPG";

class RpgRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: Controller<RPG>, validation: Validation<RPG>) {
    this.router.post('/rpg', validation.validate, controller.create);
    this.router.get('/', controller.read);
    this.router.delete('/rpg/', controller.findOneAndDelete);
  }
}

export default RpgRouter;
