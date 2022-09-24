"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = __importDefault(require("./di"));
const MongoConnection_1 = __importDefault(require("./model/MongoConnection"));
const route_1 = require("./route");
const { SERVER_PORT } = di_1.default.env;
di_1.default.app.listen(SERVER_PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, MongoConnection_1.default)();
    console.log(`Server is listening on port: ${SERVER_PORT}`);
}));
di_1.default.app.use(route_1.routes);
//# sourceMappingURL=server.js.map