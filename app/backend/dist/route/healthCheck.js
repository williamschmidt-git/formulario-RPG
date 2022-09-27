"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const express = require("express");
const router = express.Router();
exports.healthCheck = router;
router.get('/health_check', async (req, res, context) => {
    const user = req.body.context;
    if (user) {
        res.send('We did it houston');
    }
    else {
        res.send('Not Logged!');
    }
});
//# sourceMappingURL=healthCheck.js.map