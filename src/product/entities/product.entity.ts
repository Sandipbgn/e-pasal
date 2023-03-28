import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string;

    @Column()
    description: string;

    @Column('text', { array: true, nullable: true })
    colors: string[];

    @Column('text', { array: true })
    imageUrls: string[];

    @Column()
    rating: number;

    @Column()
    price: number;

    @Column()
    isFavorite: boolean;

    @Column()
    isPopular: boolean;
}
