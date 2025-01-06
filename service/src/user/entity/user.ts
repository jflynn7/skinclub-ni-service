// user.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from '../../user-profile/entity/user-profile';

@Entity()
export class User {
  /**==============================================
   * Entity fields
   **=============================================*/

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @OneToOne(() => UserProfile, {
    onUpdate: 'CASCADE',
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  userProfile: UserProfile;

  /**==============================================
   * Generated fields
   **=============================================*/

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  lastUpdated?: Date;

  constructor() {}
}
