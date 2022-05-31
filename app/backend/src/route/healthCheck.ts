import express = require('express');
import di from '../di';

const router = express.Router();

router.get('/health_check', async (req, res, context) => {
    const user = req.body.context;
    if (user) {
        res.send('we did it houston');
    }
});

export { router as healthCheck };
