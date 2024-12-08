import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Consultation } from './consultation';

@Entity()
export class ConsultationNote {
  @PrimaryGeneratedColumn('uuid')
  note_id: string;

  @ManyToOne(() => Consultation, (consultation) => consultation.notes)
  consultation: Consultation;

  @Column({ type: 'text' })
  note_content: string;

  @CreateDateColumn()
  created_at: Date;
}