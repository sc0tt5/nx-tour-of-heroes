import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Hero } from '@nx-demo/shared/models';

@Component({
  selector: 'nx-demo-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent {
  @Input() heroes: Hero[];
  @Output() deleted = new EventEmitter<Hero>();
  @Output() selected = new EventEmitter<Hero>();

  faEdit = faEdit;
  faTrash = faTrash;

  deleteHero(hero: Hero) {
    this.deleted.emit(hero);
  }

  selectHero(hero: Hero) {
    this.selected.emit(hero);
  }

  trackByHero(index: number, hero: Hero): string {
    return hero.id;
  }
}
