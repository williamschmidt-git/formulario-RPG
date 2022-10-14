import App from './app';
import RPGController from './RPG/controller/RPGController';
import RPGService from './RPG/service/RPGService';
import RPGModel from './RPG/model/RPGModel';
import RPG from './RPG/schemas/RPG';
import CustomRouter from './routes/CustomRouter';

const server = new App();
const rpgModel = new RPGModel();
const rpgService = new RPGService(rpgModel)
const rpgController = new RPGController(rpgService)

const rpgRouter = new CustomRouter<RPG>();
rpgRouter.addRoute(rpgController)

server.addRouter(rpgRouter.router)

export default server;