import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { IncomingMessage } from 'http';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest<IncomingMessage>();
    const method = req.method;
    const url = req.url;
    const now = Date.now();

    return next.handle().pipe(
      take(1),
      tap(() => Logger.log(`${method} ${url} ${Date.now() - now}ms`, context.getClass().name))
    );
  }
}
