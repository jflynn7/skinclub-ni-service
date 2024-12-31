import { Injectable } from '@nestjs/common';
import { SuccessResponse } from '../../database/success-response';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as postmark from 'postmark';
import { BookingConfirmationDTO } from '../model/booking-confirmation.dto';

@Injectable()
export class EmailService {
  constructor() {}

  private notificationEmail: string = 'deborah@skinclubni.com';

  private companyFooter = {
    company_name: 'The Skin Club NI',
    company_address: '15 Belgravia Crescent, Bangor, BT19 6XD',
  };

  private templates = {
    welcome: 'welcome',
    confirmation: {
      practitioner: 'booking-confirmation-practitioner',
      client: 'booking-confirmation-v1',
    },
  };

  private sendTo = (emailAddress: string) => ({
    From: 'The Skin Club NI <deborah@skinclubni.com>',
    to: emailAddress,
  });

  private useTemplate = (template: string) => ({
    MessageStream: 'outbound',
    TemplateAlias: template,
  });

  private getClient() {
    return new postmark.ServerClient('cf2c7cdd-a450-4cd0-bf3e-4ccb6574ccbd');
  }

  private useModel = (model: Record<string, any>) => ({
    TemplateModel: {
      ...model,
      ...this.companyFooter,
    },
  });

  async sendPractitionerBookingConfirmation({
    bookingDate,
    bookingType,
    bookingTime,
    clientFirstName,
    clientSurname,
  }: BookingConfirmationDTO) {
    const sendDetail = await this.getClient().sendEmailWithTemplate({
      ...this.sendTo(this.notificationEmail),
      ...this.useTemplate(this.templates.welcome),
      ...this.useModel({
        bookingDate,
        bookingTime,
        bookingType,
        clientFirstName,
        clientSurname,
      }),
    });

    return new SuccessResponse<any>(200, sendDetail);
  }

  async sendWelcomeEmail({ emailAddress, name, username }) {
    const sendDetail = await this.getClient().sendEmailWithTemplate({
      ...this.sendTo(emailAddress),
      ...this.useTemplate(this.templates.confirmation.practitioner),
      ...this.useModel({
        product_name: 'The Skin Club NI',
        name,
        username,
        login_url: 'https://www.skinclubni.com/login',
        action_url: 'https://www.skinclubni.com/profile',
      }),
    });
    return new SuccessResponse<any>(200, sendDetail);
  }
}
