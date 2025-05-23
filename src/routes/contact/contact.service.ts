import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { errorMessage } from 'src/utils/response';

@Injectable()
export class ContactService {
  // constructor(
  //   private readonly emailService
  // ){}
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
  }

  findAll() {
    return `This action returns all contact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
