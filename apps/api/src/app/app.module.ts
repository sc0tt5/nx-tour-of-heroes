import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { DemoOneController } from './demo-one/demo-one.controller';
import { DemoOneService } from './demo-one/demo-one.service';
import { HttpErrorFilter } from './http-error/http-error.filter';
import { LoggerController } from './logger/logger.controller';
import { LoggerInterceptor } from './logger/logger.interceptor';

@Module({
  controllers: [AppController, DemoOneController, LoggerController],
  providers: [
    DemoOneService,
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpErrorFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ]
})
export class AppModule {}
