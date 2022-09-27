"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./service/userService");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
require('dotenv').config();
class DependencyInjector {
    _app;
    _env;
    _userService;
    constructor(env) {
        this._env = env;
        this._app = express();
        this._app.use(session({
            secret: '7D9CC16C244E32BF5E734469F6748',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 1000 * 60 * 10 }, //10 minutes
        }));
        this._app.use(cors());
        this._app.use(express.json());
        this._userService = new userService_1.UserService();
    }
    get app() {
        return this._app;
    }
    get env() {
        return this._env;
    }
    get userService() {
        return this._userService;
    }
}
exports.default = (() => {
    const DI = new DependencyInjector(process.env);
    return DI;
})();
//# sourceMappingURL=di.js.map