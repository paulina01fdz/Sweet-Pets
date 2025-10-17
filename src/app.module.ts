import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { MembershipsModule } from './memberships/memberships.module';
import { ProductsModule } from './products/products.module';
import { SolidarityPointsModule } from './solidarity-points/solidarity-points.module';
import { MembershipsProductsModule } from './memberships-products/memberships-products.module';

@Module({
  imports: [UsersModule, PetsModule, MembershipsModule, ProductsModule, SolidarityPointsModule, MembershipsProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
