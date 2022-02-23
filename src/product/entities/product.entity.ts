import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";
import { OrderItem } from "../../order-item/entity/order-item.entity";

@Entity({name:'product',schema:'shopping_order'})
export class Product {

  @PrimaryGeneratedColumn({type: 'int'})
  product_id: number

  @Column({type: 'varchar', nullable: false, length: 255})
  name: string

  @Column({type: 'numeric', nullable: false})
  price: number

  @Column({type: 'varchar', nullable: false, length: 255})
  description: string

  @ManyToOne(type => Category, category => category.products)
  @JoinColumn({name: 'category_id', referencedColumnName: 'category_id'})
  category: Category

  @OneToMany(type => OrderItem, order_itens => order_itens.product)
  order_itens: OrderItem[]
}
