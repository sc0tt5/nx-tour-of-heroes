import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeroesModalComponent } from './heroes-modal.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [HeroesModalComponent],
  exports: [HeroesModalComponent]
})
export class HeroesModalModule {}
