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

  @Column()
  status: string;

  @Column()
  grade: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  feedback: string;

  @ManyToMany(() => Buyer)
  @JoinTable()
  buyer: Buyer[];

  @ManyToMany(() => Product)
  @JoinTable()
  product: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
