import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroListFacade } from './+state/hero-list.facade';

@Injectable({ providedIn: 'root' })
export class HeroListResolver implements Resolve<Hero[]> {
  constructor(private facade: HeroListFacade) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.facade.loadHeroes();
    return of(true);
  }
}
