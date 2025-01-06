import { Module } from '@nestjs/common';
import { UserProfileService } from './service/user-profile.service';
import { UserProfileController } from './controller/user-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user';
import { UserProfile } from './entity/user-profile';
import { Address } from './entity/address';
import { UploadService } from '../upload/service/upload.service';
import { Upload } from '../upload/entity/upload';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile, Address, Upload])],
  exports: [TypeOrmModule],
  providers: [UserProfileService, UploadService],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
