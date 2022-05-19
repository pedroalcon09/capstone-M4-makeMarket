import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { Product } from "./product.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Seller {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  totalSales: number;

  @Column()
  grade: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
