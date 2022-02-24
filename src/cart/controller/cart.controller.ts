import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CartService } from '../services/cart.service';
import { CreateOrder } from "../dto/create-order";
import { CreateOrdemItmDto } from "../../order-item/dto/create-ordem-itm.dto";

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() cart: CreateOrder){
    return this.cartService.create(cart)
  }

  @Get()
  find(){
    return this.cartService.find()
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.cartService.findOne(id)
  }

  @Put(':id/add-item')
  addItem(@Param('id') cart_id: number, @Body() item: CreateOrdemItmDto){
    return this.cartService.addItem(cart_id, item)
  }

  @Delete(':id/remove-item/:item_id')
  removeItem(@Param('id') cart_id: number, @Param('item_id') item_id: number){
    return this.cartService.removeItem(cart_id, item_id)
  }
}
