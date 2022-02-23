import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@Entity({name:'category',schema:'shopping_order'})
export class Category{

  @PrimaryGeneratedColumn({type:'int'})
  category_id: number

  @Column({type: 'varchar', nullable: false, length: 255})
  name: string

  @OneToMany(type => Product, product => product.category)
  products: Product[]
}
