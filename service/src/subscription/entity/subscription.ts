// subscription.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from '../../user-profile/entity/user-profile';

@Entity()
export class Subscription {
  /**==============================================
   * Entity fields
   **=============================================*/

  @Column()
  name: string;

  @Column()
  price: number;

  /**==============================================
   * Relationships
   **=============================================*/

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.subscriptions)
  userProfile: UserProfile;

  /**==============================================
   * Generated fields
   **=============================================*/

  @PrimaryGeneratedColumn()
  subscriptionId: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdated: Date;
}
