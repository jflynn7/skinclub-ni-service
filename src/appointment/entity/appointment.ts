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
export class Appointment {
  /**==============================================
   * Entity fields
   **=============================================*/

  @Column({ type: 'timestamp' })
  appointmentDate: Date;

  @Column()
  status: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.appointments)
  userProfile: UserProfile;

  /**==============================================
   * Generated fields
   **=============================================*/

  @PrimaryGeneratedColumn('uuid')
  appointmentId: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdated: Date;
}
