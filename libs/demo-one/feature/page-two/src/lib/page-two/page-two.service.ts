import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '@nx-demo/demo-one/data-access';
import { PageTwo } from '@nx-demo/shared/models';

@Injectable()
export class PageTwoService extends ResourceService<PageTwo> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, '/api/pages');
  }
}
