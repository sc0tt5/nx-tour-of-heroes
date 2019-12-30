import { Controller, Get } from '@nestjs/common';
import { Message, Page } from '@nx-demo/shared/models';
import { SharedDataAccessService } from './data-access.service';

@Controller()
export class SharedDataAccessController {
  constructor(private readonly sharedDataAccessService: SharedDataAccessService) {}

  @Get('message')
  getMessage(): Message {
    return this.sharedDataAccessService.getMessage();
  }

  @Get('pages')
  getPages(): Page[] {
    return this.sharedDataAccessService.getPages();
  }
}
