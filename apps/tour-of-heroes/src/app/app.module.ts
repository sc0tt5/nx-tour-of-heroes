import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, NgModule, PLATFORM_ID, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { LoggerModule, NGXLogger } from 'ngx-logger';

import { HeaderModule, MainModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppStoreModule } from './app.store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,
    MainModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.apiUrl}/log`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: environment.disableConsoleLogging
    }),
    AppStoreModule,
    TransferHttpCacheModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private readonly appId = inject(APP_ID);
  private readonly log = inject(NGXLogger);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly platform = isPlatformBrowser(this.platformId) ? 'in the browser' : 'on the server';

  constructor() {
    console.log(`Running ${this.platform} with appId=${this.appId}`); // for demonstration purposes only
  }
}
