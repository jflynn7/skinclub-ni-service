import { Module } from '@nestjs/common';
import { AppointmentService } from './service/appointment.service';
import { AppointmentController } from './controller/appointment.controller';

@Module({
  providers: [AppointmentService],
  controllers: [AppointmentController]
})
export class AppointmentModule {}
