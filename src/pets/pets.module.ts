// ** NestJS Imports **
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ** Module Imports **
import { OwnersModule } from 'src/owners/owners.module';

// ** Service Imports **
import { PetsService } from './pets.service';

// ** Resolver Imports **
import { PetsResolver } from './pets.resolver';

// ** Entity Imports **
import { Pet } from './entity/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
