import { Module } from '@nestjs/common';
import { User } from './entity/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { EmailService } from '../email/service/email.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: 'some-jwt-secret',
        signOptions: {
          expiresIn: `6000s`,
        },
      }),
    }),
  ],
  exports: [TypeOrmModule, UserService],
  providers: [UserService, EmailService, LocalStrategy, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
