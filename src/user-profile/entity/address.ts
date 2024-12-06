import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Address {

  /**==============================================
   * Entity Fields
   **=============================================*/


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
