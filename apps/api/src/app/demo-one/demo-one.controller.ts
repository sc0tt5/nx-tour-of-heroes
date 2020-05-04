import { Controller, Get, Query } from '@nestjs/common';
import { PageOne, PageTwo } from '@nx-demo/shared/models';
import { DemoOneService } from './demo-one.service';

@Controller()
export class DemoOneController {
  constructor(private readonly demoOneService: DemoOneService) {}

  @Get('pages')
  getPages(@Query('page') page: string): PageOne | PageTwo {
    return this.demoOneService.getPages(page);
  }
}
