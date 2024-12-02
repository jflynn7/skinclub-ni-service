import { Injectable } from '@nestjs/common';
import { UserProfile } from '../entity/user-profile';
import { ApiResponse } from '../../database/api-response.type';
import { User } from '../../user/entity/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessResponse } from '../../database/success-response';
import { ErrorResponse } from '../../database/error-response';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async updateUserProfile(
    userId: string,
    userProfile: UserProfile,
  ): Promise<ApiResponse<User>> {
    const user: User = await this.userRepository.findOneBy({ id: userId });
    user.userProfile = {
      ...user.userProfile,
      ...userProfile,
    };
    return this.saveUserProfile(user);
  }

  private async saveUserProfile(user: User): Promise<ApiResponse<User>> {
    let response: ApiResponse<User> = undefined;
    try {
      await this.userRepository.save(user);
      response = new SuccessResponse<User>(200, user);
    } catch (error) {
      console.log('ERROR=====>', error.driverError);
      response = new ErrorResponse<User>(
        500,
        'Error updating user profile',
        null,
      );
    }
    return response;
  }
}
