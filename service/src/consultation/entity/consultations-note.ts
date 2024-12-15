import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Consultation } from './consultation';

@Entity()
export class ConsultationNote {
  /**==============================================
   * Entity fields
   **=============================================*/

  @Column({ type: 'text' })
  noteContent: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @ManyToOne(() => Consultation, (consultation) => consultation.notes)
  consultation: Consultation;

  /**==============================================
   * Generated fields
   **=============================================*/

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdated: Date;
}
