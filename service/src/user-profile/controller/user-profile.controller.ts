import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../entity/user-profile';
import { ApiResponse } from '../../database/api-response.type';
import { User } from '../../user/entity/user';
import { UploadService } from '../../upload/service/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUpload } from '../../upload/model/file-upload.interface';

@Controller('user-profile')
export class UserProfileController {
  constructor(
    private readonly userProfileService: UserProfileService,
    private readonly uploadService: UploadService,
  ) {}

  @Get(':userId')
  getUserProfile(@Param('userId') userId: string) {
    return this.userProfileService.getUserProfile(userId);
  }

  @Post('/update/:userId')
  updateUserProfile(
    @Param('userId') userId: string,
    @Body() updateProfileDto: UserProfile,
  ): Promise<ApiResponse<User>> {
    return this.userProfileService.updateUserProfile(userId, updateProfileDto);
  }

  @Post('/update/:userId/avatar')
  @UseInterceptors(FileInterceptor('file'))
  updateUserAvatar(
    @Param('userId') userId: string,
    @UploadedFile() avatar: FileUpload,
  ): Promise<ApiResponse<User>> {
    return this.userProfileService.updateUserAvatar(userId, avatar);
  }
}
