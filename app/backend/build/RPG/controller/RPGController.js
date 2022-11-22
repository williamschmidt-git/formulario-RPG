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
const controller_1 = __importDefault(require("../../abstractClasses/controller"));
class RPGController extends controller_1.default {
    constructor(service) {
        super(service);
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const rpg = yield this.service.create(body);
            if (!rpg) {
                return res.status(500).json({ error: this.errors.internal });
            }
            if ('error' in rpg) {
                return res.status(400).json({ error: rpg.error });
            }
            return res.status(201).json(rpg);
        });
        this.read = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const rpgs = yield this.service.read();
            if (!rpgs) {
                return res.status(404).json({ error: this.errors.notFound });
            }
            return res.status(200).json(rpgs);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const rpg = yield this.service.delete(id);
            if (!rpg) {
                res.status(404).json({ error: this.errors.notFound });
            }
            return res.status(204).end();
        });
        this.findOneAndDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const rpg = yield this.service.findOneAndDelete(req.body);
            if (!rpg) {
                res.status(404).json({ error: this.errors.notFound });
            }
            return res.status(200).end();
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { id } = req.params;
            const response = yield this.service.update(id, body);
            return response ? res.json(response) : res.status(404).json({
                error: this.errors.notFound
            });
        });
    }
}
exports.default = RPGController;
//# sourceMappingURL=RPGController.js.map