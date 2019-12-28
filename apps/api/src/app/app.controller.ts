import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  getMessage(): string {
    return '/api/message';
  }

  @Get('/')
  getPages(): string {
    return '/api/pages';
  }
}
