import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { TourOfHeroesService } from './tour-of-heroes.service';

@Controller('heroes')
export class TourOfHeroesController {
  constructor(private readonly tourOfHeroesService: TourOfHeroesService) {}

  @Post()
  create(@Body() hero: Hero) {
    // todo:
    // return this.tourOfHeroesService.create(hero);
  }

  @Get()
  findAll(): Observable<Hero[]> {
    return this.tourOfHeroesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Hero> {
    return this.tourOfHeroesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() hero: Hero) {
    // todo: hero update dto
    // return this.tourOfHeroesService.update(hero);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // todo:
    // return this.tourOfHeroesService.remove(+id);
  }
}
