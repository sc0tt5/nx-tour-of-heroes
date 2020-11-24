import { Module } from '@nestjs/common';

import { DemoOneModule } from './demo-one/demo-one.module';
import { HttpErrorModule } from './http-error/http-error.module';
import { LoggerModule } from './logger/logger.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

@Module({
  imports: [DemoOneModule, HttpErrorModule, LoggerModule, TourOfHeroesModule]
})
export class ApiModule {}
