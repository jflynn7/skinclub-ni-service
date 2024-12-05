import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
  database: 'skinclubni',
  synchronize: true,
  autoLoadEntities: true,
};

export const postgresDeployedConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'c9tiftt16dc3eo.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com',
  port: 5432,
  username: 'u71madm4d9k7ic',
  password: 'p9f645b4784a3b6a7dec4157d82a0ed957086419d0282b17b15e310d79797ce35',
  database: 'drmbdgf9clg5a',
  synchronize: true,
  ssl: true,
  autoLoadEntities: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
