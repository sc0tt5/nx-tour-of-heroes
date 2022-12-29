import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { ModalComponent } from '@nx-toh/shared/ui';
import { HeroListFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal: ModalComponent<Hero>;

  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private facade: HeroListFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  delete(hero: Hero): void {
    this.facade.removeHero(hero.id);
  }

  showModal(hero: Hero): void {
    this.deleteModal.open(hero);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}
