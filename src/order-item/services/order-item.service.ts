import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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

    if(!product){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'Product not found'
      }, HttpStatus.BAD_REQUEST)
    }

    order.sub_total = product.price * new_order.quantity

    await this.repository.save(order)
    return order
  }

  async delete(order_item_id: number){
    const order_item = await this.repository.findOne(order_item_id)

    if(!order_item){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'not found',
        message: 'Item order not found.'
      }, HttpStatus.BAD_REQUEST)
    }else{
      try{
        return this.repository.delete(order_item)
      }catch (error) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'database',
          message: 'Order item cannot be deleted'
        }, HttpStatus.BAD_REQUEST)
      }
    }
  }
}
