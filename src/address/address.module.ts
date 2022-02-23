import { Module } from '@nestjs/common';
import { AddressService } from './services/address.service';
import { AddressController } from './controller/address.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "./entities/address.entity";

@Module({
  imports:  [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService]
})
export class AddressModule {}
