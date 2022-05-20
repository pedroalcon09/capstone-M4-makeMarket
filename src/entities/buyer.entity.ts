import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Buys } from "./buys.entities";
import { v4 as uuid } from "uuid";

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

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToMany(() => Buys)
  @JoinTable()
  buys: Buys[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
