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
    TYPEORM_TEST_DATABASE: string;
    SERVER_PORT: number;
}
