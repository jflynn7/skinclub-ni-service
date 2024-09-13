import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { postgresConfig } from './database/postgres.config';
import { ConsultationModule } from './consultation/consultation.module';
import { SubscriptionModule } from './src/subscription/subscription.module';
import { TreatmentModule } from './treatment/treatment.module';
import { ConsultationModule } from './consultation/consultation.module';
import { OrderModule } from './order/order.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { SubscriptionModule } from './subscription/subscription.module';
import { SrcModule } from './users/joeflynn/projects/skinclub-ni-service/src/src.module';
import { TestModule } from './users/joeflynn/projects/skinclub-ni-service/scripts../src/test/test.module';
import { SubscriptionModule } from './users/joeflynn/projects/skinclub-ni-service../src/subscription/subscription.module';
import { SubscriptionModule } from './src/subscription/subscription.module';
import { SubscriptionModule } from './src/subscription/subscription.module';
import { SubscriptionModule } from './src/subscription/subscription.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresConfig),
    UserModule,
    ConsultationModule,
    SubscriptionModule,
    TestModule,
    SrcModule,
    OrderModule,
    TreatmentModule,
  ],
  controllers: [AppController, SubscriptionController],
  providers: [AppService, SubscriptionService],
})
export class AppModule {}
