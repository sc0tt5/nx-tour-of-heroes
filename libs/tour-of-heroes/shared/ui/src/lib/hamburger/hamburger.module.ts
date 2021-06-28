import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseModule, MenuModule } from '@carbon/icons-angular';

import { HamburgerComponent } from './hamburger.component';

@NgModule({
  declarations: [HamburgerComponent],
  imports: [CommonModule, CloseModule, MenuModule],
  exports: [HamburgerComponent]
})
export class HamburgerModule {}
