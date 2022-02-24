import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "../dto/create-product.dto";

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>
  ) { }

  create(new_product: CreateProductDto) {
    try{
      return this.repository.save(new_product)
    }catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'created',
        message: 'Failed to save new product'
      }, HttpStatus.BAD_REQUEST)
    }
  }

  find(){
    return this.repository.find({relations: ['category']})
  }

  async findOne(id:number){
    const product = await this.repository.findOne(id)
    return product
  }
}
