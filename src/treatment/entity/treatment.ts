// treatment.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entity/user';

@Entity()
export class Treatment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.treatments)
  user: User;
}
