export interface DotConfig {
  //app db
  NODE_ENV: string;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;

  //TYPEORM
  TYPEORM_SYNC: boolean;
  TYPEORM_LOGGING: boolean;
  TYPEORM_DATABASE: string;
  SERVER_PORT: number;

  //keycloak
  KEYCLOAK_REALM: string; // rpgManager
  KEYCLOAK_ADMIN_PASSWORD: string;
  KEYCLOAK_AUTH_URL: string; // http://localhost:8080/auth/ when in local
  KEYCLOAK_RESOURCE: string; // backend-local
  KEYCLOAK_SECRET: string;
  KEYCLOAK_ADMIN_USER: string;
  KEYCLOAK_ADMIN_SECRET: string;
}
