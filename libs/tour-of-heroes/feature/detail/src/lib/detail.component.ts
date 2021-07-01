import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { RouterFacade } from '@nx-toh/shared/utils';
import { HeroDetailFacade } from '@nx-toh/tour-of-heroes/shared/data-access';
import { ModalComponent } from '@nx-toh/shared/ui';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @ViewChild('cancelModal') cancelModal: ModalComponent<Hero>;

  hero$: Observable<Hero>;
  heroLoaded$: Observable<boolean>;
  heroToCancel: Hero;
  params$: Observable<boolean>;

  private heroToSave: Hero;

  constructor(private facade: HeroDetailFacade, private router: RouterFacade) {}

  ngOnInit(): void {
    this.hero$ = this.facade.hero$;
    this.heroLoaded$ = this.facade.heroLoaded$;
    this.params$ = this.router.params$;
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
  }

  showModal(hero?: Hero): void {
    this.heroToCancel = hero || this.heroToSave; // todo: fix cd for second try

    if (!this.heroToCancel) {
      this.closeEditor();
    } else {
      this.cancelModal.open(this.heroToCancel);
    }
  }

  updateHero(): void {
    this.facade.updateHero(this.heroToSave);
  }
}
