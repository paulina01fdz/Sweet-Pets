import { Injectable } from '@nestjs/common';
import { CreateSolidarityPointDto } from './dto/create-solidarity-point.dto';
import { UpdateSolidarityPointDto } from './dto/update-solidarity-point.dto';

@Injectable()
export class SolidarityPointsService {
  create(createSolidarityPointDto: CreateSolidarityPointDto) {
    return 'This action adds a new solidarityPoint';
  }

  findAll() {
    return `This action returns all solidarityPoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solidarityPoint`;
  }

  update(id: number, updateSolidarityPointDto: UpdateSolidarityPointDto) {
    return `This action updates a #${id} solidarityPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} solidarityPoint`;
  }
}
