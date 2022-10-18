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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
    }
    startServer(PORT = 3001) {
        return __awaiter(this, void 0, void 0, function* () {
            // const options = {
            // 	user: 'user', // Usuário do banco de dados.
            // 	pass: 'password', // senha do usuário do banco de dados.
            // 	// autoIndex: false, // Não cria index para cada inserção de dado no banco.
            // 	// dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
            // };
            // mongoose.connect('dbmongo://localhost:27017/', options).then(() => {
            // 	console.log('successfully connected');
            // });
            mongoose_1.default
                .connect('mongodb://dbmongo:27017')
                .then(() => {
                console.log('loguei no db');
            })
                .catch((err) => {
                console.log(err);
            });
            this.app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
        });
    }
    addRouter(router) {
        this.app.use(router);
    }
    getApp() {
        return this.app;
    }
}
exports.default = App;
//classe app
//# sourceMappingURL=app.js.map