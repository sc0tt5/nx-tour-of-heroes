import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { ContentLoaderComponent, ModalComponent } from '@nx-toh/shared/ui';
import { HeroListFacade } from '@nx-toh/tour-of-heroes/shared/data-access';
import { CardComponent } from '@nx-toh/tour-of-heroes/shared/ui';

@Component({
  standalone: true,
  imports: [AsyncPipe, CardComponent, ContentLoaderComponent, ModalComponent, NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal: ModalComponent<Hero>;

  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private readonly facade: HeroListFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  delete(hero: Hero): void {
    this.facade.removeHero(hero.id);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  showModal(hero: Hero): void {
    this.deleteModal.open(hero);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}
