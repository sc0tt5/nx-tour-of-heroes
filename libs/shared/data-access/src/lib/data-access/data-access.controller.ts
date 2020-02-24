import { Controller, Get, Query } from '@nestjs/common';
import { Page } from '@nx-demo/shared/models';
import { SharedDataAccessService } from './data-access.service';

@Controller()
export class SharedDataAccessController {
  constructor(private readonly sharedDataAccessService: SharedDataAccessService) {}

  @Get('pages')
  getPages(@Query('page') page: string): Page {
    return this.sharedDataAccessService.getPages(page);
  }
}
