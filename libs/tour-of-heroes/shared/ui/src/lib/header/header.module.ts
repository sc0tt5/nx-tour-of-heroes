import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HamburgerModule } from '../hamburger/hamburger.module';
import { NavModule } from '../nav/nav.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, HamburgerModule, NavModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
