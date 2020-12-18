import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/demo/page-one'
  },
  {
    path: 'demo',
    children: [
      {
        path: 'page-one',
        loadChildren: () =>
          import('@nx-toh/demo-one/feature/page-one').then(m => m.DemoOneFeaturePageOneModule)
      },
      {
        path: 'page-two',
        loadChildren: () =>
          import('@nx-toh/demo-one/feature/page-two').then(m => m.DemoOneFeaturePageTwoModule)
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/demo' } // no 404, so redirect to root
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
