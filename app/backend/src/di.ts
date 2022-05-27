import { KeycloakService } from './service/keycloakService';
import { UserService } from './service/userService';
import { DataSource } from 'typeorm';
import { DotConfig } from './util/config/Config';
import { Application } from 'express';
import express = require('express');
import { AppDataSource } from './util/config/data-source';
import { healthCheckService } from './service/healthCheck';
import axios = require('axios');
import keycloak, { memoryStore } from './util/config/Keycloak';
import cors = require('cors');
import session = require('express-session');

require('dotenv').config();

class DependencyInjector {
    private readonly _app: Application;
    private readonly _env: DotConfig;
    private _databaseConn: DataSource;
    private _healthCheckService: healthCheckService;
    private _axios = axios.default;
    private _keycloak = keycloak;
    private _userService: UserService;
    private _keycloakService: KeycloakService;

    constructor(env: DotConfig) {
        this._env = env;
        this._app = express();
        this._app.use(
            session({
                secret: '7D9CC16C244E32BF5E734469F6748',
                resave: false,
                saveUninitialized: true,
                store: memoryStore,
                cookie: { maxAge: 1000 * 60 * 10 }, //10 minutes
            }),
        );
        this._healthCheckService = new healthCheckService();
        this._app.use(this._keycloak.middleware());
        this._app.use(cors());
        this._app.use(express.json());

        this._databaseConn = AppDataSource(this._env);
        this._databaseConn.initialize();

        this._keycloakService = new KeycloakService(this._axios, this._env);
        this._userService = new UserService();
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

    get axios() {
        return this._axios;
    }

    get healthCheckService(): healthCheckService {
        return this._healthCheckService;
    }

    get keycloak(): typeof keycloak {
        return this._keycloak;
    }

    get keycloakService(): KeycloakService {
        return this._keycloakService;
    }
    get userService(): UserService {
        return this._userService;
    }
}

export default (() => {
    const DI = new DependencyInjector(process.env as unknown as DotConfig);
    return DI;
})();
