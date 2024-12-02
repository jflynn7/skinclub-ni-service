// user.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from '../../user-profile/entity/user-profile';
import { IsEmail, IsStrongPassword } from 'class-validator';

@Entity()
export class User {

  /**==============================================
   * Entity fields
   **=============================================*/

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
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

  @PrimaryGeneratedColumn('uuid') id: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  lastUpdated?: Date;

  constructor() {}
}
