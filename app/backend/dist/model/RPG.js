"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rpgSchema = new mongoose_1.Schema({
    rpg_system: {
        type: Object,
        required: true,
    },
    chronicle: {
        type: Object,
        required: true
    }
});
// Para acessarmos os métodos disponibilizados pelo Mongoose(create, find, update...) e
// implementarmos nossa API, criamos um model
const rpgModel = (0, mongoose_1.model)('RPG', rpgSchema);
//# sourceMappingURL=RPG.js.map