import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '@nx-demo/shared/data-access';
import { PageOne } from '@nx-demo/shared/models';

@Injectable()
export class PageOneService extends ResourceService<PageOne> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, '/api/pages');
  }
}
