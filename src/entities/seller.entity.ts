import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  JoinColumn,
} from "typeorm";
import { Product } from "./product.entity";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";

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

  @Column({ nullable: true })
  totalSales: number;

  @Column({ nullable: true })
  grade: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Product, (products) => products.seller_id, {
    eager: true,
  })
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
