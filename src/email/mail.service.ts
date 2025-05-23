import { MailerService } from '@nestjs-modules/mailer/dist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendMail(sendMailOptions) {
    const { adminEmail, first_name, last_name, email, phone, message } =
      sendMailOptions;
    await this.mailerService.sendMail({
      to: adminEmail,
      subject: 'New Contact Form Submission',
      html: `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
    <h2 style="color: #2c3e50;">📩 New Contact Message</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">First Name:</td>
        <td style="padding: 8px 0;">${first_name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Last Name:</td>
        <td style="padding: 8px 0;">${last_name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Email:</td>
        <td style="padding: 8px 0;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
        <td style="padding: 8px 0;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
        <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; font-size: 12px; color: #999;">This message was sent via the contact form on your website.</p>
  </div>
`,
    });
  }
  async sendDonateMail(toemail,admin,sendDonateMail) {
    const {amount,first_name,last_name,email,comment,image} = sendDonateMail;
    await this.mailerService.sendMail({
      to: admin,
      cc : toemail,
      subject: 'New Donation Submission',
      html: `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
    <h2 style="color: #2c3e50;">📩 New Donation Message</h2>
    <table style="width: 100%; border-collapse: collapse;">
    <tr>
        <td style="padding: 8px 0; font-weight: bold;">Your Donation Amount:</td>
        <td style="padding: 8px 0;">${amount}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">First Name:</td>
        <td style="padding: 8px 0;">${first_name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Last Name:</td>
        <td style="padding: 8px 0;">${last_name}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Email:</td>
        <td style="padding: 8px 0;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Comment:</td>
        <td style="padding: 8px 0;">${comment}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Image:</td>
        <td style="padding: 8px 0; white-space: pre-wrap;">${image}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; font-size: 12px; color: #999;">This message was sent via the Donation form on your website.</p>
  </div>
`,
    });
  }
}