import { HttpModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { HttpErrorFilter } from './http-error.filter';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpErrorFilter
    }
  ]
})
export class HttpErrorModule {}
