import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field()
  dob: string;

  @Field()
  gender: string;

  @Field()
  status: string;

  //   @Field()
  //   createdBy: UserDto;

  @Field()
  createdOn: string;

  //   @Field()
  //   modifiedBy: UserDto;

  @Field()
  modifiedOn: string;
}
