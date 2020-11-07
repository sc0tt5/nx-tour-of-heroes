import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { ShellService } from './shell/shell.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
  providers: [ShellService]
})
export class DemoOneFeatureShellModule {}
