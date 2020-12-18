import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { storeFreeze } from 'ngrx-store-freeze';
import { LoggerModule } from 'ngx-logger';

import { DemoOneFeatureShellModule } from '@nx-toh/demo-one/feature/shell';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'demo-one' }),
    DemoOneFeatureShellModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrl}/log`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: environment.disableConsoleLogging
    }),
    StoreModule.forRoot({}, { metaReducers }),
    TransferHttpCacheModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FontAwesomeModule
  ],
  exports: [StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log('[AngularUniversal]', `SSR: Running ${platform} with appId=${appId}`);
  }
}
