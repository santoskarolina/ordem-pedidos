import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../../address/entities/address.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { Profile } from "../../profile/entities/profile.entity";

@Entity({name:'user',schema:'shopping_order'})
export class User {

  @PrimaryGeneratedColumn({type:'int'})
  user_id: number

  @Column({type: 'varchar', nullable: false, length: 255, name:'name'})
  name:string

  @Column({type: 'varchar', nullable: false, length: 255, name:'email'})
  email: string

  @Column({type: 'varchar', nullable: false, length: 255, name:'phone'})
  phone: string

  @Column({type: 'varchar', nullable: false, length: 11, name:'cpf'})
  cpf: string

  @Column({type: 'varchar', nullable: false, length: 255, name:'password'})
  password: string

  @OneToMany(type => Address, adresses => adresses.user)
  adresses: Address[]

  @OneToMany(type =>Cart, order => order.user)
  orders: Cart[]

  @ManyToMany(type => Profile)
  @JoinTable({
    name: 'user_profile',
    joinColumn: {
      name: "user",
      referencedColumnName: "user_id"
    },
    inverseJoinColumn: {
      name: "profile",
      referencedColumnName: "profile_id"
    }
  })
  profile: Profile[]
}
