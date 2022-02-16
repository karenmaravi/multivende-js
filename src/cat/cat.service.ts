import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './cat.interface';
//import { CreateCatDto } from './cat.dto';
import { CreateCatDTO } from "./cat.dto";

@Injectable()
export class CatsService {
  constructor(
    @Inject('CAT_MODEL')
    private catModel: Model<Cat>,
  ) {}

  async create(createCatDTO: CreateCatDTO): Promise<Cat> {
    const createdCat = new this.catModel(CreateCatDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}