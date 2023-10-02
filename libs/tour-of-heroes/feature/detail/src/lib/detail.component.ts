import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { ContentLoaderComponent, ModalComponent } from '@nx-toh/shared/ui';
import { RouterFacade } from '@nx-toh/shared/utils';
import { HeroDetailFacade } from '@nx-toh/tour-of-heroes/shared/data-access';
import { EditorComponent } from '@nx-toh/tour-of-heroes/shared/ui';

@Component({
  standalone: true,
  imports: [AsyncPipe, ContentLoaderComponent, EditorComponent, ModalComponent, NgIf, NgTemplateOutlet],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @ViewChild('cancelModal') cancelModal: ModalComponent<Hero>;

  hero$: Observable<Hero>;
  heroLoaded$: Observable<boolean>;
  heroToCancel: Hero;
  params$: Observable<Record<string, string>>;

  private heroToSave: Hero;

  constructor(
    private readonly facade: HeroDetailFacade,
    private readonly router: RouterFacade
  ) {}

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
