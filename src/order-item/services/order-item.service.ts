import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "../entity/order-item.entity";
import { Repository } from "typeorm";
import { CreateOrdemItmDto } from "../dto/create-ordem-itm.dto";
import { ProductService } from "../../product/services/product.service";

@Injectable()
export class OrderItemService {

  constructor(
    @InjectRepository(OrderItem)
    private repository: Repository<OrderItem>,

    private productService: ProductService
  ) { }

  async create(new_order: CreateOrdemItmDto) {
    const order = await this.repository.save(new_order)

    const product = await this.productService.findOne(order.product.product_id)

    order.sub_total = product.price * new_order.quantity

    await this.repository.save(order)
    return order
  }
}
