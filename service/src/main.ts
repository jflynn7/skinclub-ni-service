import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as process from 'node:process';
import { config } from 'aws-sdk';
import { getConfig } from './config/config.service';
const cookieParser = require('cookie-parser');

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(cookieParser());
  config.update({
    accessKeyId: getConfig(process.env.APP_ENV).AWS_UPLOAD_ACCESS_ID,
    secretAccessKey: getConfig(process.env.APP_ENV).AWS_UPLOAD_ACCESS_KEY,
    region: getConfig(process.env.APP_ENV).AWS_REGION,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
