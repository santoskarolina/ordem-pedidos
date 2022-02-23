import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from "../dto/create-category.dto";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() category: CreateCategoryDto){
    return this.categoryService.create(category)
  }

  @Get()
  find(){
    return this.categoryService.find()
  }
}
