import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';
import { ApiResponse } from '../../database/api-response.type';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/create')
  createUser(@Body() user: User): Promise<ApiResponse<User>> {
    return this.userService.create(user);
  }
}
