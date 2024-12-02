import { Module } from '@nestjs/common';
import { ConsultationService } from './service/consultation.service';
import { ConsultationController } from './controller/consultation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './entity/consultation';
import { UserProfile } from '../user-profile/entity/user-profile';
import { Appointment } from '../appointment/entity/appointment';
import { ConsultationNote } from './entity/consultations-note';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Consultation,
      UserProfile,
      Appointment,
      ConsultationNote,
    ]),
  ],
  exports: [TypeOrmModule],
  providers: [ConsultationService],
  controllers: [ConsultationController],
})
export class ConsultationModule {}
