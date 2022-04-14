// ** NestJS Imports **
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ** Service Imports **
import { OwnersService } from './owners.service';

// ** Resolver Imports **
import { OwnersResolver } from './owners.resolver';

// ** Entity Imports **
import { Owner } from './entities/owner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [OwnersResolver, OwnersService],
  exports: [OwnersService],
})
export class OwnersModule {}
