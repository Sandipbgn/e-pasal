import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.useGlobalPipes(
    new ValidationPipe({ transform: true })
  )
}
bootstrap();




// PGHOST='ep-red-fire-236896.ap-southeast-1.aws.neon.tech'
// PGDATABASE='neondb'
// PGUSER='iamsbgn'
// PGPASSWORD='i9kPtW7jICYl'
// ENDPOINT_ID='epasal'