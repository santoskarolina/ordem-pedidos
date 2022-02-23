import { Module } from '@nestjs/common';
import { CityService } from './services/city.service';
import { CityController } from './controller/city.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "../address/entities/address.entity";
import { City } from "./entities/city.entity";

@Module({
  imports:  [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
