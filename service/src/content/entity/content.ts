import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContentItem } from './content-item';

@Entity()
export class Content {
  /**==============================================
   * Entity fields
   **=============================================*/

  @Column()
  contentKey: string;

  /**==============================================
   * Relationships
   **=============================================*/

  @OneToMany(
    () => ContentItem,
    (contentItem: ContentItem) => contentItem.content,
    { cascade: true, orphanedRowAction: 'delete' },
  )
  contentItems: ContentItem[];

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
