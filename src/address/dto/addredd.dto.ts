import { City } from "../../city/entities/city.entity";
import { State } from "../../state/entities/state.entity";
import { User } from "../../user/entities/user.entity";

export class CreateAddressDto {
  house_number: string
  district: string
  cep: string
  street: string
  complement: string
  city: City
  state: State
  user: User
}
