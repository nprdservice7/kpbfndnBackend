import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { successMessage } from 'src/utils/response';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @ApiOperation({
    summary: 'Create contact With Email',
  })
  @ApiResponse({
    status: 200,
    description: 'Contact Created And Email Sent Successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Something went Wrong During the Execution',
  })
  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    try {
      const contact = await this.contactService.create(createContactDto);
      return successMessage(
        'Contact Created And Email Sent Successfully',
        contact,
      );
    } catch (err) {
      throw err;
    }
  }
}