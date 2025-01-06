import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';
import { ApiResponse } from '../../database/api-response.type';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      usernameField: 'email',
    });
  }
  async validate(email: string, password: string): Promise<ApiResponse<User>> {
    Logger.warn(`Validating user ${email} with password ${password}`);
    return this.userService.getAuthenticatedUser(email, password);
  }
}
