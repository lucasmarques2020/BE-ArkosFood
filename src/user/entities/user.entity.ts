import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type:"text"
    })
    name: string
    @Column({
        type:"text"
    })
    email: string
    @Column({
        type:"text"
    })
    password: string

}
