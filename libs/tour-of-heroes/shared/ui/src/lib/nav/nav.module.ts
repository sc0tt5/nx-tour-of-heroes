import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterStoreModule } from '@nx-toh/shared/utils';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [CommonModule, RouterStoreModule],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class NavModule {}
