import { HttpModule } from '@nestjs/axios';
import { Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { LoggerController } from './logger.controller';
import { LoggerInterceptor } from './logger.interceptor';

@Module({
  imports: [HttpModule],
  controllers: [LoggerController],
  providers: [
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ]
})
export class LoggerModule {}
