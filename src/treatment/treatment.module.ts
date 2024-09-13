import { Module } from '@nestjs/common';
import { TreatmentService } from './service/treatment.service';
import { TreatmentController } from './controller/treatment.controller';

@Module({
  providers: [TreatmentService],
  controllers: [TreatmentController],
})
export class TreatmentModule {}
