import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from "../dto/create-category.dto";
import { RoleGuard } from "../../authorization/guards/role.guard";
import { Roles } from "../../authorization/decorator/role.decorator";
import { Role } from "../../user/entities/role.entity";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(RoleGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() category: CreateCategoryDto){
    return this.categoryService.create(category)
  }

  @Get()
  find(){
    return this.categoryService.find()
  }

  @Get(':id/products')
  findOneWithProducts(@Param('id') id: number){
    return this.categoryService.findOneWithProducts(id)
  }
}
