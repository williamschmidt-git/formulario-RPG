import { DataSource } from 'typeorm';
import { DotConfig } from './Config';
import 'reflect-metadata';
import { User } from '../../orm/entities/User';

const AppDataSource = (env: DotConfig) =>
  new DataSource({
    type: 'postgres',
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });

export default AppDataSource;
