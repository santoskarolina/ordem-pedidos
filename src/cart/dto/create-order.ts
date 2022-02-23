import { User } from "../../user/entities/user.entity";
import { CreateOrdemItmDto } from "../../order-item/dto/create-ordem-itm.dto";
import { Address } from "../../address/entities/address.entity";

export class CreateOrder {
  order_items: CreateOrdemItmDto[]
  total: number
  user: User
  delivery_address: Address
}
