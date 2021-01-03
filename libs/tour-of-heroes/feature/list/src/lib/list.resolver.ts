import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { HeroListFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Injectable({ providedIn: 'root' })
export class HeroListResolver implements Resolve<Hero[]> {
  constructor(private facade: HeroListFacade) {}

  resolve(): Observable<any> {
    this.facade.loadHeroes();
    return of(true);
  }
}
