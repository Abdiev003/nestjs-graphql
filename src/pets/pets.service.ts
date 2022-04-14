// ** NestJS Imports **
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// ** Service Imports **
import { OwnersService } from '../owners/owners.service';

// ** Dto Imports **
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';

// ** Entity Imports **
import { Pet } from './entity/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput); // newPet = new Pet();
    return this.petRepository.save(newPet); // INSERT INTO pet (name, type) VALUES (newPet.name, newPet.type)
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find(); // SELECT * pet
  }

  async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOneOrFail(id); // SELECT * FROM pet WHERE id = id
  }

  async update(updatePetInput: UpdatePetInput): Promise<Pet> {
    const pet = await this.petRepository.findOneOrFail(updatePetInput.id);
    const updatedPet = this.petRepository.merge(pet, updatePetInput);
    return this.petRepository.save(updatedPet);
  }

  async remove(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOneOrFail(id);
    this.petRepository.remove(pet);
    return pet;
  }

  getOwner(ownerId: number) {
    return this.ownerService.findOne(ownerId);
  }
}
