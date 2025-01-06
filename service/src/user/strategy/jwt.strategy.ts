import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../service/user.service';
import { TokenPayload } from '../model/token-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          console.log('REQUEST', request.cookies);
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: 'some-jwt-secret',
    });
  }

  async validate(payload: TokenPayload) {
    console.log('PAYLOAD', payload);
    const user = await this.userService.findById(payload.userId);
    console.log('USER FOUND:', user);
    return user;
  }
}
