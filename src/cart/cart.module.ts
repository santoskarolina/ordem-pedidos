import { Module } from '@nestjs/common';
import { CartService } from './services/cart.service';
import { CartController } from './controller/cart.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "./entities/cart.entity";
import { OrderItemModule } from "../order-item/order-item.module";

@Module({
  imports:  [TypeOrmModule.forFeature([Cart]), OrderItemModule],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
