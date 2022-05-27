import di from '../di';
import { User } from '../orm/entities/User';

export class healthCheckService {
    async healthCheckBasic(res: any) {
        console.log('hit service');
        try {
            const conn = await di.db;

            const user = new User();
            user.firstName = 'Tim';
            user.lastName = 'Rabei';
            //user.age = 25;
            await conn.manager.save(user);

            const userdb = await conn.manager.findOne(User, {
                where: { id: user.id },
            });
            console.log(userdb);
            res.status(200).send({
                status: 'Server is listening!',
                dummy_user_inserted_on_db: `${userdb.firstName}`,
            });
            await conn.manager.delete(User, userdb);
        } catch (error) {
            const err = error as Error;
            res.status(401).send(err.message);
        }
    }
}
