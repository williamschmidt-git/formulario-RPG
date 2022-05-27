import di from '../di';
import { UserKeycloak } from '../model/Auth';
import { User } from '../orm/entities/User';

export class UserService {
    async createUser(keycloakUser: UserKeycloak) {
        const user = new User();
        user.id = keycloakUser.id;
        user.firstName = keycloakUser.firstName;
        user.lastName = keycloakUser.lastName;
        user.email = keycloakUser.email;
        user.active = true;
        try {
            await di.db.manager.insert(User, user);
        } catch (error) {
            const err = error as Error;
            console.log(err.message);
        }
        return user;
    }
    async findUserByEmail(email: string) {
        return await di.db.manager.findOne(User, {
            where: { email: email },
        });
    }

    async findUserById(id: string) {
        return await di.db.manager.findOne(User, {
            where: { id: id },
        });
    }
}
