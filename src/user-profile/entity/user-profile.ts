import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Consultation } from '../../consultation/entity/consultation';
import { Appointment } from '../../appointment/entity/appointment';
import { Subscription } from '../../subscription/entity/subscription';
import { IsDate } from 'class-validator';
import { TransformDate } from '../../validators/date-transform.validator';

@Entity()
export class UserProfile {

  /**==============================================
   * Entity Fields
   **=============================================*/

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ type: 'date', nullable: true })
  @IsDate()
  @TransformDate()
  dateOfBirth?: Date;

  @Column({ nullable: true })
  address?: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @OneToMany(() => Consultation, (consultation) => consultation.userProfile)
  consultations?: Consultation[];

  @OneToMany(() => Appointment, (appointment) => appointment.userProfile)
  appointments?: Appointment[];

  @OneToMany(() => Subscription, (subscription) => subscription.userProfile)
  subscriptions?: Subscription[];

  /**==============================================
   * Generated Fields
   **=============================================*/

  @PrimaryGeneratedColumn('uuid')
  profileId?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  lastUpdated?: Date;
}
