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
const service_1 = __importDefault(require("../../abstractClasses/service"));
const RPG_1 = require("../schemas/RPG");
class RPGService extends service_1.default {
    constructor(model) {
        super(model);
        this.model = model;
        this.create = (obj) => __awaiter(this, void 0, void 0, function* () {
            const parsed = RPG_1.rpgZodSchema.safeParse(obj);
            if (!parsed.success) {
                return { error: parsed.error };
            }
            return this.model.create(obj);
        });
        this.read = () => __awaiter(this, void 0, void 0, function* () {
            const rpgs = this.model.read();
            return rpgs;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.model.delete(id);
        });
        this.findOneAndDelete = (rpg) => __awaiter(this, void 0, void 0, function* () {
            const { chronicle: { storyTeller } } = rpg;
            return this.model.findOneAndDelete({ 'chronicle.storyTeller': storyTeller });
        });
    }
}
exports.default = RPGService;
//# sourceMappingURL=RPGService.js.map