import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Star Wars API')
    .setDescription(
      'API para obtener los atributos e información traducida de la API Star Wars (SWAPI) utilizando AWS Translate. Los Endpoints GET de Star Wars (SWAPI) se consumen, traducen a español y se guardan en una Tabla de DynamoDB.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5000);
}
bootstrap();
