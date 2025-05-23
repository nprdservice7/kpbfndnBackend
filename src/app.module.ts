import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiConfigModule } from './config/api-config.module';
import { ContactModule } from './routes/contact/contact.module';
import { DonateModule } from './routes/donate/donate.module';

@Module({
  imports: [ ApiConfigModule,
    ContactModule,
    DonateModule
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
