import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "../entities/cart.entity";
import { Repository } from "typeorm";
import { OrderItemService } from "../../order-item/services/order-item.service";
import { CreateOrder } from "../dto/create-order";

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    private orderService: OrderItemService
  ) { }

  async create(new_cart: CreateOrder){
    const cart = await this.cartRepository.save(new_cart)
    cart.total = 0

    let items: any = []
    for(let i = 0; i < new_cart.order_items.length; i++){
      items = await this.orderService.create(new_cart.order_items[i])
      new_cart.total += new_cart.order_items[i].sub_total
    }

    cart.order_items.push(items)
    await this.cartRepository.save(cart)
    return cart
  }

  find(){
    return this.cartRepository.find({relations: ['user']})
  }

  async findOne(id: number){
    const order = await this.cartRepository.findOne(id, {
      relations: ['order_items', 'order_items.product', 'user', 'delivery_address']
    })
    return order
  }
}
