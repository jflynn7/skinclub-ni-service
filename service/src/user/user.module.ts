import { Module } from '@nestjs/common';
import { User } from './entity/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { EmailService } from '../email/service/email.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  providers: [UserService, EmailService],
  controllers: [UserController],
})
export class UserModule {}
