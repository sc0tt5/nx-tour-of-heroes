import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SvgIconComponent } from '@nx-toh/shared/ui';

@Component({
  standalone: true,
  imports: [SvgIconComponent],
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
