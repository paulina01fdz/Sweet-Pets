import { PartialType } from '@nestjs/mapped-types';
import { CreateSolidarityPointDto } from './create-solidarity-point.dto';

export class UpdateSolidarityPointDto extends PartialType(CreateSolidarityPointDto) {}
