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
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
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
// nest g class events/entities/event.entity --no-spec

// migration
// npx typeorm migration:create src/migrations/CoffeeRefactor


// npm run build

// Run migration(s)
// npx typeorm migration:run -d dist/typeorm-cli.config

// REVERT migration(s)
// npx typeorm migration:revert -d dist/typeorm-cli.config

// Let TypeOrm generate migrations (for you)
// npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config


// npm i @nestjs/config

// Install neccessary dependencies
// $ npm install @hapi/joi
// $ npm install --save-dev @types/hapi__joi