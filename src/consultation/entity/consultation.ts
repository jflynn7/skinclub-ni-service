import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Treatment } from '../../treatment/entity/treatment';
import { ConsultationNote } from './consultations-note';
import { UserProfile } from '../../user-profile/entity/user-profile';
import { Appointment } from '../../appointment/entity/appointment';

@Entity()
export class Consultation {

  /**==============================================
   * Entity fields
   **=============================================*/

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  consultant: string;

  @Column({ type: 'text', nullable: true })
  analysisSummary: string;

  @Column({ type: 'text', nullable: true })
  recommendations: string;

  @Column({ type: 'timestamp', nullable: true })
  followUpDate: Date;

  /**==============================================
   * Relationships
   **=============================================*/

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.consultations)
  userProfile: UserProfile;

  @OneToMany(() => Treatment, (treatment) => treatment.consultation)
  treatments: Treatment[];

  @OneToMany(() => Appointment, (appointment) => appointment.consultation)
  appointments: Appointment[];

  @OneToMany(() => ConsultationNote, (note) => note.consultation)
  notes: ConsultationNote[];

  /**==============================================
   * Generated fields
   **=============================================*/

  @PrimaryGeneratedColumn('uuid')
  consultationId: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdated: Date;
}
