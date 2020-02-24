import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  @Get('/')
  getPages(): Observable<string> {
    return of('/api/pages');
  }
}
