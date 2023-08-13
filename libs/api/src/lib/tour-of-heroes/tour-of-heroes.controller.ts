import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';

import { TourOfHeroesService } from './tour-of-heroes.service';

@Controller('heroes')
export class TourOfHeroesController {
  constructor(private readonly tourOfHeroesService: TourOfHeroesService) {}

  @Post()
  create(@Body() hero: Hero) {
    return this.tourOfHeroesService.create(hero);
  }

  @Get()
  findAll(@Query() name?: string): Observable<Hero[]> {
    return this.tourOfHeroesService.findAll(name);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Hero> {
    return this.tourOfHeroesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<number> {
    return this.tourOfHeroesService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() hero: Hero): Observable<Hero> {
    return this.tourOfHeroesService.update(id, hero);
  }
}
