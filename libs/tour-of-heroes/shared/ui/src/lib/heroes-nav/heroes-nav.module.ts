import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterStoreModule } from '@nx-toh/shared/utils';

import { HeroesNavComponent } from './heroes-nav.component';

@NgModule({
  imports: [CommonModule, RouterStoreModule],
  declarations: [HeroesNavComponent],
  exports: [HeroesNavComponent]
})
export class HeroesNavModule {}
