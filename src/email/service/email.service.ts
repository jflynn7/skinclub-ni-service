import { Injectable } from '@nestjs/common';
import { SuccessResponse } from '../../database/success-response';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as postmark from 'postmark';
@Injectable()
export class EmailService {
  constructor() {}

  async sendWelcomeEmail(name, username) {
    const client = new postmark.ServerClient(
      'cf2c7cdd-a450-4cd0-bf3e-4ccb6574ccbd',
    );
    const sendDetail = await client.sendEmailWithTemplate({
      From: 'The Skin Club NI <joe@prettyfly.it>',
      To: 'joe@prettyfly.it',
      MessageStream: 'outbound',
      TemplateAlias: 'welcome',
      TemplateModel: {
        product_name: 'The Skin Club NI',
        name,
        username,
        login_url: 'https://www.skinclubni.com/login',
        action_url: 'https://www.skinclubni.com/profile',
        company_name: 'The Skin Club NI',
        company_address: '15 Belgravia Crescent, Bangor, BT19 6XD',
      },
    });
    return new SuccessResponse<any>(200, sendDetail);
  }
}
