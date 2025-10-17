import { Injectable } from '@nestjs/common';
import { CreateMembershipsProductDto } from './dto/create-memberships-product.dto';
import { UpdateMembershipsProductDto } from './dto/update-memberships-product.dto';

@Injectable()
export class MembershipsProductsService {
  create(createMembershipsProductDto: CreateMembershipsProductDto) {
    return 'This action adds a new membershipsProduct';
  }

  findAll() {
    return `This action returns all membershipsProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membershipsProduct`;
  }

  update(id: number, updateMembershipsProductDto: UpdateMembershipsProductDto) {
    return `This action updates a #${id} membershipsProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} membershipsProduct`;
  }
}
