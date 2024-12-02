import { Module } from '@nestjs/common';
import { SubscriptionService } from './service/subscription.service';
import { SubscriptionController } from './controller/subscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './entity/subscription';


@Module({
  imports: [TypeOrmModule.forFeature([Subscription])],
  exports: [TypeOrmModule],
  providers: [SubscriptionService],
  controllers: [SubscriptionController],
})
export class SubscriptionModule {}
