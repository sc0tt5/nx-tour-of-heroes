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

const mockPage = {
  param: 'page-one',
  name: 'Page 1',
  content: 'Page 1 content...',
  accordionItems: [
    { header: 'header 1', content: 'content 1' },
    { header: 'header 2', content: 'content 2' },
    { header: 'header 3', content: 'content 3' }
  ]
};

/**
 * The HttpTestingController API for matching requests is built around three methods:
 * - expectOne(expr): expect exactly one request that matches
 * - expectNone(expr): expect that no requests matches
 * - match(expr): match the request but do not verify / assert
 * kudos/ref: https://medium.com/sparkles-blog/angular-testing-snippets-httpclient-d1dc2f035eb8
 */

describe('ResourceService', () => {
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [MockService]
    });
    service = TestBed.inject(MockService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  afterEach(async(() => {
    httpMock.verify();
  }));

  describe('update', () => {
    const url = `/api/pages/${mockPage.param}`;

    it('should update the page data', () => {
      service.update(mockPage).subscribe();

      const request = httpMock.expectOne(url).request;

      expect(request.url).toEqual('/api/pages/page-one');
      expect(request.method).toEqual('PUT');
      expect(request.responseType).toEqual('json');

      expect(request.url).not.toEqual('/api/test');
      expect(request.method).not.toEqual('GET');
    });

    it('should emit "true" for 200 Ok', () => {
      let response = null;

      service.update(mockPage).subscribe((receivedResponse: any) => {
        response = receivedResponse;
      });

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush({ status: 200, statusText: 'Ok' });
      const request = requestWrapper.request;

      expect(request.method).toEqual('PUT');
      expect(response.status).toBe(200);
    });
  });

  describe('read', () => {
    const params = new HttpParams({ fromObject: { page: 'page-one' } });
    const url = `/api/pages?${params}`;

    it('should fetch the page data', () => {
      service.read(params).subscribe();

      const request = httpMock.expectOne(url).request;

      expect(request.url).toEqual('/api/pages');
      expect(request.method).toEqual('GET');
      expect(request.responseType).toEqual('json');
      expect(request.params).toEqual(params);

      expect(request.url).not.toEqual('/api/test');
      expect(request.method).not.toEqual('POST');
    });

    it('should emit "true" for 200 Ok', () => {
      let response = null;

      service.read(params).subscribe((receivedResponse: any) => {
        response = receivedResponse;
      });

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush({ status: 200, statusText: 'Ok' });
      const request = requestWrapper.request;

      expect(request.method).toEqual('GET');
      expect(response.status).toBe(200);
    });
  });
});
