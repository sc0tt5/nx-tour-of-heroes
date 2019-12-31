import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
