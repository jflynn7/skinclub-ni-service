// consultation.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entity/user';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  notes: string;

  @ManyToOne(() => User, (user) => user.consultations)
  user: User;
}
