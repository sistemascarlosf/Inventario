import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //habilitar o restringir cuando sea en productivo
  await app.listen(3030);
}
bootstrap();