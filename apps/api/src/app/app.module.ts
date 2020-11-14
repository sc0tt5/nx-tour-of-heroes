import { HttpModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppServerModule as TourOfHeroesAppServerModule } from '../../../tour-of-heroes/src/main.server';
import { DemoOneController } from './demo-one/demo-one.controller';
import { DemoOneService } from './demo-one/demo-one.service';
import { HttpErrorFilter } from './http-error/http-error.filter';
import { LoggerController } from './logger/logger.controller';
import { LoggerInterceptor } from './logger/logger.interceptor';
import { TourOfHeroesController } from './tour-of-heroes/tour-of-heroes.controller';
import { TourOfHeroesService } from './tour-of-heroes/tour-of-heroes.service';

// todo: multiple apps

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: TourOfHeroesAppServerModule,
      viewsPath: join(process.cwd(), 'dist/apps/tour-of-heroes/browser')
    }),
    HttpModule
  ],
  controllers: [DemoOneController, LoggerController, TourOfHeroesController],
  providers: [
    DemoOneService,
    TourOfHeroesService,
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
