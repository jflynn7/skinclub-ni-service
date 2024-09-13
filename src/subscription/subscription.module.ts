import { Module } from '@nestjs/common';
import { SubscriptionService } from './service/subscription.service';
import { SubscriptionController } from './controller/subscription.controller';

@Module({
  providers: [SubscriptionService],
  controllers: [SubscriptionController],
})
export class SubscriptionModule {}
