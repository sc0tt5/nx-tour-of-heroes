import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HamburgerModule } from '../hamburger/hamburger.module';
import { HeroesNavModule } from '../heroes-nav/heroes-nav.module';
import { HeroesHeaderComponent } from './heroes-header.component';

@NgModule({
  imports: [CommonModule, HamburgerModule, HeroesNavModule, RouterModule],
  declarations: [HeroesHeaderComponent],
  exports: [HeroesHeaderComponent]
})
export class HeroesHeaderModule {}
