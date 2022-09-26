"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const rpgMongooseSchema = new mongoose_1.Schema({
    rpgSystem: {
        name: String,
        version: String,
        isActive: Boolean,
    },
    chronicle: {
        storyTeller: mongoose_1.Types.ObjectId,
        characters: [{ owner: mongoose_1.Types.ObjectId }]
    }
}, {
    autoCreate: true,
    timestamps: true,
});
class RPGModel extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('RPG', rpgMongooseSchema)) {
        super(model);
    }
}
exports.default = RPGModel;
//# sourceMappingURL=RPGModel.js.map