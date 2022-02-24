import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controller/product.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { AuthorizationModule } from "../authorization/authorization.module";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";

@Module({
  imports:  [TypeOrmModule.forFeature([Product]), UserModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}
