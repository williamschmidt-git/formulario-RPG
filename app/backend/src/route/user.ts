import express = require('express');

import di from '../di';
import HttpStatusCode from '../enum/HttpStatusCode';
import { UserInput, UserLoginInput } from '../model/User';

const router = express.Router();

router.post('/create_user', async (req, res) => {
    const userInput: UserInput = req.body;
    //add JOI to check inputs
});

export { router as userRoute };
