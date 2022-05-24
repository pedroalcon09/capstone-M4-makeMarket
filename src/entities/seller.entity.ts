import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import * as bcrypt from "bcrypt";
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Product, (product) => product.seller_id)
  products: Product[];

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
