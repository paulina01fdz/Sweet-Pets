import { Module } from '@nestjs/common';
import { SolidarityPointsService } from './solidarity-points.service';
import { SolidarityPointsController } from './solidarity-points.controller';

@Module({
  controllers: [SolidarityPointsController],
  providers: [SolidarityPointsService],
})
export class SolidarityPointsModule {}
