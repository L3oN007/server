import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './type';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userRepository.findAll();
      if (users?.length === 0) {
        throw new Error('No record found.');
      }
      return users;
    } catch (error) {
      return error;
    }
  }
}
