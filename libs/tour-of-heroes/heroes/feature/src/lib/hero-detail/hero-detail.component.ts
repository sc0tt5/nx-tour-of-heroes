import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroDetailFacade } from './+state/hero-detail.facade';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  message = '?';
  showEditor = false;
  showModal = false;

  hero$: Observable<Hero>;
  heroLoaded$: Observable<boolean>;

  private heroToDelete: Hero;

  constructor(private facade: HeroDetailFacade) {}

  ngOnInit(): void {
    this.hero$ = this.facade.hero$;
    this.heroLoaded$ = this.facade.heroLoaded$;
  }

  ngOnDestroy(): void {
    this.facade.resetHeroState();
  }

  askToDelete(hero: Hero): void {
    console.log('askToDelete', hero);
    this.heroToDelete = hero;
    this.message = `Would you like to delete ${this.heroToDelete.name}?`;
    this.showModal = true;
  }

  closeModal(): void {
    // this.facade.selectHeroId(null);
    this.showModal = false;
  }

  deleteHero(): void {
    this.closeModal();
    if (this.heroToDelete) {
      console.log('[DELETE] ...should pope the modal');
      // todo: build out this functionality in the store
    }
  }

  editHero(hero: Hero): void {
    console.log('editHero clicked....');
    this.showEditor = true;
  }
}
