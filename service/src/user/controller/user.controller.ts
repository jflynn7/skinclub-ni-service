import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';
import { ApiResponse } from '../../database/api-response.type';
import { EmailService } from '../../email/service/email.service';
import { BookingConfirmationDTO } from '../../email/model/booking-confirmation.dto';
import { WelcomeEmailDto } from '../../email/model/welcome-email.dto';
import { LocalAuthenticationGuard } from '../guards/local-authentication.guard';
import RequestWithUser from '../model/request-with-user.interface';
import JwtAuthenticationGuard from '../guards/jwt-authentication.guard';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
  ) {}

  @UseGuards(JwtAuthenticationGuard)
  @Get('auth')
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }

  @Get('list')
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  createUser(@Body() user: User): Promise<ApiResponse<User>> {
    return this.userService.registerUser(user);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async logIn(
    @Body() request: { email: string; password: string },
    @Res() response: Response,
  ) {
    const user = await this.userService.findByEmail(request.email);
    console.log('LOGIN', user);
    const cookie = this.userService.getCookieWithJwtToken(user);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return response.send(user);
  }

  @Post('email/welcome')
  sendEmail(@Body() testData: WelcomeEmailDto): Promise<ApiResponse<string>> {
    return this.emailService.sendWelcomeEmail(testData);
  }

  @Post('email/confirmation/practitioner')
  sendBookingConfirmationPractitioner(
    @Body() bookingDetail: BookingConfirmationDTO,
  ): Promise<ApiResponse<string>> {
    return this.emailService.sendPractitionerBookingConfirmation(bookingDetail);
  }
}
