import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { errorMessage, successMessage } from 'src/utils/response';
import { MailerService } from '@nestjs-modules/mailer';
import { ApiConfigService } from 'src/config/api-config.service';
import { MailService } from 'src/email/mail.service';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailerService : MailService, 

    private readonly configService : ApiConfigService
  ){}
  async create(createContactDto: CreateContactDto) {
    const {
      first_name,
      last_name,
      email,
      phone,
      message
    } = createContactDto

    if(!first_name) {
      return errorMessage("First Name is required",'first_name');
    }    
    if(!last_name) {
      return errorMessage("Last Name is required",'last_name');
    }
    if(!email) {
      return errorMessage("Email is required",'email');
    }
    try {
      const adminEmail = this.configService.getValue('ADMIN_EMAIL');
      const sendMailOptions = {
        adminEmail, ...createContactDto
      }
      this.mailerService.sendMail(sendMailOptions)
      return { success : true,message : "Message has been sent to admin successfully"}

    } catch (err) {
      console.error('Error sending email:', err);
      return errorMessage("Failed to send email", 'email')
    }
  }
}
