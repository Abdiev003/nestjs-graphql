// ** NestJS Imports **
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// ** Entity Imports **
import { Owner } from '../../owners/entities/owner.entity';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field((type) => Int)
  ownerId: number;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;
}
