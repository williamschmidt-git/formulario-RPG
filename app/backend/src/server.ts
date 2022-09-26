import App from './app';
import RPGController from './controller/RPGController';
import RPGService from './service/RPGService';
import RPGModel from './model/RPGModel';
import RPG from './model/interfaces/RPG';
import CustomRouter from './route/user';

const server = new App();
const rpgModel = new RPGModel();
const rpgService = new RPGService(rpgModel)
const rpgController = new RPGController(rpgService)

const rpgRouter = new CustomRouter<RPG>();
rpgRouter.addRoute(rpgController)

server.addRouter(rpgRouter.router)

export default server;