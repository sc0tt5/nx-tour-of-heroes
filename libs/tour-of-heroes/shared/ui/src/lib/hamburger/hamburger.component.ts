import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Source: https://github.com/IBM/carbon-components-angular/blob/master/src/ui-shell/header/hamburger.component.ts
 */
@Component({
  selector: 'shrd-ui-toh-hamburger',
  templateUrl: './hamburger.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerComponent {
  @Input() active = false;
  @Output() selected: EventEmitter<Object> = new EventEmitter<Object>();

  doClick() {
    this.selected.emit(this.active);
  }
}
