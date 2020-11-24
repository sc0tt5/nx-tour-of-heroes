import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroListFacade } from './+state/hero-list.facade';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private facade: HeroListFacade, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  select(id: number) {
    this.router.navigate([`/heroes/${id}`]);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}
