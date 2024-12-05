import { Module } from '@nestjs/common';
import { EmailService } from './service/email.service';

@Module({
  imports: [],
  providers: [EmailService],
})
export class EmailModule {}
