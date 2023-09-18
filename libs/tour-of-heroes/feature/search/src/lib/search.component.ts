import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { SvgIconComponent } from '@nx-toh/shared/ui';
import { HeroSearchFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Component({
  standalone: true,
  imports: [AsyncPipe, FormsModule, NgClass, NgFor, NgIf, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;
  searchBoxValue = '';

  constructor(private readonly facade: HeroSearchFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  ngOnDestroy(): void {
    this.facade.resetSearchTerm();
  }

  clearSearch(): void {
    this.searchBoxValue = '';
    this.facade.resetSearchTerm();
  }

  search(): void {
    this.facade.searchHeroes(this.searchBoxValue);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}
