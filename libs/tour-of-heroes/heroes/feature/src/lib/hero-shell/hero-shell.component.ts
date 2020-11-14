import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';
import { HeroesFacade } from '@nx-demo/tour-of-heroes/heroes/data-access';

@Component({
  templateUrl: './hero-shell.component.html',
  styleUrls: ['./hero-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroShellComponent implements OnInit, OnDestroy {
  selected: Hero;

  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private facade: HeroesFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  ngOnDestroy() {
    this.facade.initializeHeroes();
  }

  select(hero: Hero) {
    this.selected = hero;
  }
}
