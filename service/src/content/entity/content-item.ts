import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Content } from './content';

@Entity()
export class ContentItem {
  /**==============================================
   * Entity fields
   **=============================================*/

  @Column({ nullable: true })
  contentOrder: number;

  @Column()
  value: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @ManyToOne(() => Content, (content: Content) => content.contentItems)
  content: Content;

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
