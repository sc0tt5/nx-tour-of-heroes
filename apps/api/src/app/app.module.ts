import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { ApiModule } from '@nx-demo/api';

import { AppServerModule as TourOfHeroesAppServerModule } from '../../../tour-of-heroes/src/main.server'; // todo: ?

// todo: multiple apps

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: TourOfHeroesAppServerModule,
      viewsPath: join(process.cwd(), 'dist/apps/tour-of-heroes/browser')
    }),
    ApiModule
  ]
})
export class AppModule {}
