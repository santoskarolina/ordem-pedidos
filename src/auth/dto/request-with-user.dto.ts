import { User } from "../../user/entities/user.entity";

export interface RequestWithUserDto extends Request {
  user: User
}
