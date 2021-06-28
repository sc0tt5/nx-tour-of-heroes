import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { HeroListFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;
  heroToDelete: Hero;

  constructor(private facade: HeroListFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  delete(hero: Hero): void {
    this.facade.removeHero(hero.id);
  }

  showModal(hero: Hero): void {
    this.heroToDelete = hero;
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}
