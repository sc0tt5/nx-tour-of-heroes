import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { ResourceService } from '@nx-demo/shared/data-access';
import { PageOne } from '@nx-demo/shared/models';

@Injectable()
export class PageOneService extends ResourceService<PageOne> {
  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected httpClient: HttpClient,
    protected transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, '/api/pages', 'page');
  }
}
