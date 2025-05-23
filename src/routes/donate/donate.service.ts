import { Injectable } from '@nestjs/common';
import { CreateDonateDto } from './dto/create-donate.dto';
import { UpdateDonateDto } from './dto/update-donate.dto';
import { errorMessage } from 'src/utils/response';

@Injectable()
export class DonateService {
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
    if(!email) {
      return errorMessage("Email is required",'email');
    }
    if(!image) {
      return errorMessage("Image is required",'image');
    } 
  }
}
