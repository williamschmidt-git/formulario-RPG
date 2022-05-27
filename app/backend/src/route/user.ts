import express = require('express');

import di from '../di';
import HttpStatusCode from '../enum/HttpStatusCode';
import { UserInput, UserLogin } from '../model/User';

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
            res.send('worked!').status(HttpStatusCode.OK);
        }
    } catch (error) {
        const err = error as any;
        throw new Error(err.message);
    }
});
router.post('/login', async (req, res) => {
    const userCredentials: UserLogin = req.body;
    const keycloak = await di.keycloakService.login(userCredentials);
    res.send('oi');
});

export { router as userRoute };
