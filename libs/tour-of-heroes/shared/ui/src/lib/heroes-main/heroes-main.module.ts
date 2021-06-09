import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesMainComponent } from './heroes-main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroesMainComponent],
  exports: [HeroesMainComponent]
})
export class HeroesMainModule {}
