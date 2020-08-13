import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DemoOneFeatureShellModule } from '@nx-demo/demo-one/feature/shell';
import { storeFreeze } from 'ngrx-store-freeze';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    DemoOneFeatureShellModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrl}/logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: environment.disableConsoleLogging
    }),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  exports: [StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
