import { KeycloakService } from './service/keycloakService';
import { UserService } from './service/userService';
import { DataSource, getRepository } from 'typeorm';
import { DotConfig } from './util/config/Config';
import { Application } from 'express';
import express = require('express');
import { AppDataSource } from './util/config/data-source';
import { healthCheckService } from './service/healthCheck';
import axios = require('axios');
import keycloak, { memoryStore } from './util/config/Keycloak';
import cors = require('cors');
import session = require('express-session');
import { CompleteKeyGrant } from './model/Auth';
import { User } from './orm/entities/User';

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

    // private async __contextResolver(req: GrantedRequest, connection: any) {
    //     if (!!connection) {
    //         if (connection.context) {
    //             return connection.context;
    //         }
    //         return { user: null, kauth: null };
    //     }

    //     if (this._env.NODE_ENV === 'test') {
    //         const user = await getRepository(User).findOne({
    //             id: req.header('user-id'),
    //         });
    //         return { user: user, kauth: user ? {} : null };
    //     }

    //     const kauth = new KeycloakContext({ req });
    //     if (!kauth.accessToken) {
    //         // >> This is empty if accessToken is expired
    //         return { user: null, kauth: null };
    //     }
    //     const user = await getRepository(User).findOne({
    //         email: (kauth.accessToken as any as CompleteKeyGrant['access_token']).content.email,
    //     });

    //     return { user: user, kauth: kauth };
    // }

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
