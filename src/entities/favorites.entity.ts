import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Buyer } from "./buyer.entity";
import { Product } from "./product.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Favorites {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Buyer, {
    eager: true,
  })
  @JoinTable()
  buyer_id: string;

  @ManyToMany(() => Product, {
    eager: true,
  })
  @JoinTable()
  product_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
