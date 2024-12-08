import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getConfig } from '../config/config.service';

const sslConfig = (env: string) =>
  env === 'production'
    ? {
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }
    : {};

export const postgresConfig = (
  env: string,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: getConfig(env).DATABASE_HOST,
  port: 5432,
  username: getConfig(env).DATABASE_USERNAME,
  password: getConfig(env).DATABASE_PASSWORD,
  database: getConfig(env).DATABASE_NAME,
  synchronize: true,
  autoLoadEntities: true,
  ...sslConfig(env),
});
