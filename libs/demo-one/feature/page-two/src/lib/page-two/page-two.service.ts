import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { ResourceService } from '@nx-toh/shared/data-access';
import { PageTwo } from '@nx-toh/shared/models';

@Injectable()
export class PageTwoService extends ResourceService<PageTwo> {
  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected httpClient: HttpClient,
    protected transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, '/api/pages', 'page');
  }
}
