import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from "typeorm";
import { Buyer } from "./buyer.entity";
import { Product } from "./product.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Buys {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("boolean", { default: false })
  paid: boolean;

  @Column({ nullable: true })
  grade: number;

  @Column({ nullable: true })
  feedback: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => Buyer, (buyer) => buyer.id)
  buyer_id: string;

  @ManyToMany(() => Product, (product) => product.id)
  product_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
