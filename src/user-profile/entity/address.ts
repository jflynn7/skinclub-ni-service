import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Address {
  /**==============================================
   * Entity Fields
   **=============================================*/

  @Column({ nullable: true })
  houseNameNumber: string;

  @Column({ nullable: true })
  streetAddress: string;

  @Column({ nullable: true })
  townOrCity: string;

  @Column({ nullable: true })
  county: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  country: string;

  /**==============================================
   * Generated Fields
   **=============================================*/
  @PrimaryGeneratedColumn('uuid')
  addressId?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  lastUpdated?: Date;
}
