import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseModule } from '@carbon/icons-angular';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CloseModule, CommonModule],
  exports: [CardComponent]
})
export class CardModule {}
