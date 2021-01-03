import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { ResourceService } from '@nx-toh/shared/data-access';

const HEROES_API = '/api/heroes';
const HEROES_DETAIL = 'hero';
const HEROES_LIST = 'heroes';

@Injectable({ providedIn: 'root' })
export class HeroesService extends ResourceService<any> {
  // todo: change from any
  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected httpClient: HttpClient,
    protected transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, HEROES_API, HEROES_DETAIL, HEROES_LIST);
  }
}
