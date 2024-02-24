import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UserDto {
  @Field()
  name: string;
}

@ObjectType()
class LearningObjective {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

@ObjectType()
class TrainingUnit {
  @Field()
  unitCode: string;

  @Field()
  unitName: string;

  @Field((type) => Int)
  dayNumber: number;

  @Field((type) => [TrainingContent])
  trainingContents: TrainingContent[];
}

@ObjectType()
class TrainingContent {
  @Field()
  content: string;

  @Field()
  deliveryType: string;

  @Field((type) => Int)
  duration: number;

  @Field()
  trainingFormat: string;

  @Field((type) => [LearningObjective])
  learningObjectives: LearningObjective[];
}
@ObjectType()
export class Syllabus {
  @Field()
  topicCode: string;

  @Field()
  topicName: string;

  @Field()
  publishStatus: string;

  @Field((type) => Int)
  version: number;

  @Field((type) => UserDto)
  createdBy: UserDto;

  @Field()
  createdOn: string;

  @Field((type) => UserDto)
  modifiedBy: UserDto;

  @Field()
  modifiedOn: string;

  @Field((type) => [LearningObjective])
  learningObjectives: LearningObjective[];

  @Field((type) => [TrainingUnit])
  trainingUnits: TrainingUnit[];
}
