import { DataSource } from "typeorm";
import { DotConfig } from "./utils/config/Config";
import { Application } from "express";
import express = require("express");
import cors from "cors";
import { AppDataSource } from "./utils/config/data-source";
require("dotenv").config();

class DependencyInjector {
  private readonly _app: Application;
  private readonly _env: DotConfig;
  private _databaseConn: DataSource;

  constructor(env: DotConfig) {
    this._env = env;
    this._app = express();

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
}

export default (() => {
  const DI = new DependencyInjector(process.env as unknown as DotConfig);
  return DI;
})();
