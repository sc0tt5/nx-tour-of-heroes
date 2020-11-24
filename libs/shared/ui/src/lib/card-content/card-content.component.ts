import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nx-demo-card-content',
  templateUrl: './card-content.component.html'
})
export class CardContentComponent {
  @Input() name: string;
  @Input() description: string;
  @Output() selected = new EventEmitter();

  selectItem() {
    console.log('you clicked me....');
    this.selected.emit();
  }
}
