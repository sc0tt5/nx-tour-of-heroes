import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeroesHeaderComponent } from './heroes-header.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [HeroesHeaderComponent],
  exports: [HeroesHeaderComponent]
})
export class HeroesHeaderModule {}
