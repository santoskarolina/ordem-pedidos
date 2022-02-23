import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controller/category.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "../address/entities/address.entity";
import { Category } from "./entities/category.entity";

@Module({
  imports:  [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
