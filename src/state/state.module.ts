import { Module } from '@nestjs/common';
import { StateService } from './services/state.service';
import { StateController } from './controller/state.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "../address/entities/address.entity";
import { State } from "./entities/state.entity";

@Module({
  imports:  [TypeOrmModule.forFeature([State])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
