import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembershipsProductsService } from './memberships-products.service';
import { CreateMembershipsProductDto } from './dto/create-memberships-product.dto';
import { UpdateMembershipsProductDto } from './dto/update-memberships-product.dto';

@Controller('memberships-products')
export class MembershipsProductsController {
  constructor(private readonly membershipsProductsService: MembershipsProductsService) {}

  @Post()
  create(@Body() createMembershipsProductDto: CreateMembershipsProductDto) {
    return this.membershipsProductsService.create(createMembershipsProductDto);
  }

  @Get()
  findAll() {
    return this.membershipsProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membershipsProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembershipsProductDto: UpdateMembershipsProductDto) {
    return this.membershipsProductsService.update(+id, updateMembershipsProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membershipsProductsService.remove(+id);
  }
}
