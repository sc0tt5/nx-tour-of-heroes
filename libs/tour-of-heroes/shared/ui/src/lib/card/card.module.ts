import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgIconModule } from '@nx-toh/shared/ui';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, SvgIconModule],
  exports: [CardComponent]
})
export class CardModule {}
