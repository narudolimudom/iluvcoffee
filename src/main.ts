import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Apply the ValidationPipe globally in our main.ts file
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    })
  );
  await app.listen(3000);
}
bootstrap();

// nest g co [nest generate controller]
// nest g s [nest generate service]
// nest g module mo [nest generate module]
// * Generate a DTO class with the Nest CLI
// * --no-spec (no test file needed for DTO's)
// */
// nest g class coffees/dto/create-coffee.dto --no-spec
