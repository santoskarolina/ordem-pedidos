import { Role } from "../entities/role.entity";

export class CreateUserDto {

  name:string
  email: string
  phone: string
  cpf: string
  password: string
  role: Role
}
