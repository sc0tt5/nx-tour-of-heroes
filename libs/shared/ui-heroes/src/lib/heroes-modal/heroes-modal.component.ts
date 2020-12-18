import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shrd-ui-toh-modal',
  templateUrl: './heroes-modal.component.html'
})
export class HeroesModalComponent {
  @Input() message: string;
  @Input() isOpen = false;
  @Output() handleYes = new EventEmitter();
  @Output() handleNo = new EventEmitter();

  onNo = () => {
    this.handleNo.emit();
  };

  onYes = () => {
    this.handleYes.emit();
  };
}
