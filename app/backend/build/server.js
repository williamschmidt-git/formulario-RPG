"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const RPGController_1 = __importDefault(require("./controller/RPGController"));
const RPGService_1 = __importDefault(require("./service/RPGService"));
const RPGModel_1 = __importDefault(require("./model/RPGModel"));
const user_1 = __importDefault(require("./route/user"));
const server = new app_1.default();
const rpgModel = new RPGModel_1.default();
const rpgService = new RPGService_1.default(rpgModel);
const rpgController = new RPGController_1.default(rpgService);
const rpgRouter = new user_1.default();
rpgRouter.addRoute(rpgController);
server.addRouter(rpgRouter.router);
exports.default = server;
//# sourceMappingURL=server.js.map