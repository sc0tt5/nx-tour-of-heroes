import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardFooterComponent } from './card-footer.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [CardFooterComponent],
  exports: [CardFooterComponent]
})
export class CardFooterModule {}
