import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccordionModule, DemoContentModule } from '@nx-demo/shared/ui';
import { PageOneEffects } from './page-one/+state/page-one.effects';
import { initialState, pageOneReducer } from './page-one/+state/page-one.reducer';
import { PageOneComponent } from './page-one/page-one.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageOneComponent,
    data: { state: 'page-one' }
  }
];

@NgModule({
  imports: [
    AccordionModule,
    CommonModule,
    DemoContentModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('page-one', pageOneReducer, {
      initialState: initialState
    }),
    EffectsModule.forFeature([PageOneEffects])
  ],
  declarations: [PageOneComponent]
})
export class DemoOneFeaturePageOneModule {}
