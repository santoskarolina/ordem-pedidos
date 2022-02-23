import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../../city/entities/city.entity";

@Entity({name:'state',schema:'shopping_order'})
export class State {

  @PrimaryGeneratedColumn({type: 'int'})
  state_id: number

  @Column({type: 'varchar', nullable: false, length: 255})
  name: string

  @OneToMany(type => City, cities => cities.state)
  cities: City[]
}
