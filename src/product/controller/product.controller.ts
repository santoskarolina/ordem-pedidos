import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from '../services/product.service';
import { CreateProductDto } from "../dto/create-product.dto";

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: CreateProductDto ){
    return this.productService.create(product)
  }

  @Get()
  find(){
    return this.productService.find()
  }
}
