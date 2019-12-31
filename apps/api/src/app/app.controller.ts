import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  @Get('/')
  getMessage(): Observable<string> {
    return of('/api/message');
  }

  @Get('/')
  getPages(): Observable<string> {
    return of('/api/pages');
  }
}
