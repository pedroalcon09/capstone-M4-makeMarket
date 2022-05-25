import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Buys } from "./buys.entities";
import { Seller } from "./seller.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column("float")
  price: number;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  url_image: string;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Seller, (seller) => seller.products)
  seller: Seller;

  @ManyToMany(() => Buys, {
    eager: true,
  })
  @JoinTable()
  buys: Buys[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
