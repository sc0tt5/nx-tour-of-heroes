import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesNavComponent } from './heroes-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroesNavComponent],
  exports: [HeroesNavComponent]
})
export class HeroesNavModule {}
