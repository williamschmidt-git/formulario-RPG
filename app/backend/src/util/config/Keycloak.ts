import KeycloakConnect = require('keycloak-connect');
import session = require('express-session');

export const memoryStore = new session.MemoryStore();

const config: KeycloakConnect.KeycloakConfig = {
    realm: 'rpg-manager', //di.env.KEYCLOAK_REALM,
    'auth-server-url': 'http://localhost:8080/auth/', //di.env.KEYCLOAK_AUTH_URL,
    'bearer-only': true,
    resource: 'backend', //di.env.KEYCLOAK_RESOURCE,
    credentials: {
        secret: 'SN3lCRW9cOpjkUSlvWNhuzPhNV6SwWXr', //di.env.KEYCLOAK_SECRET,
    },
    'confidential-port': 0,
} as any;

const keycloak = new KeycloakConnect({ store: memoryStore }, config);

export default keycloak;
