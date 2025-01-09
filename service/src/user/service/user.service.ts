import { Injectable, Logger } from '@nestjs/common';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccessResponse } from '../../database/success-response';
import { ErrorResponse } from '../../database/error-response';
import { ApiResponse } from '../../database/api-response.type';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '../model/token-payload.interface';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async registerUser(user: User): Promise<ApiResponse<User>> {
    const duplicateUsers: User[] = await this.checkForDuplicates(user);
    const hashedUser: User = await this.hashUser(user);
    if (duplicateUsers?.length === 0) {
      await this.userRepository.save(hashedUser);
      return new SuccessResponse<User>(200, hashedUser);
    } else {
      return new ErrorResponse<User>(500, 'User already exists', user);
    }
  }

  public async getAuthenticatedUser(
    email: string,
    password: string,
  ): Promise<ApiResponse<User | undefined>> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      return this.validateUser(user, password);
    } else {
      Logger.error(`No user found with email address: ${email}`);
      return new ErrorResponse(
        400,
        'Incorrect credentials provided',
        undefined,
      );
    }
  }

  /**
   * Validate the attempted login against the stored password.
   * @param user
   * @param password
   * @private
   */
  private async validateUser(
    user: User,
    password: string,
  ): Promise<ApiResponse<User>> {
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (isPasswordMatching) {
      Logger.log(`${user.email} verified successfully`);
      user.password = undefined;
      return new SuccessResponse<User>(200, user);
    } else {
      Logger.error(
        `Password for user ${user.email} does not match stored password.`,
      );
      return new ErrorResponse(
        400,
        'Incorrect credentials provided',
        undefined,
      );
    }
  }

  public getCookieWithJwtToken(user: User) {
    console.log('USER ID', user.id);
    const token = this.jwtService.sign({ userId: user.id, email: user.email });
    console.log('TOKEN', token);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=6000s`;
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }

  public async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  /**
   * Hashes the users password before saving.
   * @param user
   * @private
   */
  private async hashUser(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return {
      ...user,
      password: hashedPassword,
    };
  }

  private async checkForDuplicates(user: User) {
    return this.userRepository.find({ where: [{ email: user.email }] });
  }
}
