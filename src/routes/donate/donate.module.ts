import { Module } from '@nestjs/common';
import { DonateService } from './donate.service';
import { DonateController } from './donate.controller';
import { MailModule } from 'src/email/email.module';
import { ApiConfigModule } from 'src/config/api-config.module';

@Module({
  imports : [MailModule,ApiConfigModule],
  controllers: [DonateController],
  providers: [DonateService],
})
export class DonateModule {}