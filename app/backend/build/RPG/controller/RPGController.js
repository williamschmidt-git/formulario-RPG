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
            try {
                const rpg = yield this.service.create(body);
                if (!rpg) {
                    return res.status(500).json({ error: this.errors.internal });
                }
                if ('error' in rpg) {
                    return res.status(400).json(rpg);
                }
                return res.status(201).json(rpg);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        });
        this.read = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const rpgs = yield this.service.read();
                if (!rpgs) {
                    return res.status(404).json({ error: this.errors.notFound });
                }
                return res.status(200).json(rpgs);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const rpg = yield this.service.delete(id);
                if (!rpg) {
                    res.status(404).json({ error: this.errors.notFound });
                }
                return res.status(204).end();
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        });
        this.findOneAndDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const rpg = yield this.service.findOneAndDelete(req.body);
                if (!rpg) {
                    res.status(404).json({ error: this.errors.notFound });
                }
                return res.status(200).end();
            }
            catch (error) {
                return res.status(500).json({ error: this.errors.internal });
            }
        });
    }
}
exports.default = RPGController;
//# sourceMappingURL=RPGController.js.map