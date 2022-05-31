import { UserAuthenticated } from '../model/AuthKeycloak';
import express = require('express');

import di from '../di';
import HttpStatusCode from '../enum/HttpStatusCode';
import { UserInput, UserLoginInput } from '../model/User';

const router = express.Router();

router.post('/create_user', async (req, res) => {
    const userInput: UserInput = req.body;
    //add JOI to check inputs

    try {
        const keycloakUser = await di.keycloakService.createUser(
            userInput.firstName,
            userInput.lastName,
            userInput.email,
            true,
            userInput.password,
        );

        const user = await di.userService.createUser(keycloakUser);
        if (user) {
            //TODO add proper messaget to reply
            res.send(user).status(HttpStatusCode.OK);
        }
    } catch (error) {
        const err = error as any;
        throw new Error(err.message);
    }
});
router.post('/login', async (req, res) => {
    const userCredentials: UserLoginInput = req.body;
    const token = await di.keycloakService.login(userCredentials);
    if (token) {
        const user = await di.userService.findUserByEmail(userCredentials.email);
        user.lastLogin = new Date();
        const userDetails: UserAuthenticated = {
            user: user,
            tokens: token,
        };
        di.userService.updateUser(user);
        res.json(userDetails).status(HttpStatusCode.ACCEPTED);
    } else {
        res.send('User Not Found').status(HttpStatusCode.NOT_FOUND);
    }
});

export { router as userRoute };
