import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Consultation } from '../../consultation/entity/consultation';
import { Appointment } from '../../appointment/entity/appointment';
import { Subscription } from '../../subscription/entity/subscription';
import { IsDate } from 'class-validator';
import { TransformDate } from '../../validators/date-transform.validator';
import { Address } from './address';
import { Upload } from '../../upload/entity/upload';

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

  @OneToOne(() => Address, {
    onUpdate: 'CASCADE',
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  address?: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @OneToOne(() => Upload, {
    onUpdate: 'CASCADE',
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  avatar?: Upload;

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
  id?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  lastUpdated?: Date;
}
