import { Router } from "express";
import Controller from "../../abstractClasses/controller";
import RPG from "../schemas/RPG";

class RpgRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: Controller<RPG>) {
    this.router.post('/rpg', controller.create);
    this.router.get('/', controller.read);
    this.router.delete('/rpg/', controller.findOneAndDelete);
  }
}

export default RpgRouter;
