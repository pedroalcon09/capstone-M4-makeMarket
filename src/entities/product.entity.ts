import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { Seller } from "./seller.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  url_image: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Seller, (seller) => seller.products)
  seller: Seller;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
