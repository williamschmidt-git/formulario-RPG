"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const rpgMongooseSchema = new mongoose_1.Schema({
    rpg_system: {
        name: String,
        version: String,
        is_active: Boolean,
        created_at: Date,
        updated_at: Date,
    },
    chronicle: {
        story_teller: mongoose_1.Types.ObjectId,
        characters: [{ owner: mongoose_1.Types.ObjectId, created_at: Date, updated_at: Date }]
    }
}, {
    autoCreate: true
});
class RPGModel extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('RPG', rpgMongooseSchema)) {
        super(model);
    }
}
exports.default = RPGModel;
//# sourceMappingURL=RPGModel.js.map