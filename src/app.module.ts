import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { postgresConfig } from './database/postgres.config';
import { TreatmentModule } from './treatment/treatment.module';
import { ConsultationModule } from './consultation/consultation.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { AppointmentModule } from './appointment/appointment.module';
import { EmailModule } from './email/email.module';
import * as process from 'node:process';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConfig(process.env.APP_ENV)),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
    UserModule,
    ConsultationModule,
    SubscriptionModule,
    TreatmentModule,
    UserProfileModule,
    AppointmentModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
