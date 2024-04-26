import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,

    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

    allowedHeaders:
      'Content-Type,Authorization,X-Requested-With,Accept-Language',

    optionsSuccessStatus: 204,

    credentials: true,
  });

  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //* Habilitamos la transformation en nuestros pipes. Ex: Se recibe el query como string => number, segun  nuestros dto
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
