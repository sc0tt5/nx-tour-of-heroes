import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';

import { HeroDetailFacade } from './+state/detail.facade';

@Injectable({ providedIn: 'root' })
export class HeroDetailResolver implements Resolve<Hero[]> {
  constructor(private facade: HeroDetailFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.facade.selectHeroId(route.params.id);
    return of(true);
  }
}
