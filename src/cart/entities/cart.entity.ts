import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "../../order-item/entity/order-item.entity";
import { User } from "../../user/entities/user.entity";
import { Address } from "../../address/entities/address.entity";

@Entity({name:'cart',schema:'shopping_order'})
export class Cart {

  @PrimaryGeneratedColumn({type: 'int'})
  cart_id: number

  @OneToMany(type => OrderItem, order_items => order_items.cart)
  order_items: OrderItem[]

  @Column({type: 'numeric', nullable: true})
  total: number

  @ManyToOne(type => User, user => user.orders)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(type => Address)
  @JoinColumn({name: 'address_id', referencedColumnName:'address_id'})
  delivery_address: Address
}
