import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../../user/entities/role.entity";

@Entity({name: 'profile', schema: 'shopping_order'})
export class Profile {

  @PrimaryGeneratedColumn({type: 'int'})
  profile_id: number

  @Column({
    type: 'enum',
    enum: Role,
    nullable: false,
  })
  role: Role
}
