import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { PageOne } from '@nx-demo/shared/models';
import { ResourceService } from './resource.service';

@Injectable()
export class MockService extends ResourceService<PageOne> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, '/api/pages');
  }
}

/**
 * The API for matching requests is built around three methods:
 * - expectOne(expr): expect exactly one request that matches
 * - expectNone(expr): expect that no requests matches
 * - match(expr): match the request but do not verify / assert
 * kudos/ref: https://medium.com/sparkles-blog/angular-testing-snippets-httpclient-d1dc2f035eb8
 */

describe('ResourceService', () => {
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [MockService]
    });
    service = TestBed.inject(MockService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('read', () => {
    it('should fetch the page data', async(() => {
      const params = new HttpParams({ fromObject: { page: 'page-one' } });
      const url = `/api/pages?${params}`;

      service.read(params).subscribe();

      const request = httpMock.expectOne(url).request;

      expect(request.url).toEqual('/api/pages');
      expect(request.method).toEqual('GET');
      expect(request.responseType).toEqual('json');
      expect(request.params).toEqual(params);

      expect(request.url).not.toEqual('/api/test');
      expect(request.method).not.toEqual('POST');
    }));

    it('should emit "true" for 200 Ok', async(() => {
      const params = new HttpParams({ fromObject: { page: 'page-one' } });
      const url = `/api/pages?${params}`;
      let response = null;

      service.read(params).subscribe((receivedResponse: any) => {
        response = receivedResponse;
      });

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush({ status: 200, statusText: 'Ok' });
      const request = requestWrapper.request;

      expect(request.method).toEqual('GET');
      expect(response.status).toBe(200);
    }));
  });
});
