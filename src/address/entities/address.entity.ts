import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../../city/entities/city.entity";
import { State } from "../../state/entities/state.entity";
import { User } from "../../user/entities/user.entity";

@Entity({name:'address',schema:'shopping_order'})
export class Address {

  @PrimaryGeneratedColumn({type:'int'})
  address_id: number

  @Column({type: 'varchar', nullable: false, length: 255, name:'house_number'})
  house_number: string

  @Column({type: 'varchar', nullable: false, length: 255, name:'district'})
  district: string

  @Column({type: 'varchar', nullable: false, length: 7, name:'cep'})
  cep: string

  @Column({type: 'varchar', nullable: false, length: 255, name:'street'})
  street: string

  @Column({type: 'varchar', nullable: false, length: 255, name:'complement'})
  complement: string

  @ManyToOne( type =>  City )
  @JoinColumn({name:'city_id', referencedColumnName:'city_id'})
  city: City

  @ManyToOne( type =>  State )
  @JoinColumn({name:'state_id', referencedColumnName:'state_id'})
  state: State

  @ManyToOne(type => User, user => user.adresses)
  @JoinColumn({name:'user_id', referencedColumnName:'user_id'})
  user: User
}
