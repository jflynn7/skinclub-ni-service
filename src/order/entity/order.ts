// order.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entity/user';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
