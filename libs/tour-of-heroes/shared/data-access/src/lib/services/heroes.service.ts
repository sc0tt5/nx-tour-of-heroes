import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { ResourceService } from '@nx-toh/shared/data-access';
import { Hero } from '@nx-toh/shared/models';

const HEROES_API = '/api/heroes';
const HEROES_DETAIL = 'hero';
const HEROES_LIST = 'heroes';

@Injectable({ providedIn: 'root' })
export class HeroesService extends ResourceService<Hero> {
  constructor(
    @Inject(PLATFORM_ID) protected readonly platformId: unknown,
    protected readonly httpClient: HttpClient,
    protected readonly transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, HEROES_API, HEROES_DETAIL, HEROES_LIST);
  }
}
