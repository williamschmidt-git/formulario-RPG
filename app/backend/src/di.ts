import { DataSource } from "typeorm";
import { DotConfig } from "./util/config/Config";
import { Application } from "express";
import express = require("express");
import cors from "cors";
import { AppDataSource } from "./util/config/data-source";
import { healthCheckService } from "./service/healthCheck";
require("dotenv").config();

class DependencyInjector {
  private readonly _app: Application;
  private readonly _env: DotConfig;
  private _databaseConn: DataSource;
  private _healthCheckService: healthCheckService;

  constructor(env: DotConfig) {
    this._env = env;
    this._app = express();
    this._healthCheckService = new healthCheckService();

    //this._app.use(cors());
    this._databaseConn = AppDataSource(this._env);
  }

  get app(): Application {
    return this._app;
  }

  get env(): DotConfig {
    return this._env;
  }

  get db(): DataSource {
    return this._databaseConn;
  }

  get healthCheckService(): healthCheckService {
    return this._healthCheckService;
  }
}

export default (() => {
  const DI = new DependencyInjector(process.env as unknown as DotConfig);
  return DI;
})();
