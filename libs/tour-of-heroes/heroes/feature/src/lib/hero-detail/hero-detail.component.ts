import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '@nx-demo/shared/models';

import { HeroDetailFacade } from './+state/hero-detail.facade';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  heroExists = true;
  message = '?';
  showEditor = false;
  showModal = false;

  hero$: Observable<Hero>;
  heroLoaded$: Observable<boolean>;

  constructor(
    private facade: HeroDetailFacade,
    // private route: ActivatedRouteSnapshot,
    private router: Router
  ) {}

  ngOnInit(): void {
    // todo: router-store? ...but where to put +state ???
    // this.heroExists = !!this.route.params.id;

    // if (this.heroExists) {
    this.loadHero();
    /* } else {
      this.showEditor = true; // create new
    } */
  }

  ngOnDestroy(): void {
    this.facade.resetHeroState();
  }

  askToDelete(hero: Hero): void {
    this.message = `Would you like to delete ${hero.name}?`;
    this.showModal = true;
  }

  closeEditor(): void {
    this.showEditor = false;
  }

  closeModal(): void {
    this.showModal = false;
  }

  deleteHero(id: number): void {
    this.closeModal();
    this.facade.removeHero(id);
  }

  editHero(): void {
    this.showEditor = true;
  }

  loadHero() {
    this.hero$ = this.facade.hero$;
    this.heroLoaded$ = this.facade.heroLoaded$;
  }

  saveHero(hero: Hero): void {
    if (this.heroExists) {
      this.facade.updateHero(hero); // should this be upsert instead?
      this.closeEditor();
    } else {
      // save new hero
      // todo: this.facade.saveHero
      // display new hero
      // todo: this.loadHero()
      // todo: this.heroExists = true
    }
  }
}
