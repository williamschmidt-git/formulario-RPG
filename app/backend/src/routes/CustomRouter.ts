import { Router } from 'express';
import Controller from '../abstractClasses/controller';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: Controller<T>) {
    this.router.post('/rpg', controller.create);
    this.router.get('/', controller.read);
    this.router.delete('/rpg/', controller.findOneAndDelete);
  }
}

export default CustomRouter;
