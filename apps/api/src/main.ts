import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useLogger(app.get(LoggerModule));
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/${globalPrefix}`);
  });

  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
