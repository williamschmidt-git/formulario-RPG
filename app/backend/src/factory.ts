import App from './app';
import RPGController from './RPG/controller/RPGController';
import RPGService from './RPG/service/RPGService';
import RPGModel from './RPG/model/RpgModel';
import UserController from './User/controller/UserController';
import UserService from './User/service/UserService';
import UserModel from './User/model/UserModel';
import routes from './routes';
import RPGValidation from './RPG/middlewares/Validation';
import UserValidation from './User/middlewares/Validation';


const server = new App();
const rpgModel = new RPGModel();
const rpgService = new RPGService(rpgModel);
const rpgController = new RPGController(rpgService);
const rpgRouter = new routes.RpgRouter();
const rpgValidation = new RPGValidation();
rpgRouter.addRoute(rpgController, rpgValidation);

const userModel = new UserModel();
const userservice = new UserService(userModel);
const userController = new UserController(userservice);
const userRouter = new routes.UserRouter();
const userValidation = new UserValidation();
userRouter.addRoute(userController, userValidation);

server.addRouter(rpgRouter.router);
server.addRouter(userRouter.router);

export default server;
export { 
  userModel
};
