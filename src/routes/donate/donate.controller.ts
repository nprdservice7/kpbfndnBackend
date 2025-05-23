import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonateService } from './donate.service';
import { CreateDonateDto } from './dto/create-donate.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { successMessage } from 'src/utils/response';

@ApiTags("Donate")
@Controller('donate')
export class DonateController {
  constructor(private readonly donateService: DonateService) {}

  @ApiOperation({ 
    summary : 'Donate Created Successfully with Email sent'
  })
   @ApiResponse({
      status: 200,
      description: 'Donation Created And Email Sent Successfully',
    })
    @ApiResponse({
    status: 400,
    description: 'Something went Wrong During the Execution',
  })
  @Post()
  async create(@Body() createDonateDto: CreateDonateDto) {
    try {
      const donation = await this.donateService.create(createDonateDto);
      return successMessage(
        'Donation Created And Email Sent Successfully',
        donation
      )
    } catch (err) {
      throw err;
    }
  }
}
