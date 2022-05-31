import { User } from './../orm/entities/User';
export interface CompleteKeyGrant {
    access_token: {
        token: string;
        content: {
            exp: number; // in seconds
            email: string;
            email_verified: string;
            name: string;
            given_name: string;
            family_name: string;
            preferred_username: string;
            sub: string; // USER ID
            // Realm level access
            realm_access: {
                // >> app-admin-general, offline_access, etc.
                roles: string[];
            };
            resource_access: {
                // Key here is the Realm's client ID
                // >> Such as for Realm 'rpg', we have client ID 'rpg-backend-local'
                [key: string]: {
                    roles: string[];
                };
            };
        };
    };
    refresh_token: {
        token: string;
        content: {
            exp: number;
        };
    };
    token_type: 'bearer';
    expires_in: number;
}
export interface RawToken {
    access_token: string;
    expires_in: number; // seconds
    refresh_expires_in: number; // seconds
    refresh_token: string;
    token_type: 'Bearer';
}

export interface UserKeycloak {
    id: string;
    createdTimestamp: number;
    username: string;
    enabled: true;
    totp: false;
    emailVerified: false;
    firstName: string;
    lastName: string;
    email: string;
    disableableCredentialTypes: any[];
    requiredActions: any[];
    notBefore: number;
    roles: string;
    access: {
        manageGroupMembership: boolean;
        view: boolean;
        mapRoles: boolean;
        impersonate: boolean;
        manage: boolean;
    };
}

export interface UserAuthenticated {
    user: User;
    tokens?: RawToken;
}
