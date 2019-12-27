import { Controller, Get } from '@nestjs/common';
import { Message } from '@nx-demo/shared/models';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
