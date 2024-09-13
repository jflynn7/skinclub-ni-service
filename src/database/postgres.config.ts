import { User } from '../user/entity/user';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  database: 'skinclubni',
  entities: [User],
  synchronize: true,
};
