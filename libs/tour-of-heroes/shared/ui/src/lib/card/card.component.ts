import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shrd-ui-toh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
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
