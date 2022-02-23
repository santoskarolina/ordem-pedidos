import { Module } from '@nestjs/common';
import { OrderItemService } from './services/order-item.service';
import { OrderItemController } from './controller/order-item.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItem } from "./entity/order-item.entity";
import { ProductModule } from "../product/product.module";

@Module({
  imports:  [TypeOrmModule.forFeature([OrderItem]), ProductModule],
  controllers: [OrderItemController],
  providers: [OrderItemService],
  exports: [OrderItemService]
})
export class OrderItemModule {}
