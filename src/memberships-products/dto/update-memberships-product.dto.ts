import { PartialType } from '@nestjs/mapped-types';
import { CreateMembershipsProductDto } from './create-memberships-product.dto';

export class UpdateMembershipsProductDto extends PartialType(CreateMembershipsProductDto) {}
