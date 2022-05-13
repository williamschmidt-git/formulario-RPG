import express = require("express");
import di from "../di";

const router = express.Router();

router.get("/health_check", async (req, res) => {
  console.log("hit routes");
  return await di.healthCheckService.healthCheckBasic(res);
});

export { router as healthCheck };
