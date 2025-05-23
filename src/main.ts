import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './config/api-config.service';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const apiConfigService = app.get(ApiConfigService)

    const customOptions: SwaggerCustomOptions = {
    swaggerOptions: { docExpansion: 'none', persistAuthorization: true },
    customCss: '.swagger-ui .topbar {display: none}',
    customSiteTitle: apiConfigService.getValue('API_TITLE'),
  };

  const options = new DocumentBuilder()
    .setTitle(apiConfigService.getValue('API_TITLE'))
    .setDescription(apiConfigService.getValue('API_DESCRIPTION'))
    .setVersion(apiConfigService.getValue('API_VERSION'))
    .addBearerAuth()
    .addServer(
      `${apiConfigService.getValue('HOST')}:${apiConfigService.getValue('PORT')}`,
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document, customOptions);
  console.log(
    `App started in ${apiConfigService.getValue('HOST')}:${apiConfigService.getValue('PORT')}`,
  );

  await app.listen(apiConfigService.getValue('PORT'));
}
bootstrap();
