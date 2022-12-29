import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { TourOfHeroesController } from './tour-of-heroes.controller';
import { TourOfHeroesService } from './tour-of-heroes.service';

@Module({
  imports: [HttpModule],
  controllers: [TourOfHeroesController],
  providers: [TourOfHeroesService]
})
export class TourOfHeroesModule {}
