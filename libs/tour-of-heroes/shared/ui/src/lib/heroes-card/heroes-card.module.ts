import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesCardComponent } from './heroes-card.component';

@NgModule({
  declarations: [HeroesCardComponent],
  imports: [CommonModule],
  exports: [HeroesCardComponent]
})
export class HeroesCardModule {}
