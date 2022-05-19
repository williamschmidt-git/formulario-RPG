//import fetch from "node-fetch";
import { RawToken, UserKeycloak } from '../model/Auth';
import { DotConfig } from '../util/config/Config';

export class KeycloakService {
    private readonly _env: DotConfig;
    //private _fetch = fetch;
    // Admin credentials
    private _adminToken: RawToken = null;
    private _adminTokenExpiration = 0;

    constructor(env: DotConfig) {
        //this._fetch = fetch;
        this._env = env;
    }

    // async createUser(
    //   firstName: string,
    //   lastName: string,
    //   email: string,
    //   enabled: boolean,
    //   password?: string
    // ): Promise<UserKeycloak> {
    //   const adminToken = await this.fetchValidAdminToken();
    //   const { statusCode: userStatusCode } = await this._got.post(
    //     `${this._env.KEYCLOAK_AUTH_URL}admin/realms/${this._env.KEYCLOAK_REALM}/users`,
    //     {
    //       json: {
    //         firstName,
    //         lastName,
    //         username: email,
    //         email: email,
    //         enabled: enabled ? "true" : "false",
    //         credentials: password
    //           ? [
    //               {
    //                 type: "password",
    //                 value: password,
    //               },
    //             ]
    //           : [],
    //       },
    //       headers: {
    //         Authorization: `Bearer ${adminToken}`,
    //       },
    //     }
    //   );
    //   if (userStatusCode < 200 || userStatusCode > 299) {
    //     throw new ApolloError("Error building user record", "503");
    //   }
    //   if (userStatusCode === 409) {
    //     throw new ApolloError("User already registered in the system", "409");
    //   }
    //   return this.findUserByEmailKeycloak(email.toLowerCase());
    // }
    // private async fetchValidAdminToken() {
    //   if (this._adminToken && this._adminTokenExpiration > Date.now()) {
    //     return this._adminToken.access_token;
    //   }
    //   if (this._adminToken && this._adminTokenExpiration <= Date.now()) {
    //     const accessToken = await this._retrieveToken();
    //     return accessToken.access_token;
    //   }
    //   const accessToken = await this._retrieveToken();
    //   return accessToken.access_token;
    // }
    // private async _retrieveToken() {
    //   const { body: adminToken } = await this._got.post<RawToken>(
    //     `${this._env.KEYCLOAK_AUTH_URL}realms/master/protocol/openid-connect/token`,
    //     {
    //       form: {
    //         username: this._env.KEYCLOAK_ADMIN_USER,
    //         password: this._env.KEYCLOAK_ADMIN_PASSWORD,
    //         grant_type: "password",
    //         client_id: "admin-cli",
    //         client_secret: this._env.KEYCLOAK_ADMIN_SECRET,
    //       },
    //       responseType: "json",
    //     }
    //   );
    //   this._adminToken = adminToken;
    //   this._adminTokenExpiration =
    //     Date.now() + (adminToken.expires_in * 1000 - 10 * 1000);
    //   return this._adminToken;
    // }
}
