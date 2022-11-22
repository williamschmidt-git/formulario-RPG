import App from './app';
import Validation from './RPG/middlewares/Validation';
import RPGController from './RPG/controller/RPGController';
import RPGService from './RPG/service/RPGService';
import RPGModel from './RPG/model/RpgModel';
import UserController from './User/controller/UserController';
import UserService from './User/service/UserService';
import UserModel from './User/model/UserModel';
import routes from './routes';


const server = new App();
const rpgModel = new RPGModel();
const rpgService = new RPGService(rpgModel);
const rpgController = new RPGController(rpgService);
const rpgRouter = new routes.RpgRouter();
rpgRouter.addRoute(rpgController);

const userModel = new UserModel();
const userservice = new UserService(userModel);
const userController = new UserController(userservice);
const userRouter = new routes.UserRouter();
userRouter.addRoute(userController);

server.addRouter(rpgRouter.router);
server.addRouter(userRouter.router);

export default server;
export { 
  userModel
};
