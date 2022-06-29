import { DataSource } from 'typeorm';
import { Application } from 'express';
import express = require('express');
// import * as cors from 'cors';
import { DotConfig } from './util/config/Config';
import AppDataSource from './util/config/data-source';
import { HealthCheckService } from './service/healthCheck';

import 'dotenv/config';

class DependencyInjector {
  private readonly _app: Application;

  private readonly _env: DotConfig;

  private _databaseConn: DataSource;

  private _healthCheckService: HealthCheckService;

  constructor(env: DotConfig) {
    this._env = env;
    this._app = express();
    this._healthCheckService = new HealthCheckService();

    // this._app.use(cors());
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

  get healthCheckService(): HealthCheckService {
    return this._healthCheckService;
  }
}

export default (() => {
  const DI = new DependencyInjector(process.env as unknown as DotConfig);
  return DI;
})();
