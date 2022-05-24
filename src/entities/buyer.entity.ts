import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Buys } from "./buys.entities";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";

@Entity()
export class Buyer {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Buys, {
    eager: true,
  })
  @JoinTable()
  buys: Buys[];

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
