// ** NestJS Imports **
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

// ** Dto Imports **
import { CreatePetInput } from './create-pet.input';

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
  @Field(() => Int)
  id: number;
}
