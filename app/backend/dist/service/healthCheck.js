"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckService = void 0;
const di_1 = require("../di");
const User_1 = require("../orm/entities/User");
class healthCheckService {
    async healthCheckBasic(res) {
        console.log('hit service');
        try {
            const conn = await di_1.default.db;
            const user = new User_1.User();
            user.firstName = 'Tim';
            user.lastName = 'Rabei';
            //user.age = 25;
            await conn.manager.save(user);
            const userdb = await conn.manager.findOne(User_1.User, {
                where: { id: user.id },
            });
            console.log(userdb);
            res.status(200).send({
                status: 'Server is listening!',
                dummy_user_inserted_on_db: `${userdb.firstName}`,
            });
            await conn.manager.delete(User_1.User, userdb);
        }
        catch (error) {
            const err = error;
            res.status(401).send(err.message);
        }
    }
}
exports.healthCheckService = healthCheckService;
//# sourceMappingURL=healthCheck.js.map