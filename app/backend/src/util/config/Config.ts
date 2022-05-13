export interface DotConfig {
  NODE_ENV: string;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
  TYPEORM_SYNC: boolean;
  TYPEORM_LOGGING: boolean;
  SERVER_PORT: number;
  TYPEORM_DATABASE: string;
}
