import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entities/category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "../dto/create-category.dto";

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>
  ) { }

  create(new_category: CreateCategoryDto){
    try{
      return this.repository.save(new_category)
    }catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'created',
        message: 'Failed to save new category'
      }, HttpStatus.BAD_REQUEST)
    }
  }

  find(){
    return this.repository.find()
  }
}
