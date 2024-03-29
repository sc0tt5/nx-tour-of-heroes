import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject('serverUrl') private readonly serverUrl: string) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    console.log('[AngularUniversal]', `SSR: Server intercepting the url ${req.url}`); // for demonstration purposes only

    const serverReq = !this.serverUrl
      ? req
      : req.clone({
          url: `${this.serverUrl}${req.url}`
        });

    return next.handle(serverReq);
  }
}
