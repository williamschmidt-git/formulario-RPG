import express = require("express");
import fetch from "node-fetch";
import di from "../di";

const router = express.Router();

router.get("/health_check", async (req, res) => {
  const response = await fetch("https://www.google.com");
  const data = await response.json();

  console.log(data);
  // console.log("hit routes");
  // return await di.healthCheckService.healthCheckBasic(res);
});

export { router as healthCheck };
