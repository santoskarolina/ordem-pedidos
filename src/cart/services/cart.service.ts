import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "../entities/cart.entity";
import { Repository } from "typeorm";
import { OrderItemService } from "../../order-item/services/order-item.service";
import { CreateOrder } from "../dto/create-order";
import { CreateOrdemItmDto } from "../../order-item/dto/create-ordem-itm.dto";

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

  async addItem(cart_id: number, item: CreateOrdemItmDto){
    let cart = await this.cartRepository.findOne(cart_id, {
      relations: ['order_items']
    })

    if(!cart){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'Cart not found.'
      },HttpStatus.BAD_REQUEST)
    }else{
      item.cart = cart
      const new_item = await this.orderService.create(item)

      cart.order_items.push(new_item)

      await this.cartRepository.save(cart)

      return await this.cartRepository.findOne(cart_id, {
        relations: ['order_items', 'order_items.product', 'user', 'delivery_address']
      })
    }
  }

  async removeItem(cart_id: number, item_id: number) {
    let cart = await this.cartRepository.findOne(cart_id, {
      relations: ['order_items']
    })

    if(!cart){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'Cart not found.'
      },HttpStatus.BAD_REQUEST)
    }else{
      cart.order_items.filter(item => item.order_item_id != item_id)
      await this.orderService.delete(item_id)
      await this.cartRepository.save(cart)

      return cart
    }
  }
}
