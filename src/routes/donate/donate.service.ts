import { Injectable } from '@nestjs/common';
import { CreateDonateDto } from './dto/create-donate.dto';
import { errorMessage } from 'src/utils/response';
import { MailService } from 'src/email/mail.service';
import { ApiConfigService } from 'src/config/api-config.service';

@Injectable()
export class DonateService {
  constructor(
    private readonly mailerService : MailService,

    private readonly configService : ApiConfigService
  ){}
  async create(createDonateDto: CreateDonateDto) {
    const {amount,first_name,last_name,email,comment,image} = createDonateDto;
    if(!amount){
      return errorMessage("Amount is required",'amount')
    }
    if(!first_name) {
      return errorMessage("First Name is required",'first_name');
    } 
    if(!last_name) {
      return errorMessage("Last Name is required",'last_name');
    }
    try {

      const adminEmail = this.configService.getValue('ADMIN_EMAIL');
      const donateMailOptions = { ...createDonateDto };
      this.mailerService.sendDonateMail(email, adminEmail, donateMailOptions)
    } catch (error) {
      console.error("Error sending email : ",error)
      return errorMessage("Failed to send Email","email")
    }
  }
}
