import { Injectable } from '@nestjs/common';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccessResponse } from '../../database/success-response';
import { ErrorResponse } from '../../database/error-response';
import { ApiResponse } from '../../database/api-response.type';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['userProfile'] });
  }

  findOne(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(user: User): Promise<ApiResponse<User>> {
    const duplicateUsers = await this.checkForDuplicates(user);
    const isValid = await validate(user as User);
    console.log('VALID', isValid);
    if (duplicateUsers?.length === 0) {
      await this.userRepository.save(user);
      return new SuccessResponse<User>(200, user);
    } else {
      return new ErrorResponse<User>(500, 'User already exists', user);
    }
  }

  private async checkForDuplicates(user: User) {
    return this.userRepository.find({ where: [{ email: user.email }] });
  }
}
