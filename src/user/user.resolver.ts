import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { ApolloError } from 'apollo-server-express';
import { User } from './type';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    try {
      const users = await this.userService.getUsers();
      return users;
    } catch (err) {
      throw new ApolloError(err.message, err.code);
    }
  }
}
