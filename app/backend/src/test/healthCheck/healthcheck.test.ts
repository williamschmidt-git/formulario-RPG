import { expect } from "chai";
import express = require("express");
import di from "../../di";
import { healthCheck } from "../../route/healthCheck";

let app;

describe("Health check", function () {
  beforeEach(async () => {
    app = express();
    app.use(healthCheck);
    app.listen(8020);
  });
  it("should get one user from database", async () => {
    const response = await app.get("localhost:8020/health_check");
    console.log(app);
    console.log(response);
    expect(response.body.status).to.be.equal(200);
  });
});
