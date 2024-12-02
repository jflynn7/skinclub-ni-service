import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { Consultation } from '../../consultation/entity/consultation';

@Entity()
export class Treatment {

  /**==============================================
   * Entity fields
   **=============================================*/

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  duration: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  /**==============================================
   * Relationships
   **=============================================*/

  @ManyToOne(() => Consultation, (consultation) => consultation.treatments)
  consultation: Consultation;

  /**==============================================
   * Generated fields
   **=============================================*/

  @PrimaryGeneratedColumn('uuid')
  treatmentId: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  lastUpdated: Date;
}
