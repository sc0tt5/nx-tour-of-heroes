import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
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
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string,
    private readonly log: NGXLogger
  ) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    this.log.info(`Running ${platform} with appId=${appId}`);
  }
}
