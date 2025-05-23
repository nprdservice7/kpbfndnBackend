// import { MailerModule } from "@nestjs-modules/mailer";
// import { Module } from "@nestjs/common";
// import { ApiConfigModule } from "src/config/api-config.module";
// import { ApiConfigService } from "src/config/api-config.service";

// @Module({
//   imports: [
//     MailerModule.forRootAsync({
//         imports : [ApiConfigModule],
//         useFactory : async (config : ApiConfigService) => ({
//             transport : {
//                 service : config.getValue('EMAIL_SERVICE'),
//                 auth : {
//                     user : config.getValue('EMAIL_USER'),
//                     pass : config.getValue('EMAIL_PASSWORD')
//                 },
//             },
//             defaults: {
//         from: `"Logispark Technologies" <${config.getValue('EMAIL_FROM')}>`,
//       },
//         }),
//         inject : [ApiConfigService],
//     })
//   ],
//   exports: [ MailerModule]
// })

// export class EmailModule {}

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';


@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        },

        template: {
          dir: process.cwd() + '/src/mail/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
