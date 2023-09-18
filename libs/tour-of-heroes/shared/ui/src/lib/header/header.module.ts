import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavComponent } from '../nav/nav.component';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, NavComponent, RouterModule, HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
