// ** NestJS Imports **
import { Field, InputType, Int } from '@nestjs/graphql';

// ** Third Party Imports **
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
