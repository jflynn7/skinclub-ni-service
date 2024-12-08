import { Module } from '@nestjs/common';
import { UserProfileService } from './service/user-profile.service';
import { UserProfileController } from './controller/user-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user';
import { UserProfile } from './entity/user-profile';
import { Address } from './entity/address';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile, Address])],
  exports: [TypeOrmModule],
  providers: [UserProfileService],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
