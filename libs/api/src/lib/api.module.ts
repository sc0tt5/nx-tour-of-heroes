import { Module } from '@nestjs/common';

import { HttpErrorModule } from './http-error/http-error.module';
import { LoggerModule } from './logger/logger.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

@Module({
  imports: [HttpErrorModule, LoggerModule, TourOfHeroesModule]
})
export class ApiModule {}
