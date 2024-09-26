import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// nest g co [nest generate controller]
// nest g s [nest generate service]
// nest g module mo [nest generate module]
