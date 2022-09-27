"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpgZodSchema = void 0;
const zod_1 = require("zod");
const rpgZodSchema = zod_1.z.object({
    rpgSystem: zod_1.z.object({
        name: zod_1.z.string(),
        version: zod_1.z.string(),
        isActive: zod_1.z.boolean()
    }),
    chronicle: zod_1.z.object({
        storyTeller: zod_1.z.string(),
        characters: zod_1.z.array(zod_1.z.object({
            owner: zod_1.z.string(),
            attributes: zod_1.z.unknown()
        }))
    })
});
exports.rpgZodSchema = rpgZodSchema;
//# sourceMappingURL=RPG.js.map