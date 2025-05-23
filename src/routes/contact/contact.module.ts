import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ApiConfigModule } from 'src/config/api-config.module';
import { MailModule } from 'src/email/email.module';

@Module({
  imports : [MailModule,ApiConfigModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}