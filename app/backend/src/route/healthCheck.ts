import express = require('express');

import di from '../di';
import { CompleteKeyGrant } from '../model/Auth';

const router = express.Router();

router.get('/health_check', async (req, res) => {
    const dia = di;
    const key = di.keycloak.grantManager;
    let grant = (await di.keycloak.grantManager.obtainDirectly(
        'abnerf.silva@gmail.com',
        'abnerf.silva@gmail.com',
    )) as any as CompleteKeyGrant;
    console.log(grant);
});

export { router as healthCheck };
