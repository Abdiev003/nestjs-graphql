// ** NestJS Imports **
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// ** Dto Imports **
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

// ** Entity Imports **
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newOwner);
  }

  async findAll() {
    return this.ownerRepository.find();
  }

  async findOne(id: number) {
    return this.ownerRepository.findOneOrFail(id);
  }

  async update(updateOwnerInput: UpdateOwnerInput) {
    const owner = await this.ownerRepository.findOneOrFail(updateOwnerInput.id);
    const updatedOwner = this.ownerRepository.merge(owner, updateOwnerInput);
    return this.ownerRepository.save(updatedOwner);
  }

  async remove(id: number) {
    const owner = await this.ownerRepository.findOneOrFail(id);
    this.ownerRepository.remove(owner);
    return owner;
  }
}
