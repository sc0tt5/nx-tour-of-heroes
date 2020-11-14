import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '@nx-demo/shared/models';

@Component({
  selector: 'nx-demo-hero-list',
  templateUrl: './hero-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  @Output() deleted = new EventEmitter<Hero>();
  @Output() selected = new EventEmitter<Hero>();

  selectHero(hero: Hero) {
    this.selected.emit(hero);
  }

  deleteHero(hero: Hero) {
    this.deleted.emit(hero);
  }

  trackByHero(index: number, hero: Hero): string {
    return hero.id;
  }
}
