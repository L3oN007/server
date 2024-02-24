import { Query, Resolver, Args } from '@nestjs/graphql';
import { SyllabusService } from './syllabus.service';

import { Syllabus } from './syllabus.entity';
import { ApolloError } from 'apollo-server-express';

@Resolver(() => Syllabus)
export class SyllabusResolver {
  constructor(private syllabusService: SyllabusService) {}

  @Query(() => [Syllabus], { name: 'syllabuses' })
  async getSyllabuses(): Promise<Syllabus[]> {
    try {
      const syllabuses = await this.syllabusService.getSyllabuses();
      return syllabuses;
    } catch (error) {
      throw new ApolloError(error.message, error.code);
    }
  }

  @Query(() => Syllabus, { nullable: true, name: 'syllabus' })
  async getSyllabusById(
    @Args('topicCode') id: string,
  ): Promise<Syllabus | null> {
    try {
      const syllabus = await this.syllabusService.getSyllabusById(id);
      return syllabus;
    } catch (error) {
      throw new ApolloError(error.message, error.code);
    }
  }
}
