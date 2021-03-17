import {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from "typeorm"

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firtsname: string;
    @Column()
    lastname:string;
}