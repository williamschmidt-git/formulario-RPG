"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const model_1 = __importDefault(require("../../abstractClasses/model"));
const rpgMongooseSchema = new mongoose_1.Schema({
    rpgSystem: {
        name: String,
        version: String,
        isActive: Boolean,
    },
    chronicle: {
        storyTeller: String,
        characters: [{ owner: String, attributes: {}, type: Object }]
    }
}, {
    autoCreate: true,
    timestamps: true,
});
class RPGModel extends model_1.default {
    constructor(model = (0, mongoose_1.model)('RPG', rpgMongooseSchema)) {
        super(model);
    }
}
exports.default = RPGModel;
//# sourceMappingURL=RPGModel.js.map