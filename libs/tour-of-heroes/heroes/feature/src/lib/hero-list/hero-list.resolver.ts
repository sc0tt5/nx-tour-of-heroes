import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroListFacade } from './+state/hero-list.facade';

@Injectable({ providedIn: 'root' })
export class HeroListResolver implements Resolve<Hero[]> {
  constructor(private facade: HeroListFacade) {}

  resolve(): Observable<any> {
    this.facade.loadHeroes();
    return of(true);
  }
}
