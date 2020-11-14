import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroesFacade } from '../+state/heroes.facade';

@Injectable()
export class HeroesResolver implements Resolve<Hero[]> {
  constructor(private facade: HeroesFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this.facade.loadHeroes('heroes');
    return of(true);
  }
}
