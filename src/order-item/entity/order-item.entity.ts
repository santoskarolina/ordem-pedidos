import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { User } from "../../user/entities/user.entity";

@Entity({name:'order_item', schema:'shopping_order'})
export class OrderItem {

  @PrimaryGeneratedColumn({type: 'int'})
  order_item_id: number

  @ManyToOne(type => Product)
  @JoinColumn({name: 'product_id', referencedColumnName:'product_id'})
  product: Product

  @Column({type:'int',  nullable: false, name: 'quantity'})
  quantity: number

  @Column({type:'numeric', nullable: true, name: 'sub_total'})
  sub_total: number

  @ManyToOne(type => Cart)
  @JoinColumn({name: 'cart_id'})
  cart: Cart
}
