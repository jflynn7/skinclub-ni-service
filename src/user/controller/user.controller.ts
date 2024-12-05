import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';
import { ApiResponse } from '../../database/api-response.type';
import { EmailService } from '../../email/service/email.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
  ) {}

  @Get('/list')
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/create')
  createUser(@Body() user: User): Promise<ApiResponse<User>> {
    return this.userService.create(user);
  }

  @Post('/email')
  sendEmail(
    @Body() testData: { name: string; username: string },
  ): Promise<ApiResponse<string>> {
    return this.emailService.sendWelcomeEmail(testData.name, testData.username);
  }
}
