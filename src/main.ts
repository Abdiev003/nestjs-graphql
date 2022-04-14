// ** NestJS Imports **
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// ** Module Imports **
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
