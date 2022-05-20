import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"

@Entity()
export class Category {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    created_at: Date

    @Column()
    updated_at: Date

    constructor(){
        if(!this.id) {
            this.id = uuidv4()
        }
        if(!this.created_at) {
            this.created_at = new Date()
        }
        if(!this.updated_at) {
            this.updated_at = new Date()
        }
    }
}