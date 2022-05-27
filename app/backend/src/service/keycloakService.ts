import { Axios } from 'axios';
import di from '../di';
import HttpStatusCode from '../enum/HttpStatusCode';
import { RawToken, UserKeycloak } from '../model/Auth';
import { UserLoginInput } from '../model/User';
import { DotConfig } from '../util/config/Config';
const querystring = require('querystring');

export class KeycloakService {
    private _axios: Axios;
    private readonly _env: DotConfig;
    private _adminToken: RawToken = null;
    private _adminTokenExpiration = 0;

    constructor(axios: Axios, env: DotConfig) {
        this._axios = axios;
        this._env = env;
    }
    async createUser(
        firstName: string,
        lastName: string,
        email: string,
        enabled: boolean,
        password?: string,
    ): Promise<UserKeycloak> {
        const adminToken = await this.fetchValidAdminToken();

        const form = {
            firstName,
            lastName,
            username: email,
            email: email,
            enabled: enabled ? 'true' : 'false',
            credentials: password
                ? [
                      {
                          type: 'password',
                          value: password,
                      },
                  ]
                : [],
        };
        const headers = { Authorization: `Bearer ${adminToken}`, 'Content-Type': `application/json` };
        const url = `${di.env.KEYCLOAK_AUTH_URL}admin/realms/${di.env.KEYCLOAK_REALM}/users`;
        let response;
        try {
            response = await this._axios.post(url, form, { headers });
        } catch (error) {
            console.log(error);
        }

        // if (response.status == HttpStatusCode.OK) {
        //     throw new Error('Error building user record');
        // }
        // if (response.status === HttpStatusCode.CONFLICT) {
        //     throw new Error('User already registered in the system');
        // }
        return this.findUserByEmailKeycloak(email.toLowerCase());
    }

    private async fetchValidAdminToken() {
        if (this._adminToken && this._adminTokenExpiration > Date.now()) {
            return this._adminToken.access_token;
        }
        if (this._adminToken && this._adminTokenExpiration <= Date.now()) {
            const accessToken = await this._retrieveToken();
            return accessToken.access_token;
        }
        const accessToken = await this._retrieveToken();
        return accessToken.access_token;
    }

    private async _retrieveToken() {
        try {
            const rawForm = {
                username: this._env.KEYCLOAK_ADMIN_USER,
                password: this._env.KEYCLOAK_ADMIN_PASSWORD,
                grant_type: 'password',
                client_id: 'admin-cli',
                client_secret: this._env.KEYCLOAK_ADMIN_SECRET,
            };
            const url = `${this._env.KEYCLOAK_AUTH_URL}realms/master/protocol/openid-connect/token`;
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
            const form = querystring.stringify(rawForm);
            const response = await this._axios.post<RawToken>(url, form, {
                headers,
            });
            this._adminToken = response.data;
            this._adminTokenExpiration = Date.now() + (response.data.expires_in * 1000 - 10 * 1000);
        } catch (error) {
            const err = error as Error;
            console.log(err);
        }
        return this._adminToken;
    }

    async findUserByEmailKeycloak(email: string) {
        // grab admin token to search for user
        const adminToken = await this.fetchValidAdminToken();
        let searchEmail = email;
        //check if email has plus sign
        if (email.includes('+')) {
            searchEmail = email.replace('+', '&#43;');
        }

        const response = await this._axios.get<UserKeycloak[]>(
            `${di.env.KEYCLOAK_AUTH_URL}admin/realms/${di.env.KEYCLOAK_REALM}/users?email=${searchEmail}`,
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
                responseType: 'json',
            },
        );
        const user = response.data.find((u) => u.email == email);
        return user;
    }

    async login(userCredentials: UserLoginInput) {
        const url = `${this._env.KEYCLOAK_AUTH_URL}realms/${this._env.KEYCLOAK_REALM}/protocol/openid-connect/token`;
        const headers = { 'Content-type': 'application/x-www-form-urlencoded' };
        const form = querystring.stringify({
            client_id: 'admin-cli',
            client_secret: this._env.KEYCLOAK_ADMIN_SECRET,
            username: userCredentials.email,
            password: userCredentials.password,
            grant_type: 'password',
        });
        return (await this._axios.post<RawToken>(url, form, { headers })).data;
    }
}
