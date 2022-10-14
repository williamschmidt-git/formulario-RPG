"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpgZodSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
const rpgZodSchema = zod_1.z.object({
    rpg_system: zod_1.z.object({
        name: zod_1.z.string(),
        version: zod_1.z.string(),
        is_active: zod_1.z.boolean(),
        created_at: zod_1.z.date(),
        updated_at: zod_1.z.date()
    }),
    chronicle: zod_1.z.object({
        story_teller: zod_1.z.instanceof(mongoose_1.Types.ObjectId),
        characters: zod_1.z.array(zod_1.z.object({
            owner: zod_1.z.instanceof(mongoose_1.Types.ObjectId),
            // attributes: z.lazy(), <-- verificar JSON.TS
            created_at: zod_1.z.date(),
            updated_at: zod_1.z.date()
        }))
    })
});
exports.rpgZodSchema = rpgZodSchema;
//# sourceMappingURL=TBD.js.map