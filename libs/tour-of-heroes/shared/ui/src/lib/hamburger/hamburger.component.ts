import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SvgIconComponent } from '@nx-toh/shared/ui';

/**
 * Source: https://github.com/IBM/carbon-components-angular/blob/master/src/ui-shell/header/hamburger.component.ts
 */
@Component({
  standalone: true,
  imports: [NgClass, NgIf, SvgIconComponent],
  selector: 'shrd-ui-toh-hamburger',
  templateUrl: './hamburger.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerComponent {
  @Input() active = false;
  @Output() selected = new EventEmitter(false);

  doClick() {
    this.selected.emit(this.active);
  }
}
