import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolidarityPointsService } from './solidarity-points.service';
import { CreateSolidarityPointDto } from './dto/create-solidarity-point.dto';
import { UpdateSolidarityPointDto } from './dto/update-solidarity-point.dto';

@Controller('solidarity-points')
export class SolidarityPointsController {
  constructor(private readonly solidarityPointsService: SolidarityPointsService) {}

  @Post()
  create(@Body() createSolidarityPointDto: CreateSolidarityPointDto) {
    return this.solidarityPointsService.create(createSolidarityPointDto);
  }

  @Get()
  findAll() {
    return this.solidarityPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solidarityPointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolidarityPointDto: UpdateSolidarityPointDto) {
    return this.solidarityPointsService.update(+id, updateSolidarityPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solidarityPointsService.remove(+id);
  }
}
