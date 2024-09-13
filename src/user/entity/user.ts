// user.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subscription } from '../../subscription/entity/subscription';
import { Order } from '../../order/entity/order';
import { Consultation } from '../../consultation/entity/consultation';
import { Treatment } from '../../treatment/entity/treatment';

@Entity()
export class User {

  @PrimaryGeneratedColumn() private _id: number;

  @Column() private _firstName: string;

  @Column() private _surname: string;

  @Column() private _email: string;

  @Column() private _password: string;

  @OneToMany(() => Subscription, (subscription) => subscription.user)
  subscriptions: Subscription[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Consultation, (consultation) => consultation.user)
  consultations: Consultation[];

  @OneToMany(() => Treatment, (treatment) => treatment.user)
  treatments: Treatment[];

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
