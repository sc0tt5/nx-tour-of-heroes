import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { RouterFacade } from '@nx-toh/shared/utils';

import { HeroDetailFacade } from './+state/hero-detail.facade';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  heroToSave: Hero;

  hero$: Observable<Hero>;
  heroLoaded$: Observable<boolean>;
  params$: Observable<boolean>;

  constructor(private facade: HeroDetailFacade, private router: RouterFacade) {}

  ngOnInit(): void {
    this.loadHero();
  }

  ngOnDestroy(): void {
    this.facade.resetHeroState();
  }

  closeEditor(): void {
    this.facade.goBack();
  }

  onHeroChange(hero: Hero): void {
    this.heroToSave = { ...hero };
  }

  saveHero(): void {
    this.facade.saveHero(this.heroToSave);
    this.closeEditor();
  }

  updateHero(): void {
    this.facade.updateHero(this.heroToSave);
    this.closeEditor();
  }

  private loadHero(): void {
    this.hero$ = this.facade.hero$;
    this.heroLoaded$ = this.facade.heroLoaded$;
    this.params$ = this.router.params$;
  }
}
