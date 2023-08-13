import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {
  constructor(
    @Optional() @Inject('serverUrl') private serverUrl: string,
    private log: NGXLogger
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    this.log.info('[AngularUniversal]', `SSR: Server intercepting the url ${req.url}`);

    const serverReq = !this.serverUrl
      ? req
      : req.clone({
          url: `${this.serverUrl}${req.url}`
        });

    return next.handle(serverReq);
  }
}
