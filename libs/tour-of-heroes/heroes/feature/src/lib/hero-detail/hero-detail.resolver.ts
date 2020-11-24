import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroDetailFacade } from './+state/hero-detail.facade';

@Injectable({ providedIn: 'root' })
export class HeroDetailResolver implements Resolve<Hero[]> {
  constructor(private facade: HeroDetailFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.facade.selectHeroId(route.params.id);
    this.facade.loadHero(route.params.id);
    return of(true);
  }
}
