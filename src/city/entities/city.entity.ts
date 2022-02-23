import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { State } from "../../state/entities/state.entity";

@Entity({name:'city', schema:'shopping_order'})
export class City {

  @PrimaryGeneratedColumn({type: 'int'})
  city_id: number

  @Column({type: 'varchar', nullable: false, length: 255})
  name: string

  @ManyToOne(type => State, state => state.cities)
  @JoinColumn({name:'state_id'})
  state: State
}
