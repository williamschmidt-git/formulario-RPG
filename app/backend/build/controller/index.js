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
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerErrors;
(function (ControllerErrors) {
    ControllerErrors["internal"] = "Internal Server Error";
    ControllerErrors["notFound"] = "Object not found";
    ControllerErrors["requiredId"] = "Id is required";
    ControllerErrors["badRequest"] = "Bad request";
})(ControllerErrors || (ControllerErrors = {}));
class Controller {
    constructor(service) {
        this.service = service;
        this.errors = ControllerErrors;
        this.read = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const objs = yield this.service.read();
                return res.json(objs);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=index.js.map