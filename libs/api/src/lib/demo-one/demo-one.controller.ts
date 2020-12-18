import { Controller, Get, HttpException, HttpStatus, Query, UseFilters } from '@nestjs/common';

import { PageOne, PageTwo } from '@nx-toh/shared/models';

import { HttpErrorFilter } from '../http-error/http-error.filter';
import { DemoOneService } from './demo-one.service';

@Controller()
@UseFilters(new HttpErrorFilter())
export class DemoOneController {
  constructor(private readonly demoOneService: DemoOneService) {}

  @Get('/pages')
  getPages(@Query('page') pageName: string): PageOne | PageTwo {
    const page = this.demoOneService.getPages(pageName);

    if (page) {
      return page;
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND); // real http request would not require
    }
  }
}
