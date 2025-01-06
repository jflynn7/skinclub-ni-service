import { Injectable } from '@nestjs/common';
import { UserProfile } from '../entity/user-profile';
import { ApiResponse } from '../../database/api-response.type';
import { User } from '../../user/entity/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessResponse } from '../../database/success-response';
import { ErrorResponse } from '../../database/error-response';
import { FileUpload } from '../../upload/model/file-upload.interface';
import { UploadService } from '../../upload/service/upload.service';
import { Upload } from '../../upload/entity/upload';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly uploadService: UploadService,
  ) {}

  async getUserProfile(
    userId: string,
  ): Promise<ApiResponse<UserProfile> | ErrorResponse<any>> {
    const user: User = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['userProfile.avatar'],
    });
    if (user) {
      return new SuccessResponse(200, user.userProfile);
    } else {
      return new ErrorResponse(404, 'No user found', undefined);
    }
  }

  async updateUserProfile(
    userId: string,
    userProfile: UserProfile,
  ): Promise<ApiResponse<User> | ErrorResponse<any>> {
    const user: User = await this.userRepository.findOneBy({ id: userId });
    if (user) {
      user.userProfile = {
        ...user.userProfile,
        ...userProfile,
      };
      return this.saveUserProfile(user);
    } else {
      return new ErrorResponse(404, 'No user found', undefined);
    }
  }

  async updateUserAvatar(
    userId: string,
    avatar: FileUpload,
  ): Promise<ApiResponse<User> | ErrorResponse<any>> {
    const user: User = await this.userRepository.findOneBy({ id: userId });
    const uploadedAvatar = await this.uploadService.uploadPublicFile(
      avatar.buffer,
      avatar.originalname,
    );
    if (user) {
      user.userProfile = {
        ...user.userProfile,
        avatar: uploadedAvatar,
      };
      return this.saveUserProfile(user);
    } else {
      return new ErrorResponse(404, 'No user found', undefined);
    }
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
