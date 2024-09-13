import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/create')
  createUser(): Promise<User[]> {
    const user: User = new User();
    user.firstName = 'Joe';
    user.surname = 'Flynn';
    user.email = 'joe@prettyfly.it';
    return this.userService.create(user);
  }
}
