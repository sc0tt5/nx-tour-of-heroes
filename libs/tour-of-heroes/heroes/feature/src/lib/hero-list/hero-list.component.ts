import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';

import { HeroListFacade } from './+state/hero-list.facade';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private facade: HeroListFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  delete(id: number): void {
    this.facade.removeHero(id);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}
