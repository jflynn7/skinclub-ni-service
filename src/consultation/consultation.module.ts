import { Module } from '@nestjs/common';
import { ConsultationService } from './service/consultation.service';
import { ConsultationController } from './controller/consultation.controller';

@Module({
  providers: [ConsultationService],
  controllers: [ConsultationController],
})
export class ConsultationModule {}
