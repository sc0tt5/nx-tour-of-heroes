import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardContentComponent } from './card-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardContentComponent],
  exports: [CardContentComponent]
})
export class CardContentModule {}
