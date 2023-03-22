import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column({ default: () => `to_char (now()::timestamp at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"')` })
    createdAt: string
}
