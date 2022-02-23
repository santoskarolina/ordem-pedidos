import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CartService } from '../services/cart.service';
import { CreateOrder } from "../dto/create-order";

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
}
