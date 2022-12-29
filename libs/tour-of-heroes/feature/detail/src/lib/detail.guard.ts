import { Injectable } from '@angular/core';
import { CanActivate, Params } from '@angular/router';

import { filter, Observable, take } from 'rxjs';

import { RouterFacade } from '@nx-toh/shared/utils';
import { HeroDetailFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Injectable({ providedIn: 'root' })
export class HeroDetailGuard implements CanActivate {
  constructor(private facade: HeroDetailFacade, private router: RouterFacade) {}

  canActivate(): Observable<boolean> {
    this.getParams().subscribe(({ id }) => this.facade.selectHeroId(id as number));
    return this.waitForCollectionToLoad();
  }

  private getParams(): Observable<Params> {
    return this.router.params$.pipe(take(1));
  }

  private waitForCollectionToLoad(): Observable<boolean> {
    return this.facade.heroLoaded$.pipe(
      filter(loaded => loaded),
      take(1)
    );
  }
}
