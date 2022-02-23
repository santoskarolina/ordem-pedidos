import { Category } from "../../category/entities/category.entity";

export class CreateProductDto {
  name: string
  price: number
  description: string
  category: Category
}
