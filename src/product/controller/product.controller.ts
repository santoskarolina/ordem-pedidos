import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ProductService } from '../services/product.service';
import { CreateProductDto } from "../dto/create-product.dto";
import { RoleGuard } from "../../auth/guards/role.guard";
import { Roles } from "../../auth/decorator/role.decorator";
import { Role } from "../../user/entities/role.entity";

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(RoleGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() product: CreateProductDto ){
    return this.productService.create(product)
  }

  @Get()
  find(){
    return this.productService.find()
  }
}
