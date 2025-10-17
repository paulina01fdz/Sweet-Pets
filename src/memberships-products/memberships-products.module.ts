import { Module } from '@nestjs/common';
import { MembershipsProductsService } from './memberships-products.service';
import { MembershipsProductsController } from './memberships-products.controller';

@Module({
  controllers: [MembershipsProductsController],
  providers: [MembershipsProductsService],
})
export class MembershipsProductsModule {}
