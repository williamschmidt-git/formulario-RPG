"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express = require("express");
const router = express.Router();
exports.userRoute = router;
router.post('/create_user', async (req, res) => {
    // const userInput: UserInput = req.body;
    //add JOI to check inputs
});
//# sourceMappingURL=user.js.map