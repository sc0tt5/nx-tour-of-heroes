import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { filter, Observable, take } from 'rxjs';

import { HeroListFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Injectable({ providedIn: 'root' })
export class HeroListGuard implements CanActivate {
  constructor(private facade: HeroListFacade) {}

  canActivate(): Observable<boolean> {
    this.facade.loadHeroes();
    return this.waitForCollectionToLoad();
  }

  private waitForCollectionToLoad(): Observable<boolean> {
    return this.facade.heroesLoaded$.pipe(
      filter(loaded => loaded),
      take(1)
    );
  }
}
