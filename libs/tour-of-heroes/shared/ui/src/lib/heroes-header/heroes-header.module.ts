import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesNavModule } from '../heroes-nav/heroes-nav.module';
import { HeroesHeaderComponent } from './heroes-header.component';

@NgModule({
  imports: [CommonModule, HeroesNavModule, RouterModule],
  declarations: [HeroesHeaderComponent],
  exports: [HeroesHeaderComponent]
})
export class HeroesHeaderModule {}
