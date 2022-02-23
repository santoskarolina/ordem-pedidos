import { Product } from "../../product/entities/product.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { User } from "../../user/entities/user.entity";

export class CreateOrdemItmDto {
  product: Product
  quantity: number
  sub_total: number
  cart: Cart
}
