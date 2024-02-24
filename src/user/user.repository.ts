import { Injectable } from '@nestjs/common';
import { User } from './type';
import axios from 'axios';
import { getAllUserRoute } from 'src/APIRoute';

@Injectable()
export class UserRepository {
  public async findAll(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(getAllUserRoute);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  }
}
