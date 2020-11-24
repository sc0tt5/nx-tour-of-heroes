import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardContentComponent } from './card-content.component';

@NgModule({
  declarations: [CardContentComponent],
  imports: [CommonModule],
  exports: [CardContentComponent]
})
export class CardContentModule {}
