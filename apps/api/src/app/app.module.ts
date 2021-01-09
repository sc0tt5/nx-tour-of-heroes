import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { ApiModule } from '@nx-toh/api';

// tslint:disable-next-line: nx-enforce-module-boundaries // todo: how not to import this from app
import { AppServerModule } from '../../../tour-of-heroes/src/main.server';

// todo: multiple apps

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/tour-of-heroes/browser')
    }),
    ApiModule
  ]
})
export class AppModule {}
