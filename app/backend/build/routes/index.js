"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../RPG/routes/router"));
const router_2 = __importDefault(require("../User/routes/router"));
const routes = { RpgRouter: router_1.default, UserRouter: router_2.default };
exports.default = routes;
//# sourceMappingURL=index.js.map