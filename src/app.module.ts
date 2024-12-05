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
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConfig),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
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
