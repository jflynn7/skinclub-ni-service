import { Module } from '@nestjs/common';
import { TreatmentService } from './service/treatment.service';
import { TreatmentController } from './controller/treatment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treatment } from './entity/treatment';

@Module({
  imports: [TypeOrmModule.forFeature([Treatment])],
  exports: [TypeOrmModule],
  providers: [TreatmentService],
  controllers: [TreatmentController],
})
export class TreatmentModule {}
