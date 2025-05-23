import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './config/api-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const apiConfigService = app.get(ApiConfigService)

  console.log(
    `Api Started in ${apiConfigService.getValue('HOST')}:${apiConfigService.getValue('PORT')}`,
  );

  await app.listen(apiConfigService.getValue('PORT'));
}
bootstrap();
