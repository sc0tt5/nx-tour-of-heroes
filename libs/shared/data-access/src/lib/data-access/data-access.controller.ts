import { Controller, Get, Query } from '@nestjs/common';
import { PageOne, PageTwo } from '@nx-demo/shared/models';
import { SharedDataAccessService } from './data-access.service';

@Controller()
export class SharedDataAccessController {
  constructor(private readonly sharedDataAccessService: SharedDataAccessService) {}

  @Get('pages')
  getPages(@Query('page') page: string): PageOne | PageTwo {
    return this.sharedDataAccessService.getPages(page);
  }
}
