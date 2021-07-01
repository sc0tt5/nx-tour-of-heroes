import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgIconModule } from '@nx-toh/shared/ui';

import { HamburgerComponent } from './hamburger.component';

@NgModule({
  declarations: [HamburgerComponent],
  imports: [CommonModule, SvgIconModule],
  exports: [HamburgerComponent]
})
export class HamburgerModule {}
