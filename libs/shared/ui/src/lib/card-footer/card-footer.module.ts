import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardFooterComponent } from './card-footer.component';

@NgModule({
  declarations: [CardFooterComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CardFooterComponent]
})
export class CardFooterModule {}
