import { Module } from '@nestjs/common';
import { User } from './entity/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
