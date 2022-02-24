import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controller/category.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { UserModule } from "../user/user.module";

@Module({
  imports:  [TypeOrmModule.forFeature([Category]), UserModule],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
