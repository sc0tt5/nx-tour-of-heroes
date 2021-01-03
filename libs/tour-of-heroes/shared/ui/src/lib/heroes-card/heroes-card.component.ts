import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shrd-ui-toh-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.scss']
})
export class HeroesCardComponent {
  @Input() name: string;
  @Input() rating: number;
  @Output() deleted = new EventEmitter();
  @Output() selected = new EventEmitter();

  deleteItem() {
    this.deleted.emit();
  }

  selectItem() {
    this.selected.emit();
  }
}
