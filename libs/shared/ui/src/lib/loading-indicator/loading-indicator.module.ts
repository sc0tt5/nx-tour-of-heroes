import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoaderInterceptor } from './loader.interceptor';
import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [CommonModule],
  exports: [LoadingIndicatorComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }] // interceptor for loading indicator]
})
export class LoadingIndicatorModule {}
