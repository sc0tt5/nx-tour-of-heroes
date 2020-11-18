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
  message = '?';
  showModal = false;

  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  private heroToDelete: Hero;
  private selected: Hero;

  constructor(private facade: HeroesFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  ngOnDestroy() {
    this.facade.resetHeroesState();
  }

  askToDelete(hero: Hero) {
    console.log('[DELETE]');
    this.heroToDelete = hero;
    this.showModal = true;
    if (this.heroToDelete.name) {
      this.message = `Would you like to delete ${this.heroToDelete.name}?`;
    }
  }

  select(hero: Hero) {
    console.log('[EDIT]');
    this.selected = hero;
  }
}
