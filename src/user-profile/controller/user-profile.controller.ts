import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserProfileService } from '../service/user-profile.service';
import { UserProfile } from '../entity/user-profile';
import { ApiResponse } from '../../database/api-response.type';
import { User } from '../../user/entity/user';

@Controller('user-profile')
export class UserProfileController {

  constructor(private readonly userProfileService: UserProfileService) {

  }

  @Post('/update/:userId')
  updateUserProfile(
    @Param('userId') userId: string,
    @Body() updateProfileDto: UserProfile,
  ): Promise<ApiResponse<User>> {
    return this.userProfileService.updateUserProfile(userId, updateProfileDto);
  }

}
