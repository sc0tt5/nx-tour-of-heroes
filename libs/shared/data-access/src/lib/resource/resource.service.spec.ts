// todo: update unit test for client and server
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TestBed, tick, waitForAsync } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';

import { PageOne } from '@nx-toh/shared/models';

import { ResourceService } from './resource.service';

@Injectable()
export class MockService extends ResourceService<PageOne> {
  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected httpClient: HttpClient,
    protected transferState: TransferState
  ) {
    super(platformId, httpClient, transferState, '/api/pages', 'item', 'items');
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
 * - expectOne(expr): expect exactly one request that matches (will test for a url and close the backend call)
 * - expectNone(expr): expect that no requests matches
 * - match(expr): match the request but do not verify / assert
 * kudos/ref: https://medium.com/sparkles-blog/angular-testing-snippets-httpclient-d1dc2f035eb8
 *
 * See also: https://stackoverflow.com/questions/49430213/error-expected-no-open-requests-found-1
 * Subscribing to a mock request calls it as far as the client side is concerned but does not 'complete' it as far as the backend
 * is concerned. 'Completing' a request can be done in a number of ways;
 *
 * backend = TestBed.get(HttpTestingController)
 * -- backend.expectOne(URL) - this will both test for a url, and 'close' the backend call. This will not test for params, and will fail if your query has params in it.
 * -- backend.expectNone(URL) - in case you're testing for urls that have params, expectOne() wont work. You'll have to use backend.match(). Match does not auto close the backend api call, so you can expectNone() after it to close it out.
 * --.flush(RESPONSE) - flush will force-send a response for the http call, and subsequently close the call. Note: if calling flush on a match(), watch out for match returning an array, i.e. backend.match(...)[0].flush({})
 *
 * Any of these methods will close out the http request, and make backend.verify() behave.
 */

describe('ResourceService', () => {
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule, HttpClientTestingModule],
        providers: [MockService]
      });
      service = TestBed.inject(MockService);
      httpMock = TestBed.inject(HttpTestingController);
    })
  );

  afterEach(
    waitForAsync(() => {
      httpMock.verify();
    })
  );

  describe('create', () => {
    const url = `/api/pages`;

    it('should create a new page', () => {
      service.create(mockPage).subscribe();

      const request = httpMock.expectOne(url).request;

      expect(request.url).toEqual('/api/pages');
      expect(request.method).toEqual('POST');
      expect(request.responseType).toEqual('json');

      expect(request.url).not.toEqual('/api/test');
      expect(request.method).not.toEqual('GET');
    });

    it('should emit "true" for 200 Ok', () => {
      let response = null;

      service.create(mockPage).subscribe((receivedResponse: any) => {
        response = receivedResponse;
      });

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush({ status: 200, statusText: 'Ok' });
      const request = requestWrapper.request;

      expect(request.method).toEqual('POST');
      expect(response.status).toBe(200);
    });

    it('should emit "false" for 400 error', () => {
      let response = null;

      service.create(mockPage).subscribe(
        (receivedResponse: any) => receivedResponse,
        (error: any) => {
          response = error;
        }
      );

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush('test', { status: 400, statusText: 'Bad Request' });

      expect(response.error).toBe('test');
      expect(response.status).toBe(400);
    });
  });

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

    it('should emit failure for 400 error', () => {
      let response = null;

      service.update(mockPage).subscribe(
        (receivedResponse: any) => receivedResponse,
        (error: any) => {
          response = error;
        }
      );

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush('test', { status: 400, statusText: 'Bad Request' });

      expect(response.error).toBe('test');
      expect(response.status).toBe(400);
    });
  });

  describe('read', () => {
    const params = new HttpParams({ fromObject: { page: 'page-one' } });
    const url = `/api/pages?page=${mockPage.param}`;

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

    it(
      'should emit "true" for 200 Ok',
      fakewaitForAsync(() => {
        let response = null;

        service.read(params).subscribe((receivedResponse: any) => {
          console.log({ receivedResponse });
          response = receivedResponse;
        });

        const requestWrapper = httpMock.expectOne(url);
        requestWrapper.flush({ status: 200, statusText: 'Ok' });
        const request = requestWrapper.request;

        expect(request.method).toEqual('GET');
        tick(1500); // the service has a mocked delay of 1000 (add 500 buffer here)
        expect(response.status).toBe(200);
      })
    );

    it('should emit failure for 400 error', () => {
      let response = null;

      service.read(params).subscribe(
        (receivedResponse: any) => receivedResponse,
        (error: any) => {
          response = error;
        }
      );

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush('test', { status: 400, statusText: 'Bad Request' });

      expect(response.error).toBe('test');
      expect(response.status).toBe(400);
    });
  });

  describe('list', () => {
    const url = '/api/pages';

    it('should fetch a list of pages', () => {
      service.list().subscribe();

      const request = httpMock.expectOne(url).request;

      expect(request.url).toEqual('/api/pages');
      expect(request.method).toEqual('GET');
      expect(request.responseType).toEqual('json');

      expect(request.url).not.toEqual('/api/test');
      expect(request.method).not.toEqual('POST');
    });

    it('should emit "true" for 200 Ok', () => {
      let response = null;

      service.list().subscribe((receivedResponse: any) => {
        response = receivedResponse;
      });

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush({ status: 200, statusText: 'Ok' });
      const request = requestWrapper.request;

      expect(request.method).toEqual('GET');
      expect(response.status).toBe(200);
    });

    it('should emit failure for 400 error', () => {
      let response = null;

      service.list().subscribe(
        (receivedResponse: any) => receivedResponse,
        (error: any) => {
          response = error;
        }
      );

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush('test', { status: 400, statusText: 'Bad Request' });

      expect(response.error).toBe('test');
      expect(response.status).toBe(400);
    });
  });

  describe('delete', () => {
    const url = `/api/pages/${mockPage.param}`;

    it('should delete the page', () => {
      service.delete(mockPage.param).subscribe();

      const request = httpMock.expectOne(url).request;

      expect(request.url).toEqual('/api/pages/page-one');
      expect(request.method).toEqual('DELETE');
      expect(request.responseType).toEqual('json');

      expect(request.url).not.toEqual('/api/test');
      expect(request.method).not.toEqual('GET');
    });

    it('should emit "true" for 200 Ok', () => {
      let response = null;

      service.delete(mockPage.param).subscribe((receivedResponse: any) => {
        response = receivedResponse;
      });

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush({ status: 200, statusText: 'Ok' });
      const request = requestWrapper.request;

      expect(request.method).toEqual('DELETE');
      expect(response.status).toBe(200);
    });

    it('should emit failure for 400 error', () => {
      let response = null;

      service.delete(mockPage.param).subscribe(
        (receivedResponse: any) => receivedResponse,
        (error: any) => {
          response = error;
        }
      );

      const requestWrapper = httpMock.expectOne(url);
      requestWrapper.flush('test', { status: 400, statusText: 'Bad Request' });

      expect(response.error).toBe('test');
      expect(response.status).toBe(400);
    });
  });
});
