import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { LoadingIndicatorModule } from '@nx-demo/shared/ui';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/page-one'
  },
  {
    path: 'page-one',
    loadChildren: () =>
      import('@nx-demo/demo-one/feature/page-one').then(m => m.DemoOneFeaturePageOneModule)
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('@nx-demo/demo-one/feature/page-two').then(m => m.DemoOneFeaturePageTwoModule)
  }
];

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LoadingIndicatorModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, { metaReducers })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
