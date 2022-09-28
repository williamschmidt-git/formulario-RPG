"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CustomRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    addRoute(controller) {
        this.router.post('/rpg', controller.create);
        this.router.get('/', controller.read);
        this.router.delete('/rpg/', controller.findOneAndDelete);
    }
}
exports.default = CustomRouter;
//# sourceMappingURL=CustomRouter.js.map