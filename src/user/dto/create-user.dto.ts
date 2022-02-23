import { Role } from "../entities/role.entity";
import { Profiler } from "inspector";
import { Profile } from "../../profile/entities/profile.entity";

export class CreateUserDto {

  name:string
  email: string
  phone: string
  cpf: string
  password: string
  profile: Profile[]
}
