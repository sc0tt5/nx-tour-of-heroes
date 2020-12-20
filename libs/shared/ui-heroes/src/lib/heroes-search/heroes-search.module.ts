import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroesSearchComponent } from './heroes-search.component';

@NgModule({
  declarations: [HeroesSearchComponent],
  imports: [CommonModule],
  exports: [HeroesSearchComponent]
})
export class HeroesSearchModule {}
